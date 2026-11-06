import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {BookOpen} from "lucide-react";

export const metadata: Metadata = {
  title: "Courses",
};

export default function CoursesPage() {
  return (
    <PlaceholderPage
      title="Courses"
      description="Course builder, curriculum sections and lesson content."
      icon={BookOpen}
      phase={4}
    />
  );
}
