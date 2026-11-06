"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { labelForSegment } from "@/components/admin/sidebar/nav-config";

interface Crumb {
  label: string;
  href?: string;
}

export function useBreadcrumbs(): Crumb[] {
  const pathname = usePathname();

  return React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const crumbs: Crumb[] = [];
    let acc = "";
    segments.forEach((seg, idx) => {
      acc += `/${seg}`;
      if (idx === 0 && seg === "admin") {
        crumbs.push({ label: "Admin", href: "/admin" });
        return;
      }
      const label = labelForSegment(acc) ?? seg.replace(/-/g, " ");
      crumbs.push({
        label: label.charAt(0).toUpperCase() + label.slice(1),
        href: idx === segments.length - 1 ? undefined : acc,
      });
    });
    return crumbs;
  }, [pathname]);
}

export function Breadcrumbs() {
  const crumbs = useBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className="text-muted-foreground flex items-center gap-1 text-[13px]">
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex min-w-0 items-center gap-1">
              {i > 0 && <ChevronRight className="size-3.5 shrink-0 opacity-60" />}
              {crumb.href && !last ? (
                <Link
                  href={crumb.href}
                  className="hover:text-accent-foreground truncate transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    "truncate",
                    last && "text-foreground font-medium"
                  )}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
