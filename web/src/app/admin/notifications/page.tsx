import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Bell} from "lucide-react";

export const metadata: Metadata = {
  title: "Notifications",
};

export default function NotificationsPage() {
  return (
    <PlaceholderPage
      title="Notifications"
      description="In-app notification composer and delivery history."
      icon={Bell}
      phase={10}
    />
  );
}
