import {
  Award,
  BookOpen,
  Clock3,
  GraduationCap,
  MoreHorizontal,
  Users,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SampleBadge } from "./sample-badge";

/* ------------------------------------------------------------------ */
/*  Sample-data panels. Layout only — real data in dedicated modules.  */
/* ------------------------------------------------------------------ */

const REGISTRATIONS = [
  { name: "Ali Raza", email: "ali.raza@mail.com", course: "UI UX Design", when: "2h ago" },
  { name: "Sara Khan", email: "sara.khan@mail.com", course: "Web Development", when: "5h ago" },
  { name: "John Doe", email: "john.d@mail.com", course: "Digital Marketing", when: "Yesterday" },
  { name: "Maryam Tariq", email: "maryam.t@mail.com", course: "Graphic Design", when: "Yesterday" },
  { name: "Usman Ghani", email: "usman.g@mail.com", course: "Python Programming", when: "2d ago" },
];

export function RecentRegistrations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Recent Registrations</CardTitle>
        <CardAction>
          <SampleBadge />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {REGISTRATIONS.map((r) => (
          <div key={r.email} className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarFallback>
                {r.name.split(" ").map((w) => w[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{r.name}</p>
              <p className="text-muted-foreground truncate text-xs">{r.email}</p>
            </div>
            <div className="shrink-0 text-right">
              <Badge variant="soft" className="max-w-36 truncate">
                {r.course}
              </Badge>
              <p className="text-muted-foreground mt-1 text-[11px]">{r.when}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const PURCHASES = [
  { order: "ORD-1042", user: "Ali Raza", course: "UI UX Design Pro", amount: "$49", status: "Completed" },
  { order: "ORD-1041", user: "Sara Khan", course: "Full-Stack Bundle", amount: "$120", status: "Completed" },
  { order: "ORD-1040", user: "John Doe", course: "Digital Marketing", amount: "$39", status: "Pending" },
  { order: "ORD-1039", user: "Maryam Tariq", course: "Graphic Design", amount: "$45", status: "Completed" },
];

export function RecentPurchases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Recent Purchases</CardTitle>
        <CardAction>
          <SampleBadge />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {PURCHASES.map((p) => (
          <div key={p.order} className="flex items-center gap-3">
            <span className="bg-secondary text-secondary-foreground hidden rounded-md px-2 py-1 font-mono text-[11px] sm:block">
              {p.order}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{p.user}</p>
              <p className="text-muted-foreground truncate text-xs">{p.course}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <Badge variant={p.status === "Completed" ? "success" : "warning"}>
                {p.status}
              </Badge>
              <span className="text-sm font-semibold">{p.amount}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const POPULAR = [
  { title: "UI UX Design Masterclass", instructor: "A. Commentator", students: 1240, progress: 86, tint: "from-[#6c5ce7] to-[#8f7cf0]", icon: BookOpen },
  { title: "Full-Stack Web Development", instructor: "S. Ahmed", students: 980, progress: 72, tint: "from-[#fb923c] to-[#f6b866]", icon: GraduationCap },
  { title: "Digital Marketing Bootcamp", instructor: "M. Bilal", students: 745, progress: 64, tint: "from-[#38bdf8] to-[#7dd3fc]", icon: Award },
];

export function PopularCourses({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-[15px]">Popular Courses</CardTitle>
        <CardAction>
          <SampleBadge />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {POPULAR.map((c) => (
          <div key={c.title} className="flex items-center gap-3.5">
            <span
              className={`bg-gradient-to-br ${c.tint} text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-xl`}
            >
              <c.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{c.title}</p>
              <p className="text-muted-foreground truncate text-xs">
                {c.instructor} · {c.students.toLocaleString()} students
              </p>
              <div className="bg-secondary mt-2 h-1.5 w-full overflow-hidden rounded-full">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
            <span className="text-primary shrink-0 text-sm font-bold">
              {c.progress}%
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const UPCOMING = [
  { day: "16 Nov", slots: [{ time: "09:00", title: "Learn Java Unit Testing" }, { time: "11:00", title: "Learn JS Variables" }] },
  { day: "18 Nov", slots: [{ time: "09:00", title: "Learn PHP MySQL" }, { time: "11:00", title: "Learn MySQL Unit Testing" }] },
];

export function UpcomingLiveClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Upcoming Live Classes</CardTitle>
        <CardAction>
          <SampleBadge />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {UPCOMING.map((d) => (
          <div key={d.day}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-muted-foreground text-xs font-medium">{d.day}</p>
              <MoreHorizontal className="text-muted-foreground size-4" />
            </div>
            <div className="flex flex-col gap-2">
              {d.slots.map((s) => (
                <div
                  key={s.title}
                  className="bg-background/70 flex items-center gap-3 rounded-lg border border-border/60 p-2.5"
                >
                  <span className="bg-card rounded-md border border-border/70 px-2 py-1.5 text-xs font-semibold">
                    {s.time}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium">{s.title}</p>
                    <p className="text-muted-foreground mt-0.5 flex items-center gap-2.5 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Clock3 className="size-3" /> 10h 30m
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="size-3" /> 300 Students
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const NOTICES = [
  { title: "Winter Batch Admissions Open", when: "Mon, 10:00 AM", tint: "from-[#6c5ce7] to-[#8f7cf0]" },
  { title: "New SCORM Courses Added to Library", when: "Wed, 2:00 PM", tint: "from-[#fb923c] to-[#f6b866]" },
  { title: "Scheduled Maintenance Window", when: "Fri, 6:00 PM", tint: "from-[#38bdf8] to-[#7dd3fc]" },
];

export function NoticeBoard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[15px]">Notice Board</CardTitle>
        <CardAction>
          <SampleBadge />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {NOTICES.map((n) => (
          <div
            key={n.title}
            className="bg-background/70 flex items-center gap-3 rounded-lg border border-border/60 p-2.5"
          >
            <span
              className={`bg-gradient-to-br ${n.tint} size-10 shrink-0 rounded-lg`}
              aria-hidden
            />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium">{n.title}</p>
              <p className="text-muted-foreground mt-0.5 text-[11px]">{n.when}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
