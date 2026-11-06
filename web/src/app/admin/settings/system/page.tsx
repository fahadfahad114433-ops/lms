import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Settings} from "lucide-react";

export const metadata: Metadata = {
  title: "System Settings",
};

export default function SystemSettingsPage() {
  return (
    <PlaceholderPage
      title="System Settings"
      description="SMTP, storage, payment and system-level configuration."
      icon={Settings}
      phase={2}
    />
  );
}
