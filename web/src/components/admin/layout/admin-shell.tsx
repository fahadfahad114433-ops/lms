"use client";

import * as React from "react";

import { SidebarProvider, useSidebar } from "./sidebar-context";
import { AdminHeader } from "@/components/admin/header/admin-header";
import { AdminSidebar } from "@/components/admin/sidebar/admin-sidebar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function DesktopSidebar() {
  const { collapsed } = useSidebar();
  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 border-r border-sidebar-border transition-[width] duration-200 lg:block",
        collapsed ? "w-[76px]" : "w-[264px]"
      )}
    >
      <AdminSidebar collapsed={collapsed} />
    </aside>
  );
}

function MobileSidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();
  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetContent side="left" className="p-0">
        <SheetTitle className="sr-only">Admin navigation</SheetTitle>
        <AdminSidebar collapsed={false} />
      </SheetContent>
    </Sheet>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="flex min-h-screen w-full">
          <DesktopSidebar />
          <MobileSidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <AdminHeader />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
}
