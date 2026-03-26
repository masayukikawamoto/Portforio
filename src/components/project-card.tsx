"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setSpotlightPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [],
  );

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card glow-card transition-all duration-300 hover:-translate-y-1 ${
          featured ? "h-full" : ""
        }`}
      >
        {isHovering && (
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(99, 102, 241, 0.15), transparent 60%)`,
            }}
          />
        )}

        <div
          className={`relative flex items-center justify-center ${featured ? "h-56 sm:h-64" : "h-44"}`}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))`,
            }}
          />
          <span
            className={`relative z-10 font-bold text-white/80 ${featured ? "text-4xl" : "text-2xl"}`}
          >
            {project.title}
          </span>
        </div>

        <div className="relative z-10 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className={`font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-from group-hover:to-accent-to transition-colors ${featured ? "text-xl" : "text-lg"}`}
            >
              {project.title}
            </h3>
            {project.highlight && (
              <span className="shrink-0 rounded-full bg-accent-from/10 px-3 py-1 text-xs font-medium text-accent-from">
                {project.highlight}
              </span>
            )}
          </div>
          <p
            className={`text-sm text-dark-muted mb-4 ${featured ? "line-clamp-3" : "line-clamp-2"}`}
          >
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-dark-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
