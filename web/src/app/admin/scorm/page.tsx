import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Package} from "lucide-react";

export const metadata: Metadata = {
  title: "SCORM",
};

export default function ScormPage() {
  return (
    <PlaceholderPage
      title="SCORM"
      description="SCORM package upload, player and progress tracking."
      icon={Package}
      phase={9}
    />
  );
}
