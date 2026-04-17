import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | Accountrix Solutions",
  description:
    "Stay updated with the latest financial news, tax compliance changes, GST updates, and business advisory insights from the experts at Accountrix Solutions and SG & Company.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
