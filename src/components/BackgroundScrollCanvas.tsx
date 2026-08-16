import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

interface BackgroundScrollCanvasProps {
  frameCount?: number;
}

export const BackgroundScrollCanvas: React.FC<BackgroundScrollCanvasProps> = ({
  frameCount = 240
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);

  const getFramePath = (index: number) => {
    const pad = String(index).padStart(3, '0');
    return `/sequence/ezgif-frame-${pad}.jpg`;
  };

  // Draw frame with object-fit: cover logic
  const drawFrame = (frameIndex: number, specificImg?: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const roundIndex = Math.min(frameCount, Math.max(1, Math.round(frameIndex)));
    const img = specificImg || imagesRef.current[roundIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // High performance aspect-fit cover
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const screenRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (screenRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Ultra-Smooth Lerp Animation Loop (60/120 FPS)
  useEffect(() => {
    const updatePhysicsLoop = () => {
      // Lerp easing (smooth inertia dampening)
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.14; // smooth fluid damping
        drawFrame(currentFrameRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(updatePhysicsLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(updatePhysicsLoop);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [frameCount]);

  // Preload all 240 frames
  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    let firstLoaded = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (!firstLoaded && i === 1) {
          firstLoaded = true;
          drawFrame(1, img);
        }
      };
      imgArray.push(img);
    }
    imagesRef.current = imgArray;

    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameCount]);

  // Global scroll tracking
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      targetFrameRef.current = Math.min(frameCount, Math.max(1, progress * (frameCount - 1) + 1));
    });
  }, [scrollYProgress, frameCount]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />

      {/* Harmonious Dark Crimson & Obsidian Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080507]/70 via-[#0a0508]/40 to-[#070406]/85" />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,5,7,0.75)_100%)]" />
    </div>
  );
};
