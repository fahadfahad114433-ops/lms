import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Palette} from "lucide-react";

export const metadata: Metadata = {
  title: "Branding",
};

export default function BrandingSettingsPage() {
  return (
    <PlaceholderPage
      title="Branding"
      description="White-label branding: logo, colors, typography and identity."
      icon={Palette}
      phase={2}
    />
  );
}
