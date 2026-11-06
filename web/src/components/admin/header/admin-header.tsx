"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bell,
  LogOut,
  PanelLeft,
  Search,
  Settings,
  User,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/admin/layout/sidebar-context";
import { Breadcrumbs } from "./breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AdminHeader() {
  const { collapsed, toggleCollapsed, setMobileOpen } = useSidebar();

  return (
    <header className="bg-background/85 sticky top-0 z-40 border-b border-border/70 backdrop-blur-md">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        {/* Desktop: collapse toggle / Mobile: drawer open */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle sidebar"
              className="hidden lg:inline-flex"
              onClick={toggleCollapsed}
            >
              <PanelLeft
                className={cn("transition-transform", collapsed && "rotate-180")}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Toggle sidebar</TooltipContent>
        </Tooltip>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation"
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </Button>

        {/* Breadcrumbs */}
        <div className="min-w-0 flex-1">
          <Breadcrumbs />
        </div>

        {/* Search — UI foundation (wired to data in a later module) */}
        <div className="relative hidden md:block">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search..."
            aria-label="Search (coming soon)"
            className="h-9 w-52 bg-card pl-9 lg:w-64"
            disabled
          />
        </div>

        {/* Notifications */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative"
            >
              <Link href="/admin/notifications">
                <Bell />
                <span
                  aria-hidden
                  className="bg-warning absolute top-1.5 right-1.5 size-2 rounded-full ring-2 ring-background"
                />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Notifications</TooltipContent>
        </Tooltip>

        {/* Profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label="Open profile menu"
              className="hover:bg-accent/60 flex cursor-pointer items-center gap-2.5 rounded-lg py-1.5 pr-2.5 pl-1.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <Avatar className="size-8">
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <span className="hidden leading-tight sm:block">
                <span className="block text-[13px] font-semibold">
                  Admin User
                </span>
                <span className="text-muted-foreground block text-[11px]">
                  Administrator
                </span>
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Signed in as Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/settings/system">
                <User /> My Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/settings/system">
                <Settings /> Account Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" disabled>
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
