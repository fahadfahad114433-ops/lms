import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {ListChecks} from "lucide-react";

export const metadata: Metadata = {
  title: "Quizzes",
};

export default function QuizzesPage() {
  return (
    <PlaceholderPage
      title="Quizzes"
      description="Quiz builder, attempts and automatic grading."
      icon={ListChecks}
      phase={7}
    />
  );
}
