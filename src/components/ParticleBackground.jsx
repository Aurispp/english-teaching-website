import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DEFAULTS = {
  density: 180,
  particlesScale: 0.75,
  ringDisplacement: 0.15,
  cameraZoom: 3.5,
  colors: ['#4285f4', '#a142f4', '#ea4335'],
  theme: 'light',
  alpha: 1.0,
  breathe: false,
  driftSpeed: 1.0,
};

function poissonDiskSampling(width, height, minDist, maxTries = 30) {
  const cellSize = minDist / Math.SQRT2;
  const gridW = Math.ceil(width / cellSize);
  const gridH = Math.ceil(height / cellSize);
  const grid = new Array(gridW * gridH).fill(null);
  const points = [];
  const active = [];

  const gridIndex = (x, y) =>
    Math.floor(x / cellSize) + Math.floor(y / cellSize) * gridW;

  const addPoint = (p) => {
    points.push(p);
    active.push(points.length - 1);
    grid[gridIndex(p[0], p[1])] = p;
  };

  addPoint([Math.random() * width, Math.random() * height]);

  while (active.length > 0) {
    const idx = Math.floor(Math.random() * active.length);
    const point = points[active[idx]];
    let found = false;

    for (let t = 0; t < maxTries; t++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = minDist + Math.random() * minDist;
      const nx = point[0] + Math.cos(angle) * radius;
      const ny = point[1] + Math.sin(angle) * radius;

      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;

      const gi = Math.floor(nx / cellSize);
      const gj = Math.floor(ny / cellSize);
      let tooClose = false;

      for (let di = -2; di <= 2 && !tooClose; di++) {
        for (let dj = -2; dj <= 2 && !tooClose; dj++) {
          const ni = gi + di;
          const nj = gj + dj;
          if (ni < 0 || ni >= gridW || nj < 0 || nj >= gridH) continue;
          const neighbor = grid[ni + nj * gridW];
          if (neighbor) {
            const dx = neighbor[0] - nx;
            const dy = neighbor[1] - ny;
            if (dx * dx + dy * dy < minDist * minDist) tooClose = true;
          }
        }
      }

      if (!tooClose) {
        addPoint([nx, ny]);
        found = true;
        break;
      }
    }

    if (!found) {
      active[idx] = active[active.length - 1];
      active.pop();
    }
  }

  return points;
}

const SIMPLEX_NOISE_GLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

function createSimFragmentShader(texSize) {
  return `
    precision highp float;
    uniform sampler2D uPosition;
    uniform sampler2D uPosRefs;
    uniform vec2 uRingPos;
    uniform float uTime;
    uniform float uDeltaTime;
    uniform float uRingRadius;
    uniform float uRingWidth;
    uniform float uRingWidth2;
    uniform float uRingDisplacement;

    ${SIMPLEX_NOISE_GLSL}

    void main() {
      vec2 simTexCoords = gl_FragCoord.xy / vec2(${texSize.toFixed(1)});
      vec4 pFrame = texture2D(uPosition, simTexCoords);

      float scale = pFrame.z;
      float velocity = pFrame.w;
      vec2 refPos = texture2D(uPosRefs, simTexCoords).xy;

      float time = uTime * 0.5;
      vec2 curentPos = refPos;

      vec2 pos = pFrame.xy;
      pos *= 0.8;

      float dist = distance(curentPos.xy, uRingPos);
      float noise0 = snoise(vec3(curentPos.xy * 0.2 + vec2(18.4924, 72.9744), time * 0.5));
      float dist1 = distance(curentPos.xy + (noise0 * 0.005), uRingPos);

      float t = smoothstep(uRingRadius - (uRingWidth * 2.0), uRingRadius, dist)
              - smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
      float t2 = smoothstep(uRingRadius - (uRingWidth2 * 2.0), uRingRadius, dist)
               - smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
      float t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

      t = pow(t, 2.0);
      t2 = pow(t2, 3.0);

      t += t2 * 3.0;
      t += t3 * 0.4;
      t += snoise(vec3(curentPos.xy * 30.0 + vec2(11.4924, 12.9744), time * 0.5)) * t3 * 0.5;

      float nS = snoise(vec3(curentPos.xy * 2.0 + vec2(18.4924, 72.9744), time * 0.5));
      t += pow((nS + 1.5) * 0.5, 2.0) * 0.6;

      float noise1 = snoise(vec3(curentPos.xy * 4.0 + vec2(88.494, 32.4397), time * 0.35));
      float noise2 = snoise(vec3(curentPos.xy * 4.0 + vec2(50.904, 120.947), time * 0.35));
      float noise3 = snoise(vec3(curentPos.xy * 20.0 + vec2(18.4924, 72.9744), time * 0.5));
      float noise4 = snoise(vec3(curentPos.xy * 20.0 + vec2(50.904, 120.947), time * 0.5));

      vec2 disp = vec2(noise1, noise2) * 0.03;
      disp += vec2(noise3, noise4) * 0.005;

      disp.x += sin((refPos.x * 20.0) + (time * 4.0)) * 0.02 * clamp(dist, 0.0, 1.0);
      disp.y += cos((refPos.y * 20.0) + (time * 3.0)) * 0.02 * clamp(dist, 0.0, 1.0);

      pos -= (uRingPos - (curentPos + disp)) * pow(t2, 0.75) * uRingDisplacement;

      float scaleDiff = t - scale;
      scaleDiff *= 0.2;
      scale += scaleDiff;

      vec2 finalPos = curentPos + disp + (pos * 0.25);

      velocity *= 0.5;
      velocity += scale * 0.25;

      gl_FragColor = vec4(finalPos, scale, velocity);
    }
  `;
}

