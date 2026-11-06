import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {FolderTree} from "lucide-react";

export const metadata: Metadata = {
  title: "Course Categories",
};

export default function CourseCategoriesPage() {
  return (
    <PlaceholderPage
      title="Course Categories"
      description="Organize courses into categories and sub-categories."
      icon={FolderTree}
      phase={4}
    />
  );
}
