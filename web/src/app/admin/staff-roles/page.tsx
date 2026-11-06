import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {ShieldCheck} from "lucide-react";

export const metadata: Metadata = {
  title: "Staff & Roles",
};

export default function StaffRolesPage() {
  return (
    <PlaceholderPage
      title="Staff & Roles"
      description="Create staff accounts and configure granular role permissions."
      icon={ShieldCheck}
      phase={1}
    />
  );
}
