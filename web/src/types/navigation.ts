import type { LucideIcon } from "lucide-react";

/** Single sidebar navigation entry. */
export interface NavItem {
  /** Unique slug, also used as the route segment under /admin */
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
  /** Optional pill shown on the right side of the item (e.g. "Soon") */
  badge?: string;
  /** Module roadmap phase shown on placeholder pages */
  phase?: number;
  /** Short description for placeholder page */
  description?: string;
}

export interface NavGroup {
  key: string;
  label: string;
  items: NavItem[];
}

/** Entry for the admin profile card pinned to the sidebar bottom. */
export interface SidebarProfile {
  name: string;
  role: string;
  /** e.g. "Dept. of ..." line in the reference image */
  meta: string;
}
