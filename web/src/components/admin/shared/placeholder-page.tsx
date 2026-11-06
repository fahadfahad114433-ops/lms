import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  PageContainer,
  PageHeader,
} from "@/components/admin/shared/page-container";

/**
 * Standard placeholder screen for modules that are on the roadmap but not
 * implemented yet. Every admin nav item renders this until its module ships.
 */
export function PlaceholderPage({
  title,
  description,
  icon: Icon,
  phase,
}: {
  title: string;
  description?: string;
  icon: LucideIcon;
  phase?: number;
}) {
  return (
    <PageContainer>
      <PageHeader title={title} description={description} />
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <span className="bg-accent text-accent-foreground flex size-14 items-center justify-center rounded-2xl">
            <Icon className="size-7" />
          </span>
          <div className="space-y-1.5">
            <p className="text-base font-semibold">{title} module</p>
            <p className="text-muted-foreground mx-auto max-w-md text-sm">
              This area is reserved for the <strong>{title}</strong> module. It
              will be implemented in its dedicated phase without changing this
              layout.
            </p>
          </div>
          {phase !== undefined && (
            <Badge variant="soft" className="gap-1.5 py-1">
              <Construction className="size-3.5" />
              Planned in Phase {phase}
            </Badge>
          )}
          <Button asChild variant="outline" size="sm" className="mt-2">
            <Link href="/admin">
              <ArrowLeft /> Back to Dashboard
            </Link>
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
