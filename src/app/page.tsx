"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  FileText,
  BarChart2,
  Users,
  Info,
} from "lucide-react";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="relative bg-[#f9f8f6] font-sans selection:bg-[#c85a32] selection:text-white">
      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-[#1f1e1b] h-[calc(100vh-73px)] flex">
          {/* Right side image with diagonal clip */}
          <div
            className="absolute inset-y-0 right-0 w-[52%] pointer-events-none"
            style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <img
              src="/hero-image.png"
              alt="Hero visual"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 w-full px-6 lg:px-20 flex items-center py-10"
          >
            <div className="w-[52%]">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 border border-[#c85a32] px-3 py-1 mb-4"
              >
                <span className="font-bold text-[#c85a32] text-xs uppercase tracking-widest">
                  Est. 2025
                </span>
                <span className="w-1 h-1 bg-[#c85a32] rounded-full" />
                <span className="font-bold text-[#c85a32] text-xs uppercase tracking-widest">
                  Rajura, Maharashtra
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-white text-5xl lg:text-6xl xl:text-[5.25rem] leading-[1.05] mb-5 tracking-tight"
              >
                Smart
                <br />
                Accounting,
                <br />
                <span className="italic font-medium text-[#c85a32]">
                  Simple Solutions.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-white/80 text-xl lg:text-2xl mb-4"
              >
                For businesses that demand clarity, compliance, and confidence.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-base mb-8 leading-relaxed"
              >
                Accountrix Solutions, proudly partnering with SG &amp; Company,
                delivers uncompromising financial expertise. We transform
                complex numbers into clear pathways for your business growth.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="/contact"
                  className="bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide"
                >
                  Get Free Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#1f1e1b] text-white px-6 lg:px-12 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { s: "100%", l: "Client Data Confidentiality", b: false },
              { s: "GST+ITR", l: "Compliances Covered", b: true },
              { s: "2025", l: "Trusted Since", b: true },
              { s: "SG & Co.", l: "Strategic Brand Partner", b: true },
            ].map((x, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`flex flex-col ${x.b ? "md:border-l md:border-white/20 md:pl-12" : ""}`}
              >
                <span className="font-[family-name:var(--font-crimson-pro)] text-[#c85a32] text-4xl lg:text-5xl mb-2">
                  {x.s}
                </span>
                <span className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                  {x.l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-white px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative pb-10 pr-10"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#c85a32]" />
              <div className="relative aspect-[4/5] bg-gray-200 z-10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                  priority
                  alt="Team"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full lg:w-1/2"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mb-6"
              >
                A Trusted Accounting Partner for Growing Businesses
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-6 text-[#5a5854] text-lg leading-relaxed mb-10"
              >
                <p>
                  At Accountrix Solutions, we believe that solid financial
                  foundations are the bedrock of business success. Through our
                  strategic partnership with SG & Company, we offer unparalleled
                  expertise tailored to the unique regulatory landscape and
                  market dynamics of Maharashtra and beyond.
                </p>
                <p>
                  Our mission goes beyond basic bookkeeping. We aim to be your
                  strategic advisors, ensuring compliance, optimizing tax
                  structures, and providing the clarity needed to make confident
                  business decisions.
                </p>
              </motion.div>
              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-[#c85a32] pl-6 py-2 mb-10"
              >
                <p className="font-[family-name:var(--font-crimson-pro)] text-[#c85a32] text-2xl italic font-medium">
                  "Our team, clients, and shareholders are at the center of
                  everything we do."
                </p>
              </motion.blockquote>
              <motion.a
                variants={fadeInUp}
                href="#"
                className="inline-flex items-center gap-3 border-b-2 border-transparent hover:border-black pb-1 group transition-all"
              >
                <span className="font-bold text-[#1f1e1b] text-sm uppercase tracking-widest">
                  Learn More About Us
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="bg-[#f9f8f6] px-6 lg:px-12 py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16"
            >
              <div className="max-w-2xl">
                <motion.span
                  variants={fadeInUp}
                  className="block font-bold text-[#c85a32] text-sm uppercase tracking-widest mb-4"
                >
                  What We Serve
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight"
                >
                  Proficient Financial Services for Every Business
                </motion.h2>
              </div>
              <motion.a
                variants={fadeInUp}
                href="#"
                className="shrink-0 border border-[#1f1e1b] hover:bg-[#1f1e1b] transition-colors hover:text-white text-[#1f1e1b] font-semibold text-sm uppercase px-8 py-4 tracking-wide"
              >
                View All Services
              </motion.a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  t: "Accounting & Bookkeeping",
                  d: "Meticulous record-keeping and ledger management ensuring your financial foundation is always accurate and up-to-date.",
                  icon: BookOpen,
                },
                {
                  t: "GST Filings & Compliance",
                  d: "Seamless handling of GST registrations, returns, and advisory to keep you perfectly aligned with statutory requirements.",
                  icon: FileText,
                },
                {
                  t: "Financial Reporting",
                  d: "Comprehensive statements, cash flow analysis, and balance sheets offering crystal clear visibility into your financial health.",
                  icon: BarChart2,
                },
                {
                  t: "Payroll Management",
                  d: "End-to-end payroll processing, ensuring your team is paid accurately and on time while managing all related tax deductions.",
                  icon: Users,
                },
                {
                  t: "Direct & Indirect Taxes",
                  d: "Expert planning and filing for Income Tax, TDS, and other duties to minimize liabilities legally and effectively.",
                  icon: CheckCircle2,
                },
                {
                  t: "Business Advisory",
                  d: "Strategic insights, risk management, and structuring advice to propel your business towards sustainable, profitable growth.",
                  icon: Info,
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white border border-[#e5e2db] p-10 hover:shadow-xl transition-shadow group"
                >
                  <div className="w-14 h-14 bg-[#faf3f0] flex items-center justify-center text-[#c85a32] mb-8">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl mb-4">
                    {s.t}
                  </h3>
                  <p className="text-[#5a5854] leading-relaxed mb-8">{s.d}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-bold text-[#c85a32] text-xs uppercase tracking-widest"
                  >
                    Learn More{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white border-y border-[#e5e2db] px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mb-4"
              >
                Industries We Empower
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#5a5854] text-lg leading-relaxed"
              >
                Tailored financial solutions designed around the specific
                operational realities of distinct sectors.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  t: "Consumer & Retail",
                  d: "Managing high-volume transactions, inventory accounting, and multi-location tax compliances.",
                  i: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
                },
                {
                  t: "Wholesalers & Distributors",
                  d: "Optimizing supply chain finance, logistics cost tracking, and complex state-level taxation.",
                  i: "https://images.unsplash.com/photo-1586528116311-ad8ed7c15438?q=80&w=800&auto=format&fit=crop",
                },
                {
                  t: "Manufacturing & Service",
                  d: "Cost accounting, capital expenditure planning, and holistic service-sector financial reporting.",
                  i: "https://images.unsplash.com/photo-1565106430482-8f6e1f34b225?q=80&w=800&auto=format&fit=crop",
                },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col text-center group"
                >
                  <div className="bg-[#eae8e2] aspect-[4/3] w-full mb-6 overflow-hidden relative">
                    <Image
                      src={x.i}
                      alt={x.t}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl mb-3">
                    {x.t}
                  </h3>
                  <p className="text-[#5a5854] leading-relaxed">{x.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="bg-white px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mb-6"
              >
                Ready to Simplify Your Accounting?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#5a5854] text-lg leading-relaxed mb-12 max-w-lg"
              >
                Whether you need a full-scale audit, tax planning, or simple
                bookkeeping, we are here to support your growth. Reach out for a
                free consultation.
              </motion.p>
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#c85a32] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5a5854] text-sm uppercase tracking-widest mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@accountrixsolutions.in"
                      className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl hover:text-[#c85a32] transition-colors"
                    >
                      info@accountrixsolutions.in
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#c85a32] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5a5854] text-sm uppercase tracking-widest mb-1">
                      Call Us
                    </p>
                    <p className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl">
                      +91 7276535406
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#c85a32] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5a5854] text-sm uppercase tracking-widest mb-1">
                      Visit Us
                    </p>
                    <p className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-xl leading-relaxed">
                      Gadchandur Road, Rajura,
                      <br />
                      Chandrapur, Maharashtra
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#f9f8f6] border border-[#e5e2db] p-8 md:p-12"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] appearance-none focus:outline-none focus:border-[#c85a32] transition-colors">
                    <option>Service Interested In</option>
                    <option>Accounting & Bookkeeping</option>
                    <option>GST Filings</option>
                    <option>Payroll</option>
                    <option>Other</option>
                  </select>
                  <ChevronRight className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[#1f1e1b] pointer-events-none rotate-90" />
                </div>
                <div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase py-4 tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
