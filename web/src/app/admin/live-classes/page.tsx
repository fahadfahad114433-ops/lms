import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Video} from "lucide-react";

export const metadata: Metadata = {
  title: "Live Classes",
};

export default function LiveClassesPage() {
  return (
    <PlaceholderPage
      title="Live Classes"
      description="Zoom / live session scheduling and attendance."
      icon={Video}
      phase={12}
    />
  );
}
