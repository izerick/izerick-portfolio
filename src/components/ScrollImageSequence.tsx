import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollImageSequenceProps {
  frameCount?: number;
  className?: string;
}

export const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({
  frameCount = 240,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  // Pad frame number: 1 -> "001", 24 -> "024", 150 -> "150"
  const getFramePath = (index: number) => {
    const pad = String(index).padStart(3, '0');
    return `/sequence/ezgif-frame-${pad}.jpg`;
  };

  // Preload images into memory
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Draw the very first frame immediately
          renderFrame(1, img);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, [frameCount]);

  // Canvas drawing function with crisp aspect-fit centering
  const renderFrame = (frameIndex: number, specificImg?: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = specificImg || images[frameIndex - 1];
    if (!img || !img.complete) return;

    // Handle high-DPI retina display
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate aspect ratio containment
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = rect.height;
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = rect.width;
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Track global scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Map scroll progress (0.0 to 1.0) to frame numbers (1 to 240)
  const frameIndexMotion = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useMotionValueEvent(frameIndexMotion, 'change', (latest) => {
    const frame = Math.min(frameCount, Math.max(1, Math.round(latest)));
    if (frame !== currentFrameRef.current) {
      currentFrameRef.current = frame;
      requestAnimationFrame(() => renderFrame(frame));
    }
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain block mx-auto pointer-events-none drop-shadow-[0_20px_40px_rgba(16,185,129,0.15)]"
      />
    </div>
  );
};
