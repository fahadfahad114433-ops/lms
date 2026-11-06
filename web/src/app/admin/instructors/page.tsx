import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Presentation} from "lucide-react";

export const metadata: Metadata = {
  title: "Instructors",
};

export default function InstructorsPage() {
  return (
    <PlaceholderPage
      title="Instructors"
      description="Manage instructors and their role-based permissions."
      icon={Presentation}
      phase={1}
    />
  );
}
