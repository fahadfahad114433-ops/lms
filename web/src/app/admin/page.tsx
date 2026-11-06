import {
  Award,
  BookOpen,
  CreditCard,
  GraduationCap,
  Presentation,
  UserCheck,
} from "lucide-react";

import {
  PageContainer,
  PageHeader,
} from "@/components/admin/shared/page-container";
import { StatCard } from "@/components/admin/dashboard/stat-card";
import {
  EnrollmentChart,
  RevenueChart,
} from "@/components/admin/dashboard/charts";
import {
  NoticeBoard,
  PopularCourses,
  RecentPurchases,
  RecentRegistrations,
  UpcomingLiveClasses,
} from "@/components/admin/dashboard/panels";
import { SampleBadge } from "@/components/admin/dashboard/sample-badge";

/**
 * Admin overview — layout preview with clearly-marked sample data.
 * Real statistics are connected in the dedicated Admin Overview module.
 */
export default function AdminOverviewPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Welcome to LMS Admin"
        description="Here is what is happening across your academy today."
        actions={<SampleBadge />}
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        {/* Main column */}
        <div className="min-w-0 space-y-6">
          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <StatCard
              label="Total Students"
              value="1,248"
              icon={GraduationCap}
              visual="bars-orange"
            />
            <StatCard
              label="Total Instructors"
              value="18"
              icon={Presentation}
              visual="line-purple"
            />
            <StatCard
              label="Total Courses"
              value="214"
              icon={BookOpen}
              visual="bars-blue"
            />
            <StatCard
              label="Total Enrollments"
              value="3,762"
              icon={UserCheck}
              visual="line-purple"
            />
            <StatCard
              label="Total Revenue"
              value="$48,920"
              icon={CreditCard}
              visual="bars-orange"
            />
            <StatCard
              label="Completed Courses"
              value="316"
              icon={Award}
              visual="bars-blue"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-5">
            <div className="2xl:col-span-3">
              <EnrollmentChart />
            </div>
            <div className="2xl:col-span-2">
              <RevenueChart />
            </div>
          </div>

          {/* Lists */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            <RecentRegistrations />
            <RecentPurchases />
            <PopularCourses className="lg:col-span-2 2xl:col-span-1" />
          </div>
        </div>

        {/* Right rail (reference layout) */}
        <aside className="hidden min-w-0 space-y-6 xl:block">
          <UpcomingLiveClasses />
          <NoticeBoard />
        </aside>
      </div>
    </PageContainer>
  );
}
