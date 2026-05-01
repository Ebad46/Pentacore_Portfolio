"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

interface TubesBackgroundProps {
  className?: string;
  enableClickInteraction?: boolean;
}

type TubesApp = {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
  destroy?: () => void;
};

type TubesCursorLoader = (canvas: HTMLCanvasElement, config: unknown) => TubesApp;

export default function TubesBackground({ 
  className,
  enableClickInteraction = true 
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<TubesApp | null>(null);

  useEffect(() => {
    let mounted = true;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        const tubesModuleUrl =
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
        const importedModule = await import(/* webpackIgnore: true */ tubesModuleUrl);
        const TubesCursor = (importedModule as unknown as { default: TubesCursorLoader }).default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#3b82f6", "#8b5cf6", "#d8b4fe"],
            lights: {
              intensity: 300,
              colors: ["#60aed5", "#3b82f6", "#fff", "#8b5cf6"]
            }
          }
        });

        tubesRef.current = app;
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    const handleBodyClick = (e: MouseEvent) => {
      if (!enableClickInteraction || !tubesRef.current) return;
      const target = e.target as HTMLElement;
      // Don't interact if clicked on a link or button
      if (target.closest('a') || target.closest('button')) return;
      
      const colors = randomColors(3);
      const lightsColors = randomColors(4);
      
      tubesRef.current.tubes.setColors(colors);
      tubesRef.current.tubes.setLightsColors(lightsColors);
    };

    if (enableClickInteraction) {
      document.body.addEventListener('click', handleBodyClick);
    }

    return () => {
      mounted = false;
      document.body.removeEventListener('click', handleBodyClick);
      if (tubesRef.current && typeof tubesRef.current.destroy === 'function') {
        tubesRef.current.destroy();
      }
    };
  }, [enableClickInteraction]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden w-full h-full z-0", className)}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
