import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Mail} from "lucide-react";

export const metadata: Metadata = {
  title: "Email Manager",
};

export default function EmailManagerPage() {
  return (
    <PlaceholderPage
      title="Email Manager"
      description="Email templates, campaigns and delivery logs."
      icon={Mail}
      phase={10}
    />
  );
}
