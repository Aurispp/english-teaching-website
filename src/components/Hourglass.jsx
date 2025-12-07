import React, { useRef, useEffect, useCallback } from 'react';

/**
 * Hourglass Animation Component - Improved Physics
 * Smooth, continuous sand flow with realistic physics
 */
const Hourglass = ({ getProgress = () => 0, isRunning = false, onFinish }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const stateRef = useRef({
        bottomHeights: [],
        reposeBuffer: [],
        bottomVelocities: [],
        topSandLevel: 1.0,
        particles: [],
        finished: false,
        // Improved stream physics
        streamTime: 0,
        streamBaseOffset: 0,
        streamTargetOffset: 0,
        streamWidth: 2.8,
        streamVelocity: 0,
        spawnAccumulator: 0,
        flowSmooth: 0,
        idleHold: 0,
        streamVisibility: 1,
        lastProgress: 0,
        accumulatedFlow: 0,
        lastFrameTime: 0,
        glassGeometry: null,
        // Dimensions
        width: 0,
        height: 0,
        centerX: 0,
        centerY: 0,
        glassWidth: 0,
        glassHeight: 0,
        neckWidth: 0,
        neckHeight: 20,
        streamSwing: 0,
        topBulbY: 0,
        bottomBulbY: 0,
        bulbRadius: 0
    });

    const config = {
        columnCount: 80,
        particleCount: 200,
        angleOfRepose: 0.65,
        flowRate: 2.8,
        colors: {
            glass: '#e2e8f0',
            sand: ['#ea580c', '#f97316', '#fb923c'],
            stroke: '#d4dbe6'
        },
        glass: {
            tint: 'rgba(148, 163, 184, 0.12)',
            highlight: 'rgba(255, 255, 255, 0.55)'
        },
        particle: {
            baseSize: 1.05,
            sizeVariation: 0.8,
            minSize: 0.8
        }
    };

    const setupDimensions = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const cssW = rect.width || 200;
        const cssH = rect.height || 300;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = Math.max(1, Math.floor(cssW * dpr));
        canvas.height = Math.max(1, Math.floor(cssH * dpr));

        const ctx = canvas.getContext('2d', { alpha: true });
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (dpr !== 1) ctx.scale(dpr, dpr);

        const state = stateRef.current;
        state.width = cssW;
        state.height = cssH;
        state.centerX = cssW / 2;
        state.centerY = cssH / 2;
        state.glassWidth = cssW * 0.6;
        state.glassHeight = cssH * 0.85;
        state.neckWidth = state.glassWidth * 0.15;
        state.neckHeight = 20;
        state.streamSwing = state.neckWidth * 0.22;
        state.topBulbY = state.centerY - state.glassHeight * 0.25;
        state.bottomBulbY = state.centerY + state.glassHeight * 0.25;
        state.bulbRadius = state.glassWidth * 0.35;

        if (state.bottomHeights.length !== config.columnCount) {
            state.bottomHeights = new Array(config.columnCount).fill(0);
            state.reposeBuffer = new Array(config.columnCount).fill(0);
            state.bottomVelocities = new Array(config.columnCount).fill(0);
        }

        const g = state;
        state.glassGeometry = {
            topLeft: { x: g.centerX - g.bulbRadius, y: g.topBulbY - g.bulbRadius },
            topRight: { x: g.centerX + g.bulbRadius, y: g.topBulbY - g.bulbRadius },
            topCenter: { x: g.centerX, y: g.topBulbY },
            neckTopLeft: { x: g.centerX - g.neckWidth / 2, y: g.centerY - g.neckHeight / 2 },
            neckTopRight: { x: g.centerX + g.neckWidth / 2, y: g.centerY - g.neckHeight / 2 },
            neckBottomLeft: { x: g.centerX - g.neckWidth / 2, y: g.centerY + g.neckHeight / 2 },
            neckBottomRight: { x: g.centerX + g.neckWidth / 2, y: g.centerY + g.neckHeight / 2 },
            bottomLeft: { x: g.centerX - g.bulbRadius, y: g.bottomBulbY + g.bulbRadius },
            bottomRight: { x: g.centerX + g.bulbRadius, y: g.bottomBulbY + g.bulbRadius },
            bottomCenter: { x: g.centerX, y: g.bottomBulbY }
        };
    }, []);

    const traceGlassPath = useCallback((ctx) => {
        const state = stateRef.current;
        const g = state.glassGeometry;
        if (!g) return;

        ctx.beginPath();
        ctx.arc(state.centerX, state.topBulbY, state.bulbRadius, -Math.PI, 0);
        ctx.quadraticCurveTo(g.topRight.x, g.neckTopRight.y - 20, g.neckTopRight.x, g.neckTopRight.y);
        ctx.lineTo(g.neckBottomRight.x, g.neckBottomRight.y);
        ctx.quadraticCurveTo(g.bottomRight.x, g.neckBottomRight.y + 20, g.bottomRight.x, g.bottomCenter.y);
        ctx.arc(state.centerX, state.bottomBulbY, state.bulbRadius, 0, Math.PI);
        ctx.quadraticCurveTo(g.bottomLeft.x, g.neckBottomLeft.y + 20, g.neckBottomLeft.x, g.neckBottomLeft.y);
        ctx.lineTo(g.neckTopLeft.x, g.neckTopLeft.y);
        ctx.quadraticCurveTo(g.topLeft.x, g.neckTopLeft.y - 20, g.topLeft.x, g.topCenter.y);
        ctx.closePath();
    }, []);

    const spawnParticle = useCallback((intensity = 1) => {
        const state = stateRef.current;
        if (state.particles.length >= config.particleCount) {
            state.particles.shift();
        }

        const neckCenterX = state.centerX + state.streamBaseOffset * 0.7;
        const spreadX = (Math.random() - 0.5) * state.neckWidth * 0.6 * intensity;
        const spreadVx = (Math.random() - 0.5) * 25 * intensity;
        const baseVelocity = 80 + Math.random() * 100;

        // Slightly larger, more visible particles
        const particleSize = config.particle.baseSize + Math.random() * config.particle.sizeVariation;

        state.particles.push({
            x: neckCenterX + spreadX,
            y: state.centerY + (Math.random() - 0.5) * 6,
            vx: spreadVx,
            vy: baseVelocity * (0.8 + intensity * 0.3),
            life: 1.2,
            size: Math.max(config.particle.minSize, particleSize * intensity),
            colorIndex: Math.floor(Math.random() * config.colors.sand.length),
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 8
        });
    }, []);

    const applyAngleOfRepose = useCallback((dt) => {
        const state = stateRef.current;
        const heights = state.bottomHeights;
        const flows = state.reposeBuffer;
        const velocities = state.bottomVelocities;
        const columns = config.columnCount;
        const maxSlope = config.angleOfRepose;
        const flowRate = config.flowRate * dt;
        const maxHeight = state.bulbRadius * 1.5;

        flows.fill(0);

        // Smoother angle of repose with micro-avalanches
        for (let i = 0; i < columns - 1; i++) {
            const diff = heights[i] - heights[i + 1];
            if (Math.abs(diff) > maxSlope) {
                const sign = diff > 0 ? 1 : -1;
                const excess = Math.abs(diff) - maxSlope;
                // Smoother exponential flow
                const flow = excess * flowRate * (1 - Math.exp(-excess * 2));

                if (sign > 0) {
                    flows[i] -= flow;
                    flows[i + 1] += flow * 0.9;
                    if (i + 2 < columns) flows[i + 2] += flow * 0.1;
                } else {
                    flows[i + 1] -= flow;
                    flows[i] += flow * 0.9;
                    if (i - 1 >= 0) flows[i - 1] += flow * 0.1;
                }
            }
        }

        // Smoother damping
        const damping = Math.exp(-dt * 8);
        for (let i = 0; i < columns; i++) {
            velocities[i] = (velocities[i] * 0.85 + flows[i]) * damping;
            heights[i] = Math.max(0, Math.min(maxHeight, heights[i] + velocities[i]));
        }

        // Gaussian smoothing pass
        for (let pass = 0; pass < 2; pass++) {
            for (let i = 1; i < columns - 1; i++) {
                const neighborAvg = heights[i - 1] * 0.25 + heights[i] * 0.5 + heights[i + 1] * 0.25;
                heights[i] = heights[i] * 0.7 + neighborAvg * 0.3;
            }
        }
    }, []);

    const updateParticles = useCallback((dt, maxHeight) => {
        const state = stateRef.current;
        const gravity = 850;
        const airResistance = 0.012;
        const bounce = 0.22;
        const grainHeight = Math.max(0.3, state.bulbRadius * 0.004);

        state.particles = state.particles.filter(particle => {
            particle.vy += gravity * dt;
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            const dragFactor = 1 - (airResistance * speed * dt);
            particle.vx *= Math.max(0.65, dragFactor);
            particle.vy *= Math.max(0.65, dragFactor);
            particle.x += particle.vx * dt;
            particle.y += particle.vy * dt;
            particle.life -= dt * 0.35;

            // Update rotation
            if (particle.rotationSpeed) {
                particle.rotation += particle.rotationSpeed * dt;
            }

            const columnIndex = Math.floor((particle.x - (state.centerX - state.bulbRadius)) /
                (state.bulbRadius * 2) * config.columnCount);

            if (columnIndex >= 0 && columnIndex < config.columnCount) {
                const sandHeight = state.bottomHeights[columnIndex];
                const sandY = state.bottomBulbY + state.bulbRadius - sandHeight;

                if (particle.y >= sandY - 1) {
                    const impactSpeed = Math.abs(particle.vy);
                    if (impactSpeed > 100) {
                        particle.y = sandY - 2;
                        particle.vy *= -bounce;
                        particle.vx *= 0.5;
                        particle.vx += (Math.random() - 0.5) * 15;
                    } else {
                        // Deposit sand smoothly across multiple columns
                        const spread = 2;
                        for (let d = -spread; d <= spread; d++) {
                            const col = columnIndex + d;
                            if (col >= 0 && col < config.columnCount) {
                                const weight = 1 / (1 + Math.abs(d));
                                state.bottomHeights[col] = Math.min(maxHeight,
                                    state.bottomHeights[col] + grainHeight * weight * 0.3);
                            }
                        }
                        return false;
                    }
                }
            }

            if (particle.y >= state.bottomBulbY + state.bulbRadius) {
                const col = Math.floor((particle.x - (state.centerX - state.bulbRadius)) /
                    (state.bulbRadius * 2) * config.columnCount);
                if (col >= 0 && col < config.columnCount) {
                    state.bottomHeights[col] = Math.min(maxHeight, state.bottomHeights[col] + grainHeight * 0.4);
                }
                return false;
            }

            const halfWidth = state.bulbRadius * 0.85; // Tighter bounds to prevent spilling
            if (particle.x < state.centerX - halfWidth || particle.x > state.centerX + halfWidth) {
                particle.vx *= -0.4;
                particle.x = Math.max(state.centerX - halfWidth, Math.min(state.centerX + halfWidth, particle.x));
            }

            return particle.life > 0;
        });
    }, []);

    const update = useCallback((dt) => {
        const state = stateRef.current;
        const progress = Math.min(1, Math.max(0, getProgress()));
        const maxHeight = state.bulbRadius * 1.5;

        // Track flow rate for smooth animations
        const progressDelta = progress - state.lastProgress;
        state.lastProgress = progress;
        state.accumulatedFlow = state.accumulatedFlow * 0.95 + Math.abs(progressDelta) * 100;

        if (state.finished || progress >= 1) {
            state.topSandLevel = 0;
        } else {
            const remaining = Math.max(0, 1 - progress);
            // Keep a visible cushion of sand until final seconds, then taper
            const targetTopLevel = Math.max(0, Math.min(remaining * 1.05, remaining + 0.08));
            // Smooth exponential interpolation
            state.topSandLevel += (targetTopLevel - state.topSandLevel) * (1 - Math.exp(-dt * 3.2));
        }

        // Calculate flow intensity
        const sumHeights = state.bottomHeights.reduce((sum, h) => sum + h, 0);
        const currentBottomMass = sumHeights / (config.columnCount * maxHeight);
        const targetBottomMass = progress;
        const flowDelta = Math.max(0, targetBottomMass - currentBottomMass);

        const topFactor = Math.max(0, Math.min(1, (state.topSandLevel - 0.001) / 0.08));
        const nearEnd = progress > 0.65; // start taper earlier
        const hasTopSand = topFactor > 0.012;

        // Gradually weaken stream well before end; aim for disappearance by ~last 5s
        const endFalloff = nearEnd ? Math.max(0, (0.99 - progress) / 0.25) : 1;
        const endFalloffShaped = Math.pow(Math.max(0, endFalloff), 1.8);
        state.streamVisibility = endFalloffShaped;

        const rawFlowIntensity = hasTopSand ? topFactor * Math.min(1, flowDelta * 8 + 0.3) * endFalloff : 0;
        state.flowSmooth = state.flowSmooth * 0.88 + rawFlowIntensity * 0.12;
        const flowIntensity = state.flowSmooth;
        const flowActive = (!state.finished && progress > 0 && progress < 1 && hasTopSand);

        if (flowActive) {
            // Gentle stream motion for steadier flow
            state.streamTime += dt;
            const t = state.streamTime;

            // Subtle sway using low-amplitude waves
            const wave1 = Math.sin(t * 0.8) * 0.12;
            const wave2 = Math.sin(t * 1.6 + 1.3) * 0.08;
            const combinedWave = (wave1 + wave2) * state.streamSwing;

            // Smooth target following with spring physics
            state.streamTargetOffset = combinedWave * (0.6 + flowIntensity * 0.4);
            const springStiffness = 12;
            const springDamping = 0.85;
            const springForce = (state.streamTargetOffset - state.streamBaseOffset) * springStiffness;
            state.streamVelocity = (state.streamVelocity + springForce * dt) * springDamping;
            state.streamBaseOffset += state.streamVelocity * dt;

            // Stream width varies smoothly with flow and tapers near end
            const taper = 0.12 + endFalloffShaped * 0.88;
            const targetWidth = (1.4 + state.neckWidth * 0.04 + flowIntensity * 0.9) * taper;
            state.streamWidth += (targetWidth - state.streamWidth) * (1 - Math.exp(-dt * 7));
        } else {
            state.streamBaseOffset *= Math.exp(-dt * 4);
            state.streamWidth += (1.8 - state.streamWidth) * (1 - Math.exp(-dt * 8));
            state.flowSmooth *= Math.exp(-dt * 2);
        }

        state.streamBaseOffset = Math.max(-state.neckWidth * 0.35, Math.min(state.neckWidth * 0.35, state.streamBaseOffset));
        state.streamWidth = Math.max(0.2, Math.min(state.neckWidth * 0.85, state.streamWidth));

        // Add sand to bottom with smooth distribution
        if (flowActive && flowDelta > 0) {
            const totalPixelsNeeded = flowDelta * config.columnCount * maxHeight;
            const addPixels = totalPixelsNeeded * (1 - Math.exp(-dt * 3.5));

            // Gaussian distribution centered on stream
            const streamCol = Math.floor(config.columnCount / 2) +
                Math.floor((state.streamBaseOffset / state.neckWidth) * 8);
            const spread = 12;
            let weightSum = 0;
            const weights = [];

            for (let i = -spread; i <= spread; i++) {
                const sigma = spread / 2.5;
                const w = Math.exp(-(i * i) / (2 * sigma * sigma));
                weights.push(w);
                weightSum += w;
            }

            let wi = 0;
            for (let i = -spread; i <= spread; i++, wi++) {
                const idx = streamCol + i;
                if (idx >= 0 && idx < config.columnCount) {
                    state.bottomHeights[idx] += (weights[wi] / weightSum) * addPixels;
                }
            }

            // Spawn particles for visible flow (more consistent rate, taper near end)
            if (endFalloffShaped > 0.05) {
                const particleRatePerSec = (28 + flowIntensity * 50) * (0.25 + endFalloffShaped * 0.75);
                state.spawnAccumulator += particleRatePerSec * dt;
                const spawnIntensity = (0.65 + flowIntensity * 0.2) * (0.25 + endFalloffShaped * 0.75);
                while (state.spawnAccumulator >= 1) {
                    if (Math.random() < 0.85 * endFalloffShaped) spawnParticle(spawnIntensity);
                    state.spawnAccumulator -= 1;
                }
            } else {
                state.spawnAccumulator = 0;
            }
        } else {
            state.spawnAccumulator = 0;
        }

        applyAngleOfRepose(dt);
        updateParticles(dt, maxHeight);

        for (let i = 0; i < config.columnCount; i++) {
            state.bottomHeights[i] = Math.max(0, Math.min(maxHeight, state.bottomHeights[i]));
        }
    }, [getProgress, spawnParticle, applyAngleOfRepose, updateParticles]);

    const render = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        const state = stateRef.current;

        ctx.clearRect(0, 0, state.width, state.height);

        // Draw glass body
        ctx.save();
        traceGlassPath(ctx);
        const tintGrad = ctx.createLinearGradient(
            state.centerX, state.topBulbY - state.bulbRadius,
            state.centerX, state.bottomBulbY + state.bulbRadius
        );
        tintGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
        tintGrad.addColorStop(0.5, config.glass.tint);
        tintGrad.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
        ctx.fillStyle = tintGrad;
        ctx.fill();
        ctx.restore();

        // Draw top sand
        if (state.topSandLevel > 0.01) {
            const topGrad = ctx.createLinearGradient(0, state.topBulbY - state.bulbRadius, 0, state.centerY);
            topGrad.addColorStop(0, config.colors.sand[1]);
            topGrad.addColorStop(1, config.colors.sand[2]);
            ctx.fillStyle = topGrad;

            const sandHeight = state.topSandLevel * state.bulbRadius * 1.2;
            const surfaceY = state.topBulbY + state.bulbRadius - sandHeight;
            const depression = Math.min(12, (1 - state.topSandLevel) * 15);

            ctx.save();
            ctx.beginPath();
            // Stricter clipping for top bulb
            ctx.arc(state.centerX, state.topBulbY, state.bulbRadius - 3.5, 0, Math.PI * 2);
            ctx.clip();

            ctx.beginPath();
            ctx.moveTo(state.centerX - state.bulbRadius, surfaceY);
            ctx.quadraticCurveTo(state.centerX - state.bulbRadius * 0.5, surfaceY - 4, state.centerX, surfaceY + depression);
            ctx.quadraticCurveTo(state.centerX + state.bulbRadius * 0.5, surfaceY - 4, state.centerX + state.bulbRadius, surfaceY);
            ctx.lineTo(state.centerX + state.neckWidth / 2, state.centerY - state.neckHeight / 2);
            ctx.lineTo(state.centerX - state.neckWidth / 2, state.centerY - state.neckHeight / 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // Draw bottom sand with smooth curves
        const bottomGrad = ctx.createLinearGradient(0, state.centerY, 0, state.bottomBulbY + state.bulbRadius);
        bottomGrad.addColorStop(0, config.colors.sand[1]);
        bottomGrad.addColorStop(0.5, config.colors.sand[1]);
        bottomGrad.addColorStop(1, config.colors.sand[2]);
        ctx.fillStyle = bottomGrad;

        ctx.save();
        ctx.beginPath();
        // Stricter clipping for bottom bulb
        ctx.arc(state.centerX, state.bottomBulbY, state.bulbRadius - 3.5, 0, Math.PI * 2);
        ctx.clip();

        ctx.beginPath();
        const startX = state.centerX - state.bulbRadius;
        const columnWidth = (state.bulbRadius * 2) / config.columnCount;
        ctx.moveTo(startX, state.bottomBulbY + state.bulbRadius);

        // Use bezier curves for smooth sand surface - allow full width to avoid gaps
        for (let i = 0; i < config.columnCount; i++) {
            const x = startX + i * columnWidth;
            const height = state.bottomHeights[i];
            const y = state.bottomBulbY + state.bulbRadius - height;

            if (i === 0) {
                ctx.lineTo(x, y);
            } else {
                const prevHeight = state.bottomHeights[i - 1];
                const prevY = state.bottomBulbY + state.bulbRadius - prevHeight;
                const cpX = x - columnWidth * 0.5;
                const cpY = (prevY + y) / 2;
                ctx.quadraticCurveTo(cpX, cpY, x, y);
            }
        }

        ctx.lineTo(state.centerX + state.bulbRadius, state.bottomBulbY + state.bulbRadius);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Draw stream
        const progress = getProgress();
        if (progress > 0 && progress < 1 && state.topSandLevel > 0.003 && state.streamVisibility > 0.01 && state.streamWidth > 0.18) {
            const streamCenter = state.centerX + state.streamBaseOffset;
            const streamGrad = ctx.createLinearGradient(
                streamCenter, state.centerY - state.neckHeight / 2,
                streamCenter, state.centerY + state.neckHeight / 2 + 20
            );
            streamGrad.addColorStop(0, config.colors.sand[1]);
            streamGrad.addColorStop(1, config.colors.sand[2]);
            ctx.fillStyle = streamGrad;
            ctx.globalAlpha = Math.min(0.9, Math.max(0, state.streamVisibility * 1.1));

            const halfW = state.streamWidth * 0.5;
            ctx.beginPath();
            ctx.moveTo(streamCenter - halfW, state.centerY - state.neckHeight / 2);
            ctx.bezierCurveTo(
                streamCenter - halfW * 0.3, state.centerY - state.neckHeight * 0.2,
                streamCenter - halfW * 0.4, state.centerY + state.neckHeight * 0.3,
                streamCenter - halfW * 0.3, state.centerY + state.neckHeight / 2 + 12
            );
            ctx.lineTo(streamCenter + halfW * 0.3, state.centerY + state.neckHeight / 2 + 16);
            ctx.bezierCurveTo(
                streamCenter + halfW * 0.4, state.centerY + state.neckHeight * 0.3,
                streamCenter + halfW * 0.3, state.centerY - state.neckHeight * 0.2,
                streamCenter + halfW, state.centerY - state.neckHeight / 2
            );
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }

        // Draw particles
        state.particles.forEach(particle => {
            const color = config.colors.sand[particle.colorIndex % config.colors.sand.length];
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.globalAlpha = Math.max(0, Math.min(1, particle.life * 0.9));
            ctx.fillStyle = color;

            // Draw sand grain - only slightly larger than original
            const size = particle.size;
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.45, size * 0.65, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        });

        // Draw glass outline
        ctx.save();
        ctx.strokeStyle = config.colors.stroke;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        traceGlassPath(ctx);
        ctx.stroke();
        ctx.restore();

        // Draw glass highlights
        ctx.save();
        ctx.globalAlpha = 0.5;
        const topHighlight = ctx.createRadialGradient(
            state.centerX - state.bulbRadius * 0.45, state.topBulbY - state.bulbRadius * 0.5, 0,
            state.centerX - state.bulbRadius * 0.45, state.topBulbY - state.bulbRadius * 0.5, state.bulbRadius * 0.5
        );
        topHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        topHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
        topHighlight.addColorStop(1, 'transparent');
        ctx.fillStyle = topHighlight;
        ctx.beginPath();
        ctx.ellipse(state.centerX - state.bulbRadius * 0.45, state.topBulbY - state.bulbRadius * 0.45,
            state.bulbRadius * 0.28, state.bulbRadius * 0.5, -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.45;
        const bottomHighlight = ctx.createRadialGradient(
            state.centerX - state.bulbRadius * 0.45, state.bottomBulbY - state.bulbRadius * 0.2, 0,
            state.centerX - state.bulbRadius * 0.45, state.bottomBulbY - state.bulbRadius * 0.2, state.bulbRadius * 0.5
        );
        bottomHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        bottomHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)');
        bottomHighlight.addColorStop(1, 'transparent');
        ctx.fillStyle = bottomHighlight;
        ctx.beginPath();
        ctx.ellipse(state.centerX - state.bulbRadius * 0.45, state.bottomBulbY - state.bulbRadius * 0.15,
            state.bulbRadius * 0.26, state.bulbRadius * 0.52, -0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }, [getProgress, traceGlassPath]);

    const animate = useCallback(() => {
        const state = stateRef.current;
        const currentTime = performance.now();
        const deltaTime = Math.min((currentTime - state.lastFrameTime) / 1000, 0.04);
        state.lastFrameTime = currentTime;

        update(deltaTime);
        render();

        if (isRunning) {
            state.idleHold = 0;
            animationRef.current = requestAnimationFrame(animate);
        } else {
            // Allow particles/stream to settle for a short grace period
            state.idleHold += deltaTime;
            const shouldContinue = state.particles.length > 0 ||
                state.topSandLevel > 0.0004 ||
                state.streamWidth > 0.15 ||
                state.idleHold < 4.0;
            if (shouldContinue) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }
    }, [isRunning, update, render]);

    const reset = useCallback(() => {
        const state = stateRef.current;
        state.bottomHeights.fill(0);
        state.topSandLevel = 1.0;
        state.particles = [];
        state.finished = false;
        state.streamTime = 0;
        state.streamBaseOffset = 0;
        state.streamTargetOffset = 0;
        state.streamVelocity = 0;
        state.streamWidth = 2.8;
        state.idleHold = 0;
        state.lastProgress = 0;
        state.spawnAccumulator = 0;
        state.flowSmooth = 0;
        state.accumulatedFlow = 0;
        state.reposeBuffer.fill(0);
        state.bottomVelocities.fill(0);
        render();
    }, [render]);

    useEffect(() => {
        setupDimensions();
        render();

        const handleResize = () => {
            setupDimensions();
            render();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setupDimensions, render]);

    useEffect(() => {
        if (isRunning) {
            stateRef.current.lastFrameTime = performance.now();
            animationRef.current = requestAnimationFrame(animate);
        } else {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isRunning, animate]);

    useEffect(() => {
        const progress = getProgress();
        if (progress >= 1 && onFinish && !stateRef.current.finished) {
            stateRef.current.finished = true;
            onFinish();
        }
    }, [getProgress, onFinish]);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.reset = reset;
        }
    }, [reset]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
        />
    );
};

export default Hourglass;
