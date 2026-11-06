import type { Metadata } from "next";

import { AdminShell } from "@/components/admin/layout/admin-shell";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard — LMS",
    template: "%s — LMS Admin",
  },
  description: "LMS administration area (client CMS).",
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AdminShell>{children}</AdminShell>;
}
