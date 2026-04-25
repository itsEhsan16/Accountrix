export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "list"; items: string[] };

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  accentColor: string;
  author: string;
  readTime: string;
  body: BodyBlock[];
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
  category: "Compliance",
  date: "April 15, 2026",
  accentColor: "#c85a32",
  author: "Accountrix Editorial Team",
  readTime: "6 min read",
  body: [
    {
      type: "paragraph",
      text: "The GST Council's recent amendments have introduced significant changes to the input tax credit (ITC) framework, particularly affecting high-volume distributors and wholesalers operating in Maharashtra. The changes primarily target mismatches between GSTR-2B and purchase registers, with new reconciliation obligations taking effect from April 1, 2026.",
    },
    {
      type: "heading",
      text: "What Changed in the Latest GST Notification?",
      level: 2,
    },
    {
      type: "paragraph",
      text: "The notification amends Rules 36, 37, and 86B of the CGST Rules, tightening the conditions under which provisional ITC may be claimed. Businesses that previously relied on a generous provisional ITC window to maintain cash flow will now need to reconcile more frequently and ensure their supplier base is compliant with timely filing obligations.",
    },
    {
      type: "heading",
      text: "Key Changes Affecting Distributors",
      level: 3,
    },
    {
      type: "list",
      items: [
        "ITC claims must now be matched against GSTR-2B on a real-time basis before filing GSTR-3B",
        "New time-bound reversal rule: ITC reversal is mandatory if the supplier does not file within 30 days of the due date",
        "Amendment to Rule 36(4) increases the provisional ITC cap from 5% to 10% for Q1 FY 2026–27",
        "Mandatory HSN-wise summary in GSTR-1 now applies to businesses with annual turnover above ₹5 crore",
        "Maharashtra GST Department requires additional documentation for ITC claims on pharmaceutical and FMCG goods",
      ],
    },
    {
      type: "heading",
      text: "Steps to Ensure Compliance",
      level: 2,
    },
    {
      type: "paragraph",
      text: "Begin by conducting a full reconciliation of your GSTR-2B data against purchase registers for all of Q4 FY 2025–26. Identify any pending supplier filings and follow up immediately — unclaimed ITC from this period cannot be carried forward under the revised rules. Update your internal procurement approval workflows to include a supplier-filing status check before payment.",
    },
    {
      type: "paragraph",
      text: "Accountrix Solutions offers a dedicated GST compliance review service for wholesale and distribution businesses across Maharashtra. Our team can help you identify exposure, file required amendments, and set up a real-time monitoring process to ensure smooth compliance under the revised framework.",
    },
  ],
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
    author: "Accountrix Advisory Team",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "As a business grows past ₹1 crore in annual revenue, the complexity of financial management grows exponentially. Yet most small and mid-sized businesses in India still rely on a bookkeeper and an annual CA visit — a model that leaves serious strategic gaps. A Virtual CFO bridges this gap at a fraction of the cost of a full-time hire.",
      },
      {
        type: "heading",
        text: "5 Clear Signals You Need CFO-Level Guidance",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Cash flow surprises are becoming routine — you discover shortfalls only when payments are already due",
          "Investor or lender conversations feel underprepared because you lack ready financial models or forecasts",
          "Your CA works only for compliance — no one is advising on profitability, pricing, or capital structure",
          "Rapid growth is outpacing your accounting team's capacity — month-close takes three or more weeks",
          "You've delayed expansion because you didn't have reliable numbers to make the decision",
        ],
      },
      {
        type: "heading",
        text: "What a Virtual CFO Actually Does",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A Virtual CFO provides ongoing financial oversight — monthly MIS reports, cash flow forecasting, budget-vs-actuals analysis, and strategic input on major business decisions. Unlike a compliance-focused CA, a V-CFO acts as your in-house financial advisor without the overhead of a full-time executive salary.",
      },
      {
        type: "heading",
        text: "Getting Started",
        level: 3,
      },
      {
        type: "paragraph",
        text: "At Accountrix, our Virtual CFO service is designed for growth-stage SMEs and family businesses that need structured financial management. If two or more of the above signals resonate, schedule a free consultation. Our team will assess your current financial management setup and recommend the right level of engagement for your stage of growth.",
      },
    ],
  },
  {
    id: "tds-rate-changes-fy2026",
    title: "TDS Rate Changes for FY 2026–27: What You Need to Know",
    excerpt:
      "The Finance Act introduced revisions to TDS thresholds and rates across multiple sections. Here is a practical breakdown for salaried employees and businesses.",
    category: "Taxation",
    date: "Apr 5, 2026",
    accentColor: "#5a7a4a",
    author: "Accountrix Tax Team",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "The Finance Act 2026 has introduced a series of targeted revisions to Tax Deducted at Source (TDS) rates and threshold limits. These changes affect employers, businesses making professional payments, and individuals involved in property transactions. Staying on top of these updates is essential to avoid interest and penalty exposure under Sections 201 and 234E.",
      },
      {
        type: "heading",
        text: "Key Rate and Threshold Changes",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Section 194C (contractor payments): annual threshold raised to ₹1,20,000; rate unchanged at 1%/2%",
          "Section 194J (professional fees): 10% rate now applies only to technical services; other professional services reduced to 5%",
          "Section 194-IA (property purchase): rate unchanged at 1%, now also applicable on stamp duty value if higher than actual consideration",
          "Section 192 (salary): revised tax slabs under the new regime require updated Form 16 templates from April",
          "Section 194O (e-commerce operators): deduction threshold raised from ₹5 lakh to ₹10 lakh annually",
        ],
      },
      {
        type: "heading",
        text: "What Employers Need to Do Right Now",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Employers must update payroll systems to reflect the new tax slabs for employees who opted for the new regime. The investment declaration window closes in April or May — ensure employees submit updated declarations so TDS is calculated correctly from April itself rather than requiring a large catch-up deduction in March.",
      },
      {
        type: "heading",
        text: "Compliance Actions for Businesses",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Review all standing agreements with contractors and professional service providers to determine if TDS rates need updating. Incorrect deduction — even an excess — creates reconciliation issues at year-end and complicates the vendor's tax return. Update your accounting software with the new thresholds before processing April payments. Accountrix provides quarterly TDS compliance reviews and Form 26Q/24Q filing services.",
      },
    ],
  },
  {
    id: "gst-annual-return-checklist",
    title: "Your Complete GSTR-9 Filing Checklist for FY 2025–26",
    excerpt:
      "Avoid last-minute penalties with this step-by-step checklist covering reconciliation of GSTR-1, GSTR-3B, and purchase registers before the annual return deadline.",
    category: "Compliance",
    date: "Mar 28, 2026",
    accentColor: "#7a5a8a",
    author: "Accountrix GST Team",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "GSTR-9, the annual return under GST, consolidates 12 months of outward supplies, inward supplies, and tax payments. Filing it correctly requires painstaking reconciliation across GSTR-1, GSTR-3B, and your purchase register. With the deadline typically falling in December 2026, now is the right time to start your pre-filing review.",
      },
      {
        type: "heading",
        text: "Pre-Filing Reconciliation Checklist",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Reconcile turnover declared in GSTR-1 against books of account — identify omissions or amendments",
          "Compare ITC claimed in GSTR-3B against GSTR-2B for each month of the financial year",
          "Identify excess ITC claimed and verify reversal was made within the same financial year",
          "Verify HSN summary accuracy — ensure 6-digit or 8-digit HSN codes are applied correctly",
          "Check for pending credit notes or debit notes not yet reported in GSTR-1",
          "Confirm all RCM entries and tax paid under reverse charge are correctly reflected in GSTR-3B",
        ],
      },
      {
        type: "heading",
        text: "Common Errors That Attract Scrutiny",
        level: 2,
      },
      {
        type: "paragraph",
        text: "GST audits are increasingly data-driven. The GSTN system automatically flags mismatches between GSTR-1 and GSTR-3B, excess ITC claims, and turnover inconsistencies with Form 26AS. Address these proactively in your annual return rather than receiving a demand notice after filing.",
      },
      {
        type: "heading",
        text: "GSTR-9C Applicability",
        level: 3,
      },
      {
        type: "paragraph",
        text: "For businesses with aggregate turnover exceeding ₹5 crore in FY 2025–26, filing GSTR-9C (reconciliation statement, self-certified) is mandatory. Your chartered accountant must certify that the declared turnover, ITC, and tax paid reconcile with audited financial statements. Accountrix offers a structured annual GST review engagement — contact us by September 2026 to ensure adequate preparation time.",
      },
    ],
  },
  {
    id: "accountrix-pune-office-launch",
    title: "Accountrix Solutions Expands Operations with New Pune Office",
    excerpt:
      "We are excited to announce the opening of our second branch in Pune, enabling us to better serve our growing client base across the Deccan region.",
    category: "Company News",
    date: "Mar 20, 2026",
    accentColor: "#c85a32",
    author: "Accountrix Solutions",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "We are proud to announce the opening of Accountrix Solutions' second office, now operational in Pune. This expansion marks a significant milestone in our journey from a Rajura-based firm to a multi-city accounting and advisory practice serving businesses across the Deccan and Western Maharashtra regions.",
      },
      {
        type: "heading",
        text: "Why Pune?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Pune's rapidly expanding SME ecosystem — spanning IT services, manufacturing, logistics, and retail — has long been underserved by high-quality accounting advisory at an accessible price point. Our Pune clients previously relied on remote service delivery; this new office allows us to provide in-person consultations, document review sessions, and compliance workshops.",
      },
      {
        type: "heading",
        text: "What This Means for Our Clients",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Pune-based clients can now schedule in-person consultations at our new Koregaon Park office",
          "Faster turnaround on document submissions and verification for tax filings",
          "Dedicated point-of-contact for GST, TDS, and payroll compliance in the Western Maharashtra jurisdiction",
          "Expanded capacity to onboard new clients across Pune, Nashik, and Aurangabad",
        ],
      },
      {
        type: "heading",
        text: "Our Team in Pune",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The Pune office is led by a senior chartered accountant with over 12 years of experience in corporate taxation and SME advisory. The team includes two GST specialists and a payroll compliance executive, allowing us to handle the full range of Accountrix service offerings from day one. If you are based in Pune or surrounding districts, we invite you to schedule a free initial consultation.",
      },
    ],
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
    author: "Accountrix Tax Team",
    readTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text: "Section 80-IAC of the Income Tax Act offers eligible startups a full 100% deduction on profits for any three consecutive assessment years out of the first ten years from incorporation. For a startup growing rapidly, this can mean significant tax savings at exactly the stage when capital is most needed.",
      },
      {
        type: "heading",
        text: "Eligibility Requirements",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Company or LLP must be incorporated between April 1, 2016 and April 1, 2030",
          "Must be recognised by DPIIT (Department for Promotion of Industry and Internal Trade)",
          "Annual turnover must not exceed ₹100 crore in the year for which the deduction is claimed",
          "Startup must be working towards innovation, development, or improvement of products or processes",
          "Deduction can only be claimed after obtaining approval from the Inter-Ministerial Board (IMB)",
        ],
      },
      {
        type: "heading",
        text: "The IMB Approval Process",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The Inter-Ministerial Board evaluates applications on the degree of innovation, scalability, and employment potential. Applications can be submitted online through the Startup India portal. Typical processing time is 60–90 days. Importantly, DPIIT recognition and IMB approval are two separate steps — many startups have DPIIT recognition but have not applied for IMB approval, leaving 80-IAC benefits unclaimed.",
      },
      {
        type: "heading",
        text: "Common Audit Triggers",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The income tax department has been scrutinising 80-IAC claims more closely following a surge in filings. Common triggers include: claiming the deduction without valid IMB approval; turnover exceeding ₹100 crore in the claim year; claiming deductions on income from activities outside the core innovation business; and selecting non-consecutive assessment years without proper justification. Accountrix works closely with early-stage startups to ensure DPIIT recognition, IMB applications, and annual compliance are handled correctly.",
      },
    ],
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
    author: "Accountrix Advisory Team",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "When most small business owners hear 'internal audit,' they picture a costly, disruptive exercise primarily useful for large corporations. In reality, a well-structured internal audit is one of the most practical tools available to SMEs — a structured way to identify inefficiencies, prevent fraud, and build the financial discipline needed to attract investment or scale operations.",
      },
      {
        type: "heading",
        text: "What an Internal Audit Covers",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Accounting process review — are invoices being recorded accurately and on time?",
          "Inventory and asset verification — are stock counts matching book records?",
          "Payroll audit — are all PF contributions and TDS deductions computed correctly?",
          "Vendor and contract compliance — are approved supplier lists and payment terms being followed?",
          "Cash flow controls — are dual-authorisation requirements in place for high-value payments?",
        ],
      },
      {
        type: "heading",
        text: "The Growth Angle",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Beyond catching errors, internal audits create a documented track record of financial discipline that is invaluable when approaching banks for credit or investors for funding. Lenders and investors regularly ask for evidence of internal controls — an audit report provides exactly that evidence in a structured, credible format.",
      },
      {
        type: "heading",
        text: "How Frequently Should SMEs Conduct Audits?",
        level: 3,
      },
      {
        type: "paragraph",
        text: "For most SMEs, an annual internal audit is a minimum. Businesses with high transaction volumes — retail, FMCG distribution, manufacturing — benefit from semi-annual reviews. If you are preparing for a fundraising round or bank credit enhancement, a focused internal audit three to six months beforehand gives you time to remediate issues. Accountrix offers fixed-scope internal audit engagements tailored to SME budgets.",
      },
    ],
  },
  {
    id: "eway-bill-changes-2026",
    title: "E-Way Bill System Upgrades: Changes Effective From April 2026",
    excerpt:
      "The NIC has rolled out significant changes to the E-Way Bill portal including multi-vehicle movement and real-time RFID integration. Here is what transporters must prepare for.",
    category: "Compliance",
    date: "Feb 25, 2026",
    accentColor: "#7a5a8a",
    author: "Accountrix GST Team",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "The National Informatics Centre (NIC) has rolled out a major upgrade to the E-Way Bill (EWB) portal ahead of April 2026. These changes affect transporters, consignors, and consignees across all industries. Understanding the new features is essential for avoiding movement blocks at checkposts and reconciliation issues in GSTR-1.",
      },
      {
        type: "heading",
        text: "What's New in the April 2026 EWB Update",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Multi-vehicle movement: a single E-Way Bill can now be assigned to multiple vehicles for part-load shipments, with each leg tracked independently",
          "RFID integration: commercial vehicles with FastTag are now linked to EWB data — physical checkpost verification reduced in 8 states including Maharashtra",
          "Dynamic validity: the 24-hour auto-extension rule has been replaced with a GPS-based validity calculation for over-dimensional cargo",
          "API rate limits: third-party ERP integrations must now comply with updated limits of 100 API calls per minute per GSTIN",
        ],
      },
      {
        type: "heading",
        text: "Compliance Actions for Transporters",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Transporters should update their E-Way Bill portal credentials and test the multi-vehicle movement feature with a pilot shipment before going live. Vehicles carrying goods above ₹50,000 in value must have RFID-enabled FastTags — ensure your fleet is compliant before April 30.",
      },
      {
        type: "heading",
        text: "For Businesses Using Third-Party ERP",
        level: 3,
      },
      {
        type: "paragraph",
        text: "If your business generates E-Way Bills through Tally, SAP, or any other ERP integration, coordinate with your software vendor to confirm they have updated their API integration. Failed API calls will silently drop EWB generation requests — a problem that typically surfaces only during a GST audit. Accountrix can review your current EWB workflow and assist with bulk corrections for any past consignments affected by the portal transition.",
      },
    ],
  },
  {
    id: "sg-company-tax-advisory-launch",
    title: "SG & Company Launches Dedicated Tax Advisory Desk for NRIs",
    excerpt:
      "Our associate firm SG & Company has opened a specialised advisory desk to guide Non-Resident Indians through DTAA benefits, FEMA compliance, and repatriation planning.",
    category: "Company News",
    date: "Feb 18, 2026",
    accentColor: "#c85a32",
    author: "Accountrix Solutions",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "Our long-standing associate firm SG & Company has launched a specialised Non-Resident Indian (NRI) Tax Advisory Desk, addressing a significant gap in the market for structured, reliable tax guidance for the Indian diaspora. The desk handles the full complexity of cross-border taxation — from DTAA benefit claims to FEMA repatriation compliance and Indian income tax return filing.",
      },
      {
        type: "heading",
        text: "Who This Service Is Designed For",
        level: 2,
      },
      {
        type: "list",
        items: [
          "NRIs with rental income or capital gains from Indian properties",
          "Individuals who recently relocated abroad and need to re-determine their residential status under the Income Tax Act",
          "NRIs receiving dividends, interest, or mutual fund distributions from Indian accounts",
          "Returning NRIs who wish to repatriate funds or close NRE/NRO accounts correctly",
          "Professionals on employment visas in the UAE, USA, UK, Singapore, or Australia with Indian financial assets",
        ],
      },
      {
        type: "heading",
        text: "Key Services Offered",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The desk offers NRI tax return filing (ITR-2 and ITR-3), DTAA benefit analysis and application, FEMA compliance advisory for property transactions, and repatriation planning under RBI's Liberalised Remittance Scheme. All engagements are fully remote and document-driven — clients can complete the entire process digitally.",
      },
      {
        type: "heading",
        text: "How to Engage",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The NRI Tax Advisory Desk operates through a dedicated intake portal via the SG & Company website. Initial consultations are complimentary. Accountrix Solutions continues to manage the core bookkeeping, payroll, and GST compliance for India-based entities of NRI-owned businesses — both firms work in close coordination for seamless end-to-end compliance.",
      },
    ],
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
    author: "Accountrix Tax Team",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Advance tax requires taxpayers with estimated annual liability above ₹10,000 to pay tax in instalments throughout the year rather than as a lump sum at year-end. Failing to pay on time — or underpaying — triggers interest under Sections 234B and 234C, which compound and can constitute a meaningful addition to your final tax bill.",
      },
      {
        type: "heading",
        text: "The Four Instalment Deadlines",
        level: 2,
      },
      {
        type: "list",
        items: [
          "On or before June 15: at least 15% of estimated annual tax liability",
          "On or before September 15: at least 45% cumulative",
          "On or before December 15: at least 75% cumulative",
          "On or before March 15: 100% of estimated annual tax liability",
        ],
      },
      {
        type: "heading",
        text: "How Interest Is Calculated",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Section 234C charges 1% simple interest per month (or part thereof) on the shortfall in each instalment. Section 234B charges 1% per month on unpaid tax if the aggregate advance tax paid is less than 90% of assessed tax. Both sections apply simultaneously — businesses that significantly underestimate annual income often face both charges stacked together at the time of assessment.",
      },
      {
        type: "heading",
        text: "Estimation Tips for FY 2026–27",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Use your P&L from the previous year as a starting point, then adjust for known changes: new contracts, maturing investments, property sale proceeds, or exceptional one-time income. For businesses with volatile income, consider the safe-harbour approach — paying advance tax equal to 100% of the previous year's assessed tax eliminates Section 234C exposure even if current-year income is higher. Accountrix can prepare your advance tax estimation and set up instalment reminders as part of our annual retainer service.",
      },
    ],
  },
];
