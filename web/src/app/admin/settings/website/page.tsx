import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Globe} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Settings",
};

export default function WebsiteSettingsPage() {
  return (
    <PlaceholderPage
      title="Website Settings"
      description="General website configuration, pages and navigation."
      icon={Globe}
      phase={2}
    />
  );
}
