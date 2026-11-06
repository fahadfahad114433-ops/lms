import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

/* ------------------------------------------------------------------ */
/*  Mini decorative sparklines (reference image style)                 */
/*  Pure SVG — static sample data, replaced by real charts later.      */
/* ------------------------------------------------------------------ */

function MiniBars({ color = "var(--chart-2)" }: { color?: string }) {
  const bars = [12, 20, 15, 26, 18, 30, 22];
  return (
    <svg
      viewBox="0 0 96 36"
      className="h-9 w-24"
      aria-hidden
      role="presentation"
    >
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 14 + 2}
          y={36 - h}
          width="8"
          height={h}
          rx="3"
          fill={color}
          opacity={0.85}
        />
      ))}
    </svg>
  );
}

function MiniLine({ color = "var(--chart-1)" }: { color?: string }) {
  const points = "2,26 16,18 30,24 44,10 58,20 72,8 94,14";
  return (
    <svg
      viewBox="0 0 96 36"
      className="h-9 w-24"
      aria-hidden
      role="presentation"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.split(" ").map((p, i) => {
        const [x, y] = p.split(",");
        return <circle key={i} cx={x} cy={y} r="2.6" fill={color} />;
      })}
    </svg>
  );
}

export type StatCardVisual = "bars-orange" | "line-purple" | "bars-blue";

const VISUALS: Record<StatCardVisual, React.ReactNode> = {
  "bars-orange": <MiniBars color="var(--chart-2)" />,
  "line-purple": <MiniLine color="var(--chart-1)" />,
  "bars-blue": <MiniBars color="var(--chart-3)" />,
};

export function StatCard({
  label,
  value,
  visual,
  icon: Icon,
  className,
}: {
  label: string;
  value: string;
  visual: StatCardVisual;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex-row items-center justify-between gap-3 px-5 py-4 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="min-w-0">
        <div className="flex items-start gap-2">
          <Icon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
          <p className="text-muted-foreground text-xs leading-snug font-medium">
            {label}
          </p>
        </div>
        <p className="mt-2 text-[26px] leading-none font-bold tracking-tight">
          {value}
        </p>
      </div>
      <div className="shrink-0 opacity-90">{VISUALS[visual]}</div>
    </Card>
  );
}
