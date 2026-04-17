"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const servicesData = [
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description:
      "Meticulous record-keeping is the foundation of any successful enterprise. We act as your expert financial partner, delivering highly accurate ledger management so you always know exactly where your business stands.",
    features: [
      "General ledger maintenance",
      "Accounts Payable & Accounts Receivable tracking",
      "Monthly bank and credit card reconciliations",
      "Fixed asset management",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gst-filings",
    title: "GST Filings & Compliances",
    description:
      "Navigating India's indirect tax landscape requires precision. We handle your entire GST lifecycle, ensuring seamless alignment with all statutory requirements to avoid penalties and optimize input tax credits.",
    features: [
      "Timely GST Return filings (GSTR-1, GSTR-3B, etc.)",
      "GST registration and amendments",
      "Input Tax Credit (ITC) reconciliation",
      "Annual return filing and GST audit support",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting & MIS",
    description:
      "Transform raw data into actionable intelligence. We provide comprehensive CFO solutions that give you crystal-clear visibility into your financial health, empowering you to make data-driven decisions with confidence.",
    features: [
      "Profit & Loss statements and Balance Sheet preparation",
      "Cash flow analysis and forecasting",
      "Customized Management Information Systems (MIS) reporting",
      "Statutory and compliance reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "payroll",
    title: "Payroll Management",
    description:
      "Keep your workforce happy and your business compliant. Our end-to-end payroll processing ensures your team is paid accurately and on time, while we manage all complex statutory deductions.",
    features: [
      "Salary processing and payslip generation",
      "Provident Fund (PF) and ESIC compliance",
      "Professional Tax (PT) and Labour Welfare Fund (LWF) deductions",
      "Form 16 generation and full employee record management",
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "taxes",
    title: "Direct & Indirect Taxes",
    description:
      "Proactive tax planning is crucial for wealth retention. We offer comprehensive income tax services for both individuals and corporate entities, ensuring you minimize liabilities legally and effectively.",
    features: [
      "Corporate and individual Income Tax Return (ITR) filing",
      "Tax planning and structuring",
      "TDS/TCS compliance and return filing",
      "Representation before tax authorities",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "advisory",
    title: "Strategic Business Advisory",
    description:
      "We don't just prepare reports; we provide insights. Our advisory services are designed to help you navigate financial risks, structure your operations efficiently, and unlock sustainable, profitable growth.",
    features: [
      "Virtual CFO services",
      "Financial modeling and business valuation",
      "Risk management and internal controls",
      "Capital expenditure planning",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesContent() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] font-(family-name:--font-source-sans) text-[#5a5854]">
      {/* ── Hero ── */}
      <section className="relative bg-[#1f1e1b] py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-tr from-[#1f1e1b] to-[#5a5854]" />
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-5xl mx-auto px-6 text-center z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 border border-[#c85a32] px-3 py-1 mb-8"
          >
            <span className="font-bold text-[#c85a32] text-xs uppercase tracking-widest">
              6 Services
            </span>
            <span className="w-1 h-1 bg-[#c85a32] rounded-full" />
            <span className="font-bold text-[#c85a32] text-xs uppercase tracking-widest">
              Full Suite
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-(family-name:--font-crimson-pro) text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Comprehensive Financial{" "}
            <span className="italic font-medium text-[#c85a32]">
              Solutions.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-(family-name:--font-crimson-pro) text-xl md:text-2xl text-[#e5e2db] mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Tailored accounting, tax, and advisory services designed to fuel
            your business growth with clarity and absolute compliance.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link
              href="/#contact"
              className="bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold uppercase tracking-wider px-8 py-4 text-sm"
            >
              Schedule a Consultation
            </Link>
            <a
              href="#accounting"
              className="border border-white/40 hover:border-white hover:bg-white/10 transition-colors text-white font-semibold uppercase tracking-wider px-8 py-4 text-sm"
            >
              Explore Services ↓
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#161512] border-t border-white/10 text-white px-6 lg:px-12 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { s: "6", l: "Core Services", b: false },
            { s: "GST+ITR", l: "Tax Coverage", b: true },
            { s: "100%", l: "Compliance Rate", b: true },
            { s: "SG & Co.", l: "Strategic Partner", b: true },
          ].map((x, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex flex-col ${
                x.b ? "md:border-l md:border-white/20 md:pl-12" : ""
              }`}
            >
              <span className="font-(family-name:--font-crimson-pro) text-[#c85a32] text-4xl lg:text-5xl mb-2">
                {x.s}
              </span>
              <span className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                {x.l}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e5e2db]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
        >
          <div className="lg:w-2/5">
            <motion.span
              variants={fadeInUp}
              className="block font-bold text-[#c85a32] text-sm uppercase tracking-widest mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-(family-name:--font-crimson-pro) text-4xl md:text-5xl text-[#1f1e1b] leading-tight mb-6"
            >
              Expertise That Scales With You
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-12 h-1 bg-[#c85a32]" />
          </div>
          <motion.p
            variants={fadeInUp}
            className="lg:w-3/5 text-lg md:text-xl leading-relaxed text-[#5a5854] lg:pt-2"
          >
            At Accountrix Solutions, backed by the strategic expertise of SG &
            Company, we understand that no two businesses are alike. Our suite
            of financial services is designed to be modular and scalable.
            Whether you are a retail startup needing basic bookkeeping or a
            diversified manufacturer requiring complex financial reporting and
            tax structuring, we provide the precise support you need to operate
            with absolute confidence.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Detailed Services Breakdown ── */}
      <section className="py-12 md:py-24 bg-[#f9f8f6]">
        <div className="max-w-6xl mx-auto px-6">
          {servicesData.map((service, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={sectionStagger}
                className={`scroll-mt-28 py-12 md:py-20 flex flex-col gap-10 md:gap-16 items-center ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } ${
                  index < servicesData.length - 1
                    ? "border-b border-[#e5e2db]"
                    : ""
                }`}
              >
                {/* Visual */}
                <motion.div variants={fadeInUp} className="w-full md:w-1/2">
                  <div className="relative pr-8 pb-8">
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#c85a32]" />
                    <div className="relative aspect-4/3 w-full z-10 overflow-hidden shadow-sm">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={staggerContainer}
                  className="w-full md:w-1/2"
                >
                  <motion.span
                    variants={fadeInUp}
                    className="block font-bold text-[#c85a32] text-xs uppercase tracking-widest mb-3"
                  >
                    Service {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <motion.h3
                    variants={fadeInUp}
                    className="font-(family-name:--font-crimson-pro) text-3xl md:text-4xl text-[#1f1e1b] mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.div
                    variants={fadeInUp}
                    className="w-10 h-0.5 bg-[#c85a32] mb-6"
                  />
                  <motion.p
                    variants={fadeInUp}
                    className="text-lg leading-relaxed mb-8"
                  >
                    {service.description}
                  </motion.p>
                  <motion.ul variants={fadeInUp} className="space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#c85a32] shrink-0 mt-0.5" />
                        <span className="text-base text-[#1f1e1b] leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative bg-[#1f1e1b] py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative max-w-5xl mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <motion.span
              variants={fadeInUp}
              className="block font-bold text-[#c85a32] text-sm uppercase tracking-widest mb-4"
            >
              Ready to Get Started?
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-(family-name:--font-crimson-pro) text-3xl md:text-4xl text-white mb-5 leading-tight"
            >
              Let&apos;s Build Your Financial Strategy Together
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#e5e2db] text-lg font-light leading-relaxed"
            >
              Unsure which services align best with your current business goals?
              Reach out to our team for a personalized assessment.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-5 shrink-0 items-center lg:items-start"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c85a32] shrink-0" />
              <a
                href="mailto:info@accountrixsolutions.in"
                className="text-[#e5e2db] hover:text-white transition-colors text-sm"
              >
                info@accountrixsolutions.in
              </a>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#c85a32] shrink-0" />
              <span className="text-[#e5e2db] text-sm">+91 7276535406</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact"
                className="inline-block bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold uppercase tracking-wider px-8 py-4 text-sm"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