const RENDER_VERTEX_SHADER = `
  precision highp float;
  attribute vec4 seeds;

  uniform sampler2D uPosition;
  uniform float uTime;
  uniform float uParticleScale;
  uniform float uPixelRatio;
  uniform int uColorScheme;
  uniform float uPulseProgress;

  varying vec4 vSeeds;
  varying float vVelocity;
  varying float vScale;
  varying vec2 vLocalPos;
  varying vec2 vScreenPos;

  void main() {
    vec4 pos = texture2D(uPosition, uv);
    vSeeds = seeds;
    vVelocity = pos.w;
    vScale = pos.z;
    vLocalPos = pos.xy;

    float cDist = length(pos.xy) * 1.0;
    float pulse = uPulseProgress;
    float pulseT = smoothstep(pulse - 0.25, pulse, cDist) - smoothstep(pulse, pulse + 0.25, cDist);
    pulseT *= smoothstep(1.0, 0.0, cDist);
    pos.xy *= 1.0 + (pulseT * 0.02);

    vec4 viewSpace = modelViewMatrix * vec4(vec3(pos.xy, 0.0), 1.0);
    gl_Position = projectionMatrix * viewSpace;
    vScreenPos = gl_Position.xy;

    gl_PointSize = (vScale * 7.0) * (uPixelRatio * 0.5) * uParticleScale;
  }
`;

const RENDER_FRAGMENT_SHADER = `
  precision highp float;

  varying vec4 vSeeds;
  varying vec2 vScreenPos;
  varying vec2 vLocalPos;
  varying float vScale;
  varying float vVelocity;

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  uniform vec2 uRingPos;
  uniform vec2 uRez;

  uniform float uAlpha;
  uniform float uTime;

  uniform int uColorScheme;

  ${SIMPLEX_NOISE_GLSL}

  #define PI 3.1415926535897932384626433832795

  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, s, -s, c) * v;
  }

  void main() {
    float ratio = uRez.x / uRez.y;

    float noiseAngle = snoise(vec3(vLocalPos * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85));
    float noiseColor = snoise(vec3(vLocalPos * 2.0 + vec2(74.664, 91.556), uTime * 0.5));
    noiseColor = (noiseColor + 1.0) * 0.5;

    float angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x);

    vec2 uv = gl_PointCoord.xy - 0.5;
    uv.y *= -1.0;
    uv = rotate(uv, -angle + (noiseAngle * 0.5));

    float h = 0.8;
    float progress = smoothstep(0.0, 0.75, pow(noiseColor, 2.0));
    vec3 col = mix(
      mix(uColor1, uColor2, progress / h),
      mix(uColor2, uColor3, (progress - h) / (1.0 - h)),
      step(h, progress)
    );
    vec3 color = col;

    float disc = smoothstep(0.5, 0.45, length(uv));

    float a = uAlpha * disc * smoothstep(0.1, 0.2, vScale);

    if (a < 0.01) {
      discard;
    }

    color = clamp(color, 0.0, 1.0);

    color = mix(color, color * clamp(vVelocity, 0.0, 1.0), float(uColorScheme == 0));

    gl_FragColor = vec4(color, clamp(a, 0.0, 1.0));
  }
`;

class ParticleSystem {
  constructor(container, config = {}) {
    this.container = container;
    this.config = { ...DEFAULTS, ...config };
    this.skipFrame = false;
    this.disposed = false;
    this.animId = null;
    this.time = 0;
    this.texSize = 256;
    this.everRendered = false;
    this.mouse = new THREE.Vector2();
    this.ringPos = new THREE.Vector2();
    this.intersectionPoint = new THREE.Vector3();
    this.mouseIsOver = false;
    this.isIntersecting = false;
    this.hoverProgress = 0;
    this.hoverTarget = 0;

    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
    container.appendChild(this.canvas);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: false,
      precision: 'highp',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);

