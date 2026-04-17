import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Accountrix Solutions & SG & Co. Partner",
  description:
    "Explore the comprehensive financial services offered by Accountrix Solutions. From GST filings and bookkeeping to Virtual CFO and business advisory, we provide clarity and compliance for growing businesses.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
