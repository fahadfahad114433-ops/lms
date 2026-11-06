import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/admin/shared/placeholder-page";
import {CreditCard} from "lucide-react";

export const metadata: Metadata = {
  title: "Orders & Payments",
};

export default function OrdersPaymentsPage() {
  return (
    <PlaceholderPage
      title="Orders & Payments"
      description="Orders, transactions, refunds and payment gateways."
      icon={CreditCard}
      phase={5}
    />
  );
}
