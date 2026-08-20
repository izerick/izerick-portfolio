import React, { useEffect, useRef } from 'react';

export type BackgroundVariant = 'neural' | 'grid3d' | 'circuits' | 'particles';

interface InteractiveCyberBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
}

export const InteractiveCyberBackground: React.FC<InteractiveCyberBackgroundProps> = ({
  variant = 'neural',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 1. NEURAL VARIANT
    const nodeCount = Math.min(45, Math.floor((width * height) / 28000));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; baseAlpha: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.3
      });
    }

    // 2. PARTICLES VARIANT
    const starCount = Math.min(65, Math.floor((width * height) / 20000));
    const stars: { x: number; y: number; size: number; speed: number; alpha: number; pulse: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // 3. CIRCUITS VARIANT
    const circuits: { x: number; y: number; length: number; speed: number; isVertical: boolean; progress: number }[] = [];
    for (let i = 0; i < 15; i++) {
      circuits.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 1.5 + 0.8,
        isVertical: Math.random() > 0.5,
        progress: Math.random() * 100
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // VARIANT 1: NEURAL NETWORK (Red de Nodos Interconectados)
      if (variant === 'neural') {
        const maxDist = 130;
        const mouseDist = 160;

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - n.x;
            const dy = mouseRef.current.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseDist) {
              const force = (mouseDist - dist) / mouseDist;
              n.x += dx * force * 0.02;
              n.y += dy * force * 0.02;
            }
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(244, 63, 94, ${n.baseAlpha})`;
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;

          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n.x - n2.x;
            const dy = n.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(225, 29, 72, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }

          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - n.x;
            const dy = mouseRef.current.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseDist) {
              const alpha = (1 - dist / mouseDist) * 0.35;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.strokeStyle = `rgba(251, 113, 133, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // VARIANT 2: 3D CYBER GRID (Cuadrícula Isométrica Infinita)
      else if (variant === 'grid3d') {
        const horizon = height * 0.35;
        const gridOffset = (scrollRef.current * 0.4 + time * 20) % 50;

        ctx.strokeStyle = 'rgba(225, 29, 72, 0.15)';
        ctx.lineWidth = 1;

        const lineCount = 18;
        for (let i = 0; i < lineCount; i++) {
          const yProgress = (i + gridOffset / 50) / lineCount;
          const y = horizon + Math.pow(yProgress, 2.2) * (height - horizon);
          const alpha = yProgress * 0.2;

          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.strokeStyle = `rgba(244, 63, 94, ${alpha})`;
          ctx.stroke();
        }

        const vanishingX = width * 0.5 + (mouseRef.current.active ? (mouseRef.current.x - width * 0.5) * 0.15 : 0);
        const rayCount = 18;
        for (let i = -rayCount; i <= rayCount; i++) {
          const bottomX = vanishingX + i * (width / rayCount) * 1.8;
          ctx.beginPath();
          ctx.moveTo(vanishingX, horizon);
          ctx.lineTo(bottomX, height);
          ctx.strokeStyle = 'rgba(225, 29, 72, 0.1)';
          ctx.stroke();
        }

        const grad = ctx.createRadialGradient(vanishingX, horizon, 10, vanishingX, horizon, width * 0.6);
        grad.addColorStop(0, 'rgba(244, 63, 94, 0.18)');
        grad.addColorStop(0.5, 'rgba(159, 18, 57, 0.05)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // VARIANT 3: CIRCUITS (Pistas de Silicio y Pulsos Láser)
      else if (variant === 'circuits') {
        for (let i = 0; i < circuits.length; i++) {
          const c = circuits[i];
          c.progress += c.speed;
          if (c.progress > 200) {
            c.progress = 0;
            c.x = Math.random() * width;
            c.y = Math.random() * height;
          }

          ctx.beginPath();
          if (c.isVertical) {
            ctx.moveTo(c.x, c.y);
            ctx.lineTo(c.x, c.y + c.length);
          } else {
            ctx.moveTo(c.x, c.y);
            ctx.lineTo(c.x + c.length, c.y);
          }
          ctx.strokeStyle = 'rgba(244, 63, 94, 0.08)';
          ctx.lineWidth = 1;
          ctx.stroke();

          const pulseX = c.isVertical ? c.x : c.x + (c.progress % c.length);
          const pulseY = c.isVertical ? c.y + (c.progress % c.length) : c.y;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#fb7185';
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // VARIANT 4: PARTICLES (Polvo Cuántico & Nebulosa Carmesí)
      else if (variant === 'particles') {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.y -= s.speed;
          s.pulse += 0.02;

          if (s.y < 0) {
            s.y = height;
            s.x = Math.random() * width;
          }

          const currentAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 113, 133, ${currentAlpha})`;
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.8 }}
    />
  );
};
