import {
  LayoutDashboard,
  GraduationCap,
  Presentation,
  ShieldCheck,
  BookOpen,
  FolderTree,
  LibraryBig,
  UserCheck,
  CreditCard,
  ListChecks,
  ClipboardList,
  Award,
  Package,
  Video,
  Mail,
  Bell,
  BarChart3,
  Globe,
  Palette,
  Settings,
} from "lucide-react";

import type { NavGroup, NavItem } from "@/types/navigation";

/**
 * Admin CMS navigation — grouped placeholders for the module roadmap.
 * Each item becomes a route under /admin. Pages render marked
 * placeholders until their dedicated module is implemented.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    key: "overview",
    label: "Overview",
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        description: "Platform-wide summary and quick insights.",
      },
    ],
  },
  {
    key: "people",
    label: "People",
    items: [
      {
        key: "students",
        label: "Students",
        href: "/admin/students",
        icon: GraduationCap,
        phase: 1,
        description: "Manage student accounts, profiles and statuses.",
      },
      {
        key: "instructors",
        label: "Instructors",
        href: "/admin/instructors",
        icon: Presentation,
        phase: 1,
        description: "Instructor records and role-based permissions.",
      },
      {
        key: "staff-roles",
        label: "Staff & Roles",
        href: "/admin/staff-roles",
        icon: ShieldCheck,
        phase: 1,
        description: "Staff members and granular role permissions.",
      },
    ],
  },
  {
    key: "learning",
    label: "Learning",
    items: [
      {
        key: "courses",
        label: "Courses",
        href: "/admin/courses",
        icon: BookOpen,
        phase: 4,
        description: "Course builder, curriculum and content management.",
      },
      {
        key: "course-categories",
        label: "Course Categories",
        href: "/admin/course-categories",
        icon: FolderTree,
        phase: 4,
        description: "Organize courses into categories and sub-categories.",
      },
      {
        key: "course-library",
        label: "Course Library",
        href: "/admin/course-library",
        icon: LibraryBig,
        phase: 4,
        description: "Central library of imported and reusable courses.",
      },
      {
        key: "enrollments",
        label: "Enrollments",
        href: "/admin/enrollments",
        icon: UserCheck,
        phase: 6,
        description: "Manual and purchase-based enrollments with progress.",
      },
    ],
  },
  {
    key: "sales",
    label: "Sales",
    items: [
      {
        key: "orders-payments",
        label: "Orders & Payments",
        href: "/admin/orders-payments",
        icon: CreditCard,
        phase: 5,
        description: "Orders, transactions, refunds and payment settings.",
      },
    ],
  },
  {
    key: "assessment",
    label: "Assessments",
    items: [
      {
        key: "quizzes",
        label: "Quizzes",
        href: "/admin/quizzes",
        icon: ListChecks,
        phase: 7,
        description: "Quiz builder, attempts and grading.",
      },
      {
        key: "assignments",
        label: "Assignments",
        href: "/admin/assignments",
        icon: ClipboardList,
        phase: 7,
        description: "Assignment submissions and review workflow.",
      },
      {
        key: "certificates",
        label: "Certificates",
        href: "/admin/certificates",
        icon: Award,
        phase: 8,
        description: "Certificate templates and issued certificates.",
      },
    ],
  },
  {
    key: "content",
    label: "Content",
    items: [
      {
        key: "scorm",
        label: "SCORM",
        href: "/admin/scorm",
        icon: Package,
        phase: 9,
        description: "SCORM package management, player and tracking.",
      },
      {
        key: "live-classes",
        label: "Live Classes",
        href: "/admin/live-classes",
        icon: Video,
        phase: 12,
        description: "Zoom / live session scheduling and management.",
      },
    ],
  },
  {
    key: "communication",
    label: "Communication",
    items: [
      {
        key: "email-manager",
        label: "Email Manager",
        href: "/admin/email-manager",
        icon: Mail,
        phase: 10,
        description: "Email templates, campaigns and delivery logs.",
      },
      {
        key: "notifications",
        label: "Notifications",
        href: "/admin/notifications",
        icon: Bell,
        phase: 10,
        description: "In-app notification composer and history.",
      },
    ],
  },
  {
    key: "insights",
    label: "Insights",
    items: [
      {
        key: "reports",
        label: "Reports & Analytics",
        href: "/admin/reports",
        icon: BarChart3,
        phase: 12,
        description: "Sales, learning and engagement analytics.",
      },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    items: [
      {
        key: "website-settings",
        label: "Website Settings",
        href: "/admin/settings/website",
        icon: Globe,
        phase: 2,
        description: "General website configuration and pages.",
      },
      {
        key: "branding",
        label: "Branding",
        href: "/admin/settings/branding",
        icon: Palette,
        phase: 2,
        description: "White-label branding: logo, colors and identity.",
      },
      {
        key: "system-settings",
        label: "System Settings",
        href: "/admin/settings/system",
        icon: Settings,
        phase: 2,
        description: "SMTP, storage, payments and system options.",
      },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);

/** Breadcrumb label lookup by href. */
const LABEL_BY_HREF = new Map(ALL_NAV_ITEMS.map((i) => [i.href, i.label]));

export function labelForSegment(href: string): string | undefined {
  return LABEL_BY_HREF.get(href);
}
