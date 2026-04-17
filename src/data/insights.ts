export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  accentColor: string;
}

export const allCategories = [
  "All",
  "Taxation",
  "Business Advisory",
  "Company News",
  "Compliance",
];

export const featuredArticle: Article = {
  id: "gst-amendments-maharashtra-wholesalers",
  title: "Navigating the Latest GST Amendments for Maharashtra Wholesalers",
  excerpt:
    "Discover how recent changes to the GST framework impact input tax credits for high-volume distributors and what steps you need to take to remain compliant with the updated filing requirements.",
  category: "GST Updates",
  date: "April 15, 2026",
  accentColor: "#c85a32",
};

export const insightsArticles: Article[] = [
  {
    id: "virtual-cfo-signs",
    title: "5 Signs Your Business Needs a Virtual CFO",
    excerpt:
      "Struggling with cash flow forecasting, investor reporting, or strategic planning? These five indicators suggest it may be time to bring in a Virtual CFO.",
    category: "Business Advisory",
    date: "Apr 10, 2026",
    accentColor: "#3a6b8a",
  },
  {
    id: "tds-rate-changes-fy2026",
    title: "TDS Rate Changes for FY 2026–27: What You Need to Know",
    excerpt:
      "The Finance Act introduced revisions to TDS thresholds and rates across multiple sections. Here is a practical breakdown for salaried employees and businesses.",
    category: "Taxation",
    date: "Apr 5, 2026",
    accentColor: "#5a7a4a",
  },
  {
    id: "gst-annual-return-checklist",
    title: "Your Complete GSTR-9 Filing Checklist for FY 2025–26",
    excerpt:
      "Avoid last-minute penalties with this step-by-step checklist covering reconciliation of GSTR-1, GSTR-3B, and purchase registers before the annual return deadline.",
    category: "Compliance",
    date: "Mar 28, 2026",
    accentColor: "#7a5a8a",
  },
  {
    id: "accountrix-pune-office-launch",
    title: "Accountrix Solutions Expands Operations with New Pune Office",
    excerpt:
      "We are excited to announce the opening of our second branch in Pune, enabling us to better serve our growing client base across the Deccan region.",
    category: "Company News",
    date: "Mar 20, 2026",
    accentColor: "#c85a32",
  },
  {
    id: "startup-tax-exemption-guide",
    title:
      "Section 80-IAC: Claiming Tax Exemption as a DPIIT-Recognised Startup",
    excerpt:
      "Eligible startups can claim a full three-year income tax holiday. This guide walks through the application requirements, timelines, and common audit triggers.",
    category: "Taxation",
    date: "Mar 12, 2026",
    accentColor: "#5a7a4a",
  },
  {
    id: "internal-audit-benefits-sme",
    title:
      "Why Internal Audits Are a Growth Tool for SMEs, Not Just a Compliance Box",
    excerpt:
      "Many small business owners see audits as a burden. We break down how a well-conducted internal audit can uncover inefficiencies and unlock growth opportunities.",
    category: "Business Advisory",
    date: "Mar 5, 2026",
    accentColor: "#3a6b8a",
  },
  {
    id: "eway-bill-changes-2026",
    title: "E-Way Bill System Upgrades: Changes Effective From April 2026",
    excerpt:
      "The NIC has rolled out significant changes to the E-Way Bill portal including multi-vehicle movement and real-time RFID integration. Here is what transporters must prepare for.",
    category: "Compliance",
    date: "Feb 25, 2026",
    accentColor: "#7a5a8a",
  },
  {
    id: "sg-company-tax-advisory-launch",
    title: "SG & Company Launches Dedicated Tax Advisory Desk for NRIs",
    excerpt:
      "Our associate firm SG & Company has opened a specialised advisory desk to guide Non-Resident Indians through DTAA benefits, FEMA compliance, and repatriation planning.",
    category: "Company News",
    date: "Feb 18, 2026",
    accentColor: "#c85a32",
  },
  {
    id: "advance-tax-installment-guide",
    title:
      "Advance Tax Instalments: Avoiding Interest Under Sections 234B & 234C",
    excerpt:
      "Missing advance tax deadlines can trigger compounding interest under two separate sections. This guide helps you estimate liability and stay on top of all four quarterly due dates.",
    category: "Taxation",
    date: "Feb 10, 2026",
    accentColor: "#5a7a4a",
  },
];
