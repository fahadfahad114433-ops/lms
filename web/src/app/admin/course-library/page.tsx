import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {LibraryBig} from "lucide-react";

export const metadata: Metadata = {
  title: "Course Library",
};

export default function CourseLibraryPage() {
  return (
    <PlaceholderPage
      title="Course Library"
      description="Central library for imported and reusable courses."
      icon={LibraryBig}
      phase={4}
    />
  );
}
