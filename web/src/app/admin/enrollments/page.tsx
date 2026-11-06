import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {UserCheck} from "lucide-react";

export const metadata: Metadata = {
  title: "Enrollments",
};

export default function EnrollmentsPage() {
  return (
    <PlaceholderPage
      title="Enrollments"
      description="Manual enrollments, purchase-based access and progress."
      icon={UserCheck}
      phase={6}
    />
  );
}
