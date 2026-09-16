"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BottleVariant = "flacon" | "tall" | "round";

const proportions: Record<
  BottleVariant,
  { bodyWidth: number; bodyHeight: number; shoulder: number; capHeight: number }
> = {
  flacon: { bodyWidth: 104, bodyHeight: 132, shoulder: 18, capHeight: 34 },
  tall: { bodyWidth: 84, bodyHeight: 168, shoulder: 12, capHeight: 42 },
  round: { bodyWidth: 124, bodyHeight: 112, shoulder: 40, capHeight: 30 },
};

export function BottleVisual({
  variant = "flacon",
  className,
}: {
  variant?: BottleVariant;
  className?: string;
}) {
  const glassId = `luve-glass-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const { bodyWidth, bodyHeight, shoulder, capHeight } = proportions[variant];

  const bodyTop = 96;
  const bodyX = (200 - bodyWidth) / 2;
  const neckWidth = 22;
  const neckTop = bodyTop - 26;
  const capX = (200 - 34) / 2;
  const labelTop = bodyTop + bodyHeight * 0.28;

  return (
    <svg
      viewBox="0 0 200 300"
      role="img"
      aria-label={`Botol parfum LUVE varian ${variant}`}
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--champagne)" stopOpacity="0.95" />
          <stop offset="55%" stopColor="var(--champagne-deep)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--ink)" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      <rect
        x={capX}
        y={neckTop - capHeight}
        width={34}
        height={capHeight}
        rx={4}
        fill="var(--ink)"
        opacity="0.86"
      />
      <rect
        x={(200 - neckWidth) / 2}
        y={neckTop}
        width={neckWidth}
        height={bodyTop - neckTop + 6}
        fill="var(--champagne-deep)"
        opacity="0.55"
      />
      <rect
        x={bodyX}
        y={bodyTop}
        width={bodyWidth}
        height={bodyHeight}
        rx={shoulder}
        fill={`url(#${glassId})`}
        stroke="var(--ink)"
        strokeOpacity="0.14"
      />
      <rect
        x={bodyX + 7}
        y={bodyTop + bodyHeight * 0.44}
        width={bodyWidth - 14}
        height={bodyHeight * 0.5}
        rx={shoulder * 0.7}
        fill="var(--champagne-deep)"
        opacity="0.26"
      />
      <rect
        x={bodyX + 13}
        y={bodyTop + 14}
        width={9}
        height={bodyHeight * 0.46}
        rx={4.5}
        fill="white"
        opacity="0.3"
      />
      <rect
        x={100 - 26}
        y={labelTop}
        width={52}
        height={34}
        rx={2}
        fill="var(--background)"
        opacity="0.82"
      />
      <text
        x={100}
        y={labelTop + 22}
        textAnchor="middle"
        fontSize="13"
        letterSpacing="3"
        fill="var(--ink)"
        fontFamily="var(--font-serif)"
      >
        LUVE
      </text>
    </svg>
  );
}