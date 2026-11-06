"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_GROUPS } from "./nav-config";
import { useSidebar } from "@/components/admin/layout/sidebar-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

function isActivePathname(pathname: string, href: string): boolean {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(href + "/");
}

function Brand({ collapsed }: { collapsed: boolean }) {
  return (
    <Link
      href="/admin"
      aria-label="LMS Admin"
      className={cn(
        "flex h-16 items-center gap-3 px-5",
        collapsed && "justify-center px-0"
      )}
    >
      <span className="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-xl shadow-sm">
        <GraduationCap className="size-5" />
      </span>
      {!collapsed && (
        <span className="leading-tight">
          <span className="block text-[15px] font-bold tracking-tight text-foreground">
            LMS
          </span>
          <span className="block text-[10px] font-semibold tracking-[0.22em] text-warning uppercase">
            Academy
          </span>
        </span>
      )}
    </Link>
  );
}

function NavItemRow({
  href,
  label,
  icon: Icon,
  collapsed,
  active,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  collapsed: boolean;
  active: boolean;
}) {
  const row = (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex w-full items-center gap-3 rounded-lg py-2.5 text-sm font-medium transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-sidebar-ring/50",
        collapsed ? "justify-center px-0" : "px-3.5",
        active
          ? "text-accent-foreground"
          : "text-sidebar-foreground hover:bg-accent/50 hover:text-accent-foreground"
      )}
    >
      {/* active indicator bar flush to the sidebar edge (reference style) */}
      {active && (
        <span
          aria-hidden
          className="bg-primary absolute top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r-full"
          style={{ left: collapsed ? 0 : "-0.875rem" }}
        />
      )}
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors [&_svg]:size-[18px]",
          active ? "bg-sidebar-accent text-accent-foreground" : "bg-transparent"
        )}
      >
        <Icon className={cn(active ? "" : "opacity-80")} />
      </span>
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );

  if (!collapsed) return row;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{row}</TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

function AdminProfileCard({ collapsed }: { collapsed: boolean }) {
  return (
    <div className={cn("px-4 pb-4", collapsed && "px-2")}>
      <div
        className={cn(
          "bg-background/60 rounded-xl border border-border/70 p-3.5",
          collapsed && "flex justify-center p-2"
        )}
      >
        {collapsed ? (
          <Avatar className="size-9">
            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-semibold text-foreground">
                  Admin User
                </p>
                <p className="text-muted-foreground truncate text-xs">
                  Administrator
                </p>
              </div>
            </div>
            <Button asChild size="sm" className="mt-3 w-full">
              <Link href="/admin/settings/system">View profile</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export function AdminSidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const [closedGroups, setClosedGroups] = React.useState<Record<string, boolean>>(
    {}
  );

  const toggleGroup = (key: string) =>
    setClosedGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-sidebar flex h-full flex-col border-r border-sidebar-border">
      <Brand collapsed={collapsed} />

      <Separator className="opacity-60" />

      <nav
        aria-label="Admin"
        className="scrollbar-thin flex-1 overflow-y-auto px-4 py-4"
      >
        {NAV_GROUPS.map((group) => {
          const closed = !!closedGroups[group.key] && !collapsed;
          return (
            <div key={group.key} className="mb-3 last:mb-0">
              {collapsed ? (
                <div className="mb-2 flex flex-col gap-1">
                  {group.items.map((item) => (
                    <NavItemRow
                      key={item.key}
                      href={item.href}
                      label={item.label}
                      icon={item.icon}
                      collapsed
                      active={isActivePathname(pathname, item.href)}
                    />
                  ))}
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.key)}
                    aria-expanded={!closed}
                    className="text-muted-foreground/90 hover:text-foreground flex w-full cursor-pointer items-center justify-between px-2 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors"
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        closed && "-rotate-90"
                      )}
                    />
                  </button>
                  {!closed && (
                    <div className="mt-1 flex flex-col gap-1">
                      {group.items.map((item) => (
                        <NavItemRow
                          key={item.key}
                          href={item.href}
                          label={item.label}
                          icon={item.icon}
                          collapsed={false}
                          active={isActivePathname(pathname, item.href)}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="px-6 pb-1">
          <Badge variant="soft" className="w-full justify-center py-1">
            v0.1 — Phase 0
          </Badge>
        </div>
      )}

      <AdminProfileCard collapsed={collapsed} />
    </div>
  );
}
