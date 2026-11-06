import * as React from "react";

import { cn } from "@/lib/utils";

/** Consistent content width + spacing for all admin pages. */
export function PageContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] space-y-6 px-4 py-6 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Standard page title block: title, optional description, action slot. */
export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground mt-1 max-w-2xl text-sm">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}
