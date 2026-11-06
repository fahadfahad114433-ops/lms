import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {ClipboardList} from "lucide-react";

export const metadata: Metadata = {
  title: "Assignments",
};

export default function AssignmentsPage() {
  return (
    <PlaceholderPage
      title="Assignments"
      description="Assignment briefs, submissions and instructor review."
      icon={ClipboardList}
      phase={7}
    />
  );
}
