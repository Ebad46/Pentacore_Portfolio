"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
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
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<TubesApp | null>(null);

  useEffect(() => {
    let mounted = true;
    let idleId = 0;
    let timeoutId = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || hasCoarsePointer) return;

    const initTubes = async () => {
      if (!mounted || !canvasRef.current || tubesRef.current) return;

      try {
        const tubesModuleUrl =
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
        const importedModule = await import(/* webpackIgnore: true */ tubesModuleUrl);
        const TubesCursor = (importedModule as unknown as { default: TubesCursorLoader }).default;

        if (!mounted || !canvasRef.current) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#3b82f6", "#8b5cf6", "#d8b4fe"],
            lights: {
              intensity: 300,
              colors: ["#60aed5", "#3b82f6", "#fff", "#8b5cf6"],
            },
          },
        });

        tubesRef.current = app;
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => {
          void initTubes();
        }, { timeout: 2500 });
      } else {
        timeoutId = window.setTimeout(() => {
          void initTubes();
        }, 1200);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    const handleBodyClick = (e: MouseEvent) => {
      if (!enableClickInteraction || !tubesRef.current) return;
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) return;

      tubesRef.current.tubes.setColors(randomColors(3));
      tubesRef.current.tubes.setLightsColors(randomColors(4));
    };

    if (enableClickInteraction) {
      document.body.addEventListener("click", handleBodyClick);
    }

    return () => {
      mounted = false;
      window.removeEventListener("load", schedule);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
      document.body.removeEventListener("click", handleBodyClick);
      if (tubesRef.current && typeof tubesRef.current.destroy === "function") {
        tubesRef.current.destroy();
      }
    };
  }, [enableClickInteraction]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden w-full h-full z-0", className)} aria-hidden>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
