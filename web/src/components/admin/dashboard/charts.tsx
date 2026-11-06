"use client";

import * as React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SampleBadge } from "./sample-badge";

/* ------------------------------------------------------------------ */
/*  Static SVG chart placeholders — reference image visual style.      */
/*  Real charts (with live data) arrive in the Admin Overview module.  */
/* ------------------------------------------------------------------ */

const W = 640;
const H = 250;
const PAD_L = 42;
const PAD_R = 16;
const PAD_T = 18;
const PAD_B = 30;

function xFor(i: number, n: number) {
  const innerW = W - PAD_L - PAD_R;
  return PAD_L + (i * innerW) / (n - 1);
}

function yFor(v: number, max = 100) {
  const innerH = H - PAD_T - PAD_B;
  return PAD_T + innerH * (1 - v / max);
}

/** Catmull-Rom → cubic bezier for smooth reference-style curves. */
function smoothPath(values: number[], max = 100): string {
  const pts = values.map((v, i) => [xFor(i, values.length), yFor(v, max)]);
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ENROLLED = [42, 55, 70, 62, 78, 68, 82];
const COMPLETED = [20, 34, 30, 46, 38, 55, 60];
const Y_TICKS = [0, 25, 50, 75, 100];

export function EnrollmentChart() {
  const enrolledPath = smoothPath(ENROLLED);
  const completedPath = smoothPath(COMPLETED);
  const areaPath = `${enrolledPath} L ${xFor(ENROLLED.length - 1, ENROLLED.length)},${yFor(0)} L ${xFor(0, ENROLLED.length)},${yFor(0)} Z`;
  const hi = 2; // highlighted point (Wed) — static tooltip like reference

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Enrollment Analytics</CardTitle>
        <CardAction>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span className="bg-chart-2 size-2.5 rounded-full" /> Enrolled
            </span>
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span className="bg-chart-3 size-2.5 rounded-full" /> Completed
            </span>
            <SampleBadge className="ml-1 hidden sm:inline-flex" />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Enrollment analytics sample chart"
          >
            <defs>
              <linearGradient id="enrolledArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--chart-2)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* y grid + labels */}
            {Y_TICKS.map((t) => (
              <g key={t}>
                <line
                  x1={PAD_L}
                  x2={W - PAD_R}
                  y1={yFor(t)}
                  y2={yFor(t)}
                  stroke="var(--border)"
                  strokeDasharray={t === 0 ? "0" : "3 5"}
                />
                <text
                  x={PAD_L - 10}
                  y={yFor(t) + 3.5}
                  textAnchor="end"
                  className="fill-[var(--muted-foreground)] text-[10px]"
                >
                  {t}
                </text>
              </g>
            ))}

            {/* x labels */}
            {DAYS.map((d, i) => (
              <text
                key={d}
                x={xFor(i, DAYS.length)}
                y={H - 8}
                textAnchor="middle"
                className="fill-[var(--muted-foreground)] text-[10px]"
              >
                {d}
              </text>
            ))}

            <path d={areaPath} fill="url(#enrolledArea)" />
            <path
              d={completedPath}
              fill="none"
              stroke="var(--chart-3)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d={enrolledPath}
              fill="none"
              stroke="var(--chart-2)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* highlighted sample point */}
            <circle
              cx={xFor(hi, DAYS.length)}
              cy={yFor(ENROLLED[hi])}
              r="5"
              fill="var(--chart-2)"
              stroke="white"
              strokeWidth="2.5"
            />
            <line
              x1={xFor(hi, DAYS.length)}
              x2={xFor(hi, DAYS.length)}
              y1={yFor(ENROLLED[hi]) + 8}
              y2={yFor(0)}
              stroke="var(--chart-2)"
              strokeDasharray="3 4"
              opacity="0.5"
            />
          </svg>

          {/* static tooltip card (reference style) */}
          <div className="bg-card absolute top-6 left-[38%] rounded-lg border border-border/80 px-3 py-2 text-xs shadow-md">
            <p className="flex items-center gap-1.5">
              <span className="bg-chart-2 size-2 rounded-full" />
              Enrolled: <strong>70</strong>
            </p>
            <p className="mt-0.5 flex items-center gap-1.5">
              <span className="bg-chart-3 size-2 rounded-full" />
              Completed: <strong>30</strong>
            </p>
            <p className="text-muted-foreground mt-0.5">
              Completion rate: <strong className="text-foreground">87%</strong>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------ revenue ---------------------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const COURSE_SALES = [48, 62, 55, 74, 66, 88]; // $k
const CERT_SALES = [22, 30, 26, 38, 34, 46]; // $k
const REV_MAX = 100;

export function RevenueChart() {
  const groups = MONTHS.map((m, i) => ({
    label: m,
    a: COURSE_SALES[i],
    b: CERT_SALES[i],
  }));
  const innerW = W - PAD_L - PAD_R;
  const groupW = innerW / groups.length;
  const barW = 14;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Revenue</CardTitle>
        <CardAction>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span className="bg-chart-1 size-2.5 rounded-full" /> Courses
            </span>
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <span className="bg-chart-2 size-2.5 rounded-full" /> Certificates
            </span>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Revenue sample chart"
        >
          {[0, 25, 50, 75, 100].map((t) => (
            <g key={t}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={yFor(t, REV_MAX)}
                y2={yFor(t, REV_MAX)}
                stroke="var(--border)"
                strokeDasharray={t === 0 ? "0" : "3 5"}
              />
              <text
                x={PAD_L - 10}
                y={yFor(t, REV_MAX) + 3.5}
                textAnchor="end"
                className="fill-[var(--muted-foreground)] text-[10px]"
              >
                ${t}k
              </text>
            </g>
          ))}
          {groups.map((g, i) => {
            const cx = PAD_L + groupW * i + groupW / 2;
            return (
              <g key={g.label}>
                <rect
                  x={cx - barW - 3}
                  y={yFor(g.a, REV_MAX)}
                  width={barW}
                  height={yFor(0, REV_MAX) - yFor(g.a, REV_MAX)}
                  rx="5"
                  fill="var(--chart-1)"
                  opacity="0.9"
                />
                <rect
                  x={cx + 3}
                  y={yFor(g.b, REV_MAX)}
                  width={barW}
                  height={yFor(0, REV_MAX) - yFor(g.b, REV_MAX)}
                  rx="5"
                  fill="var(--chart-2)"
                  opacity="0.9"
                />
                <text
                  x={cx}
                  y={H - 8}
                  textAnchor="middle"
                  className="fill-[var(--muted-foreground)] text-[10px]"
                >
                  {g.label}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-muted-foreground mt-2 text-xs">
          Revenue values shown are samples — connected to real orders in the
          Orders &amp; Payments phase.
        </p>
      </CardContent>
    </Card>
  );
}