    this.renderer.getContext().getExtension('EXT_color_buffer_float');
    this.renderer.getContext().getExtension('OES_texture_float_linear');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      40, container.offsetWidth / container.offsetHeight, 0.1, 1000
    );
    this.camera.position.z = this.config.cameraZoom;

    this.simScene = new THREE.Scene();
    this.simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.raycaster = new THREE.Raycaster();
    this.raycastPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(12.5, 12.5),
      new THREE.MeshBasicMaterial({ color: 0xff0000, visible: false, side: THREE.DoubleSide })
    );
    this.scene.add(this.raycastPlane);

    this.clock = new THREE.Clock();

    this.initParticles();
    this.initEvents();
    this.animate();
  }

  initParticles() {
    const minDist = this.lerp(10, 2, this.config.density / 300);
    const rawPoints = poissonDiskSampling(500, 500, minDist, 20);

    const pointsData = [];
    for (const p of rawPoints) {
      pointsData.push(p[0] - 250, p[1] - 250);
    }
    const count = pointsData.length / 2;

    const length = this.texSize * this.texSize;
    const data = new Float32Array(length * 4);
    for (let i = 0; i < count && i < length; i++) {
      const x = (pointsData[i * 2] / 500);
      const y = (pointsData[i * 2 + 1] / 500);
      data[i * 4] = x;
      data[i * 4 + 1] = y;
      data[i * 4 + 2] = 0;
      data[i * 4 + 3] = 0;
    }

    this.posTex = new THREE.DataTexture(
      data, this.texSize, this.texSize,
      THREE.RGBAFormat, THREE.FloatType
    );
    this.posTex.needsUpdate = true;

    const rtOpts = {
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };
    this.rt1 = new THREE.WebGLRenderTarget(this.texSize, this.texSize, rtOpts);
    this.rt2 = new THREE.WebGLRenderTarget(this.texSize, this.texSize, rtOpts);

    this.renderer.setRenderTarget(this.rt1);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.rt2);
    this.renderer.clear();
    this.renderer.setRenderTarget(null);

    this.simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: this.posTex },
        uPosRefs: { value: this.posTex },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRingRadius: { value: 0.175 },
        uDeltaTime: { value: 0 },
        uRingWidth: { value: 0.107 },
        uRingWidth2: { value: 0.05 },
        uRingDisplacement: { value: this.config.ringDisplacement },
        uTime: { value: 0 },
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: createSimFragmentShader(this.texSize),
    });

    const simQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.simMaterial);
    this.simScene.add(simQuad);

    const colors = this.config.colors;
    this.renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: this.posTex },
        uTime: { value: 0 },
        uParticleScale: { value: this.config.particlesScale },
        uPixelRatio: { value: this.renderer.getPixelRatio() },
        uColorScheme: { value: this.config.theme === 'dark' ? 0 : 1 },
        uPulseProgress: { value: 0 },
        uColor1: { value: new THREE.Color(colors[0]) },
        uColor2: { value: new THREE.Color(colors[1]) },
        uColor3: { value: new THREE.Color(colors[2]) },
        uAlpha: { value: this.config.alpha },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRez: { value: new THREE.Vector2(
          this.renderer.domElement.width,
          this.renderer.domElement.height
        )},
      },
      vertexShader: RENDER_VERTEX_SHADER,
      fragmentShader: RENDER_FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const uvs = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 4);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      const col = i % this.texSize;
      const row = Math.floor(i / this.texSize);
      uvs[i * 2] = (col + 0.5) / this.texSize;
      uvs[i * 2 + 1] = (row + 0.5) / this.texSize;

      seeds[i * 4] = Math.random();
      seeds[i * 4 + 1] = Math.random();
      seeds[i * 4 + 2] = Math.random();
      seeds[i * 4 + 3] = Math.random();
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geom.setAttribute('seeds', new THREE.BufferAttribute(seeds, 4));

    this.mesh = new THREE.Points(geom, this.renderMaterial);
    this.mesh.position.set(0, 0, 0);
    this.mesh.scale.set(5, 5, 5);
    this.scene.add(this.mesh);
  }

  get eventTarget() {
    return this.container.parentElement ?? this.container;
  }

  initEvents() {
    window.addEventListener('resize', this.onResize);
    this.eventTarget.addEventListener('pointerenter', this.onPointerEnter);
    this.eventTarget.addEventListener('pointerleave', this.onPointerLeave);
    this.eventTarget.addEventListener('pointermove', this.onPointerMove);
  }

  onResize = () => {
    if (this.disposed) return;
    const w = this.container.offsetWidth;
    const h = this.container.offsetHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderMaterial.uniforms.uRez.value.set(
      this.renderer.domElement.width,
      this.renderer.domElement.height
    );
    this.renderMaterial.uniforms.uPixelRatio.value = this.renderer.getPixelRatio();
  };

  onPointerEnter = () => { this.hoverTarget = 1; };
  onPointerLeave = () => { this.hoverTarget = 0; this.mouseIsOver = false; };

  onPointerMove = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.mouseIsOver =
      this.mouse.x >= -1 && this.mouse.x <= 1 &&
      this.mouse.y >= -1 && this.mouse.y <= 1;
  };

  animate = () => {
    if (this.disposed) return;
    this.animId = requestAnimationFrame(this.animate);

    const dt = this.clock.getDelta();
    this.time += dt;

    this.hoverProgress += (this.hoverTarget - this.hoverProgress) * Math.min(1, dt * 6);

    if (this.mouseIsOver) {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const hits = this.raycaster.intersectObject(this.raycastPlane);
      if (hits.length > 0) {
        this.intersectionPoint.copy(hits[0].point);
        this.isIntersecting = true;
      } else {
        this.isIntersecting = false;
      }
    } else {
      this.isIntersecting = false;
    }

    if (this.isIntersecting) {
      this.ringPos.set(
        this.intersectionPoint.x * 0.175,
        this.intersectionPoint.y * 0.175
      );
    }

    this.skipFrame = !this.skipFrame;
    if (!this.skipFrame) {
      const elapsed = this.clock.getElapsedTime();

      this.simMaterial.uniforms.uPosition.value = this.everRendered ? this.rt1.texture : this.posTex;
      this.simMaterial.uniforms.uTime.value = elapsed;
      this.simMaterial.uniforms.uDeltaTime.value = dt;
      this.simMaterial.uniforms.uRingRadius.value =
        0.175 + Math.sin(this.time) * 0.03 + Math.cos(this.time * 3) * 0.02;
      this.simMaterial.uniforms.uRingPos.value = this.ringPos;
      this.simMaterial.uniforms.uRingWidth.value = 0.107;
      this.simMaterial.uniforms.uRingWidth2.value = 0.05;
      this.simMaterial.uniforms.uRingDisplacement.value = this.config.ringDisplacement;

      this.renderer.setRenderTarget(this.rt2);
      this.renderer.render(this.simScene, this.simCamera);
      this.renderer.setRenderTarget(null);

      this.renderMaterial.uniforms.uPosition.value = this.everRendered ? this.rt2.texture : this.posTex;
      this.renderMaterial.uniforms.uTime.value = elapsed;
      this.renderMaterial.uniforms.uRingPos.value = this.ringPos;
      this.renderMaterial.uniforms.uParticleScale.value =
        (this.renderer.domElement.width / this.renderer.getPixelRatio() / 2000) * this.config.particlesScale;

      const pulseProgress = (elapsed % 8.0) / 8.0;
      this.renderMaterial.uniforms.uPulseProgress.value = pulseProgress;

      if (this.config.breathe) {
        const breatheAlpha = this.config.alpha * (0.85 + 0.15 * Math.sin(elapsed * 0.4));
        this.renderMaterial.uniforms.uAlpha.value = breatheAlpha;
      }

      const temp = this.rt1;
      this.rt1 = this.rt2;
      this.rt2 = temp;

      this.everRendered = true;
    }

    this.renderer.autoClear = false;
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  };

  lerp(a, b, t) {
    return a + (b - a) * t;
  }

  dispose() {
    this.disposed = true;
    if (this.animId !== null) cancelAnimationFrame(this.animId);

    window.removeEventListener('resize', this.onResize);
    this.eventTarget.removeEventListener('pointerenter', this.onPointerEnter);
    this.eventTarget.removeEventListener('pointerleave', this.onPointerLeave);
    this.eventTarget.removeEventListener('pointermove', this.onPointerMove);

    this.rt1.dispose();
    this.rt2.dispose();
    this.posTex.dispose();
    this.mesh.geometry.dispose();
    this.simMaterial.dispose();
    this.renderMaterial.dispose();
    this.raycastPlane.geometry.dispose();
    this.raycastPlane.material.dispose();
    this.renderer.dispose();

    if (this.canvas.parentElement) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
  }
}

export default function ParticleBackground({ className = '', style, ...config }) {
  const containerRef = useRef(null);
  const systemRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    systemRef.current = new ParticleSystem(containerRef.current, config);

    return () => {
      systemRef.current?.dispose();
      systemRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
}
