"use client";

import { useId } from "react";

const CORNERS = ["tl", "tr", "bl", "br"];

/**
 * Wraps content with the dotted gold ring motif from the logo.
 * variant: "full" (a circular ring — for hero/brand imagery), "corners"
 * (light corner accents — for rectangular tiles/cards), "divider" (standalone
 * section divider). "full" is always a circle: a non-uniformly scaled SVG
 * rounded-rect stroke distorts unevenly, so rectangular frames use "corners".
 */
export default function RingFrame({
  children,
  variant = "full",
  ratio = "1 / 1",
  animate = false,
  className = "",
}) {
  const id = useId();
  const gradId = `ring-grad-${id}`;

  const gradientDefs = (
    <defs>
      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--ring-grad-a)" />
        <stop offset="100%" stopColor="var(--ring-grad-b)" />
      </linearGradient>
    </defs>
  );

  if (variant === "divider") {
    return (
      <div className={`ring-divider ${className}`} aria-hidden="true">
        <span className="ring-divider-line" />
        <svg viewBox="0 0 40 40" className="ring-divider-dot">
          {gradientDefs}
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1.6"
            strokeDasharray="0.5 5"
            strokeLinecap="round"
          />
        </svg>
        <span className="ring-divider-line" />
      </div>
    );
  }

  return (
    <div
      className={`ring-frame ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="ring-frame-content">{children}</div>

      {variant === "full" && (
        <svg
          className={`ring-frame-svg ${animate ? "ring-frame-animate" : ""}`}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {gradientDefs}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="1"
            pathLength="100"
            strokeDasharray="0.7 3.3"
            strokeLinecap="round"
          />
        </svg>
      )}

      {variant === "corners" &&
        CORNERS.map((corner) => (
          <svg
            key={corner}
            className={`ring-corner ring-corner-${corner}`}
            viewBox="0 0 28 28"
            aria-hidden="true"
          >
            {gradientDefs}
            <path
              d="M 26 14 A 12 12 0 0 0 14 2"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="1.3"
              pathLength="100"
              strokeDasharray="1.4 8"
              strokeLinecap="round"
            />
          </svg>
        ))}
    </div>
  );
}
