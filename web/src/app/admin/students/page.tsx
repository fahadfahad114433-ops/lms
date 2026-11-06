import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {GraduationCap} from "lucide-react";

export const metadata: Metadata = {
  title: "Students",
};

export default function StudentsPage() {
  return (
    <PlaceholderPage
      title="Students"
      description="Manage student accounts, profiles and learning activity."
      icon={GraduationCap}
      phase={1}
    />
  );
}
