import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {BarChart3} from "lucide-react";

export const metadata: Metadata = {
  title: "Reports & Analytics",
};

export default function ReportsPage() {
  return (
    <PlaceholderPage
      title="Reports & Analytics"
      description="Sales, learning and engagement analytics."
      icon={BarChart3}
      phase={12}
    />
  );
}
