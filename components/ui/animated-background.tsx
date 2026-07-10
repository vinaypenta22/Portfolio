"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type PointerState = { x: number; y: number };
type ViewportState = { width: number; height: number };

const particleSeeds = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: 8 + (index * 17) % 84,
  y: 8 + (index * 23) % 84,
  size: 3 + (index % 4),
}));

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });
  const [viewport, setViewport] = useState<ViewportState>({ width: 1400, height: 900 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    updateViewport();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateViewport);
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateViewport);
    };
  }, [prefersReducedMotion]);

  const particles = useMemo(() => {
    if (prefersReducedMotion) return [];

    return particleSeeds.map((particle) => {
      const baseX = (particle.x / 100) * viewport.width;
      const baseY = (particle.y / 100) * viewport.height;
      const dx = baseX - pointer.x;
      const dy = baseY - pointer.y;
      const distance = Math.hypot(dx, dy) || 1;
      const influence = Math.max(0, 1 - distance / 220);
      const pushX = (dx / distance) * influence * 28;
      const pushY = (dy / distance) * influence * 28;

      return {
        ...particle,
        x: baseX,
        y: baseY,
        offsetX: pushX,
        offsetY: pushY,
      };
    });
  }, [pointer, prefersReducedMotion, viewport.height, viewport.width]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(248,250,252,0.9))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.16),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.95))]" />

      <div
        className="absolute inset-0 opacity-[0.24] dark:opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          transform: `translate3d(0, ${scrollY * 0.03}px, 0)`,
        }}
      />

      <motion.div
        className="absolute h-[26rem] w-[26rem] rounded-full bg-cyan-400/30 blur-[110px] dark:bg-cyan-400/20"
        animate={prefersReducedMotion ? undefined : { opacity: [0.3, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          left: pointer.x,
          top: pointer.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion ? undefined : { opacity: [0.22, 0.4, 0.24] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at ${pointer.x}px ${pointer.y}px, rgba(255,255,255,0.22), transparent 24%), radial-gradient(circle at 20% 20%, rgba(34,211,238,0.16), transparent 28%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.14), transparent 24%)`,
          transform: `translate3d(0, ${scrollY * 0.01}px, 0)`,
        }}
      />

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.4)] dark:bg-cyan-200/60"
            animate={prefersReducedMotion ? undefined : { x: particle.offsetX, y: particle.offsetY, scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              left: `${(particle.x / viewport.width) * 100}%`,
              top: `${(particle.y / viewport.height) * 100}%`,
              width: particle.size,
              height: particle.size,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
