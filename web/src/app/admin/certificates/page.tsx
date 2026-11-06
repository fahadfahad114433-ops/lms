import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {Award} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates",
};

export default function CertificatesPage() {
  return (
    <PlaceholderPage
      title="Certificates"
      description="Certificate templates and automatically issued certificates."
      icon={Award}
      phase={8}
    />
  );
}
