import React, { useEffect, useRef, useState, useMemo } from 'react';

const LiquidGlassLens = ({ targetRef, colors = ['#22D3EE', '#6366F1', '#A855F7'], lensRadius = 90 }) => {
  const lensRef = useRef(null);
  const reqRef = useRef();
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  const mouse = useRef({ x: 0, y: 0, isActive: false });
  const lens = useRef({ x: 0, y: 0, scale: 0.85, opacity: 0 });

  // Pre-compute displacement map: only the outer ring carries displacement, so refraction is edge-only
  const mapDataUrl = useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const imgData = ctx.createImageData(size, size);
    const data = imgData.data;

    const center = size / 2;
    const radius = size / 2;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = x - center;
        const dy = y - center;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const index = (y * size + x) * 4;

        if (dist <= radius) {
          const d = dist / radius;

          // Edge-only profile: 0 in the center, ramps up after ~55% of radius, falls off at the rim.
          // This kills center magnification and leaves a soft refractive ring at the boundary.
          let mag = 0;
          if (d > 0.55) {
            const t = (d - 0.55) / 0.45;        // 0 → 1 across the ring
            const bell = Math.sin(t * Math.PI); // 0 → 1 → 0 across the ring
            mag = bell * 0.6;
          }

          const nx = dx === 0 ? 0 : dx / dist;
          const ny = dy === 0 ? 0 : dy / dist;

          const normalizedX = -nx * mag;
          const normalizedY = -ny * mag;

          const r = Math.max(0, Math.min(255, Math.round(128 + normalizedX * 127)));
          const g = Math.max(0, Math.min(255, Math.round(128 + normalizedY * 127)));

          data[index] = r;
          data[index + 1] = g;
          data[index + 2] = 0;
          data[index + 3] = 255;
        } else {
          data[index] = 128;
          data[index + 1] = 128;
          data[index + 2] = 128;
          data[index + 3] = 0;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);
    const handler = (e) => setHasReducedMotion(e.matches);
    if(mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    if (hasReducedMotion || !targetRef.current) return;
    
    // Disable on touch/mobile
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const el = targetRef.current;
    
    const onPointerEnter = (e) => {
      mouse.current.isActive = true;
      const rect = el.getBoundingClientRect();
      lens.current.x = e.clientX - rect.left;
      lens.current.y = e.clientY - rect.top;
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const onPointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      mouse.current.isActive = false;
    };

    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);

    const LERPSPEED = 0.18;
    const SCALE_LERP = 0.12;

    const tick = () => {
      if (lensRef.current) {
        lens.current.x += (mouse.current.x - lens.current.x) * LERPSPEED;
        lens.current.y += (mouse.current.y - lens.current.y) * LERPSPEED;

        const rect = el.getBoundingClientRect();
        const lensAbsX = rect.left + lens.current.x;
        const lensAbsY = rect.top + lens.current.y;

        const wrappers = el.querySelectorAll('.tool-wrapper');
        let anyIconHovered = false;
        let nearestDist = Infinity;

        wrappers.forEach(wrapper => {
          const wRect = wrapper.getBoundingClientRect();
          const cx = wRect.left + wRect.width / 2;
          const cy = wRect.top + wRect.height / 2;

          const dx = lensAbsX - cx;
          const dy = lensAbsY - cy;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < nearestDist) nearestDist = dist;

          if (mouse.current.isActive && dist < 70) {
            const proximity = 1 - dist / 70;
            const lift = 2 + proximity * 4;
            wrapper.style.transform = `scale(${1 + proximity * 0.06}) translateY(-${lift}px)`;
            wrapper.style.filter = `drop-shadow(0 0 ${6 + proximity * 10}px ${colors[0]}66) drop-shadow(0 4px 8px ${colors[1]}33)`;
            anyIconHovered = true;
          } else {
            wrapper.style.transform = '';
            wrapper.style.filter = '';
          }
        });

        // Subtle scale-in on hover entry; gentle lift when near an icon
        const targetScale = mouse.current.isActive
          ? (anyIconHovered ? 1.05 : 0.95)
          : 0.85;
        const targetOpacity = mouse.current.isActive
          ? Math.min(1, Math.max(0.4, 1 - nearestDist / 220))
          : 0;

        lens.current.scale += (targetScale - lens.current.scale) * SCALE_LERP;
        lens.current.opacity += (targetOpacity - lens.current.opacity) * SCALE_LERP;

        lensRef.current.style.transform = `translate(${lens.current.x - lensRadius}px, ${lens.current.y - lensRadius}px) scale(${lens.current.scale})`;
        lensRef.current.style.opacity = lens.current.opacity;
      }
      reqRef.current = requestAnimationFrame(tick);
    };
    
    reqRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('pointerenter', onPointerEnter);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onPointerLeave);
      cancelAnimationFrame(reqRef.current);
    };
  }, [hasReducedMotion, targetRef, lensRadius, colors]);

  if (hasReducedMotion) return null;

  const diameter = lensRadius * 2;

  return (
    <>
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="liquid-glass-filter" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
            <feImage href={mapDataUrl} result="map" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lensRef}
        aria-hidden="true"
        className="absolute top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          width: diameter,
          height: diameter,
          backdropFilter: 'url(#liquid-glass-filter)',
          WebkitBackdropFilter: 'url(#liquid-glass-filter)',
          opacity: 0,
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
};

export default LiquidGlassLens;
