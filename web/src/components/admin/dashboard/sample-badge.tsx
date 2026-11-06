import { Badge } from "@/components/ui/badge";

/**
 * Marks UI regions that currently show development sample data.
 * Real database data will replace these in dedicated modules.
 */
export function SampleBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="warning"
      title="Sample data for layout preview — will be connected to the database in a dedicated module"
      className={className}
    >
      Sample data
    </Badge>
  );
}
