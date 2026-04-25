"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  FileText,
  BarChart2,
  Users,
  Info,
  Send,
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

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const scrollSlider = (dir: "prev" | "next") => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector("[data-card]") as HTMLElement;
    const amount = card ? card.offsetWidth + 32 : 360;
    sliderRef.current.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-[#f9f8f6] font-sans selection:bg-[#c85a32] selection:text-white overflow-x-hidden">
      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-[#1f1e1b] min-h-[calc(100vh-73px)] flex font-[family-name:var(--font-public-sans)]">
          {/* Right side image with diagonal clip — hidden on mobile */}
          <div
            className="hidden lg:block absolute inset-y-0 right-0 w-[52%] pointer-events-none"
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
            className="relative z-10 w-full px-6 lg:px-20 flex items-center py-16 lg:py-10"
          >
            <div className="w-full lg:w-[52%]">
              <motion.h1
                variants={fadeInUp}
                className="font-[family-name:var(--font-crimson-pro)] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.25rem] leading-[1.05] mb-5 tracking-tight"
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
                className="font-bold text-[#c85a32] text-xs uppercase tracking-widest mb-3"
              >
                End-to-End Accounting &amp; Compliance service for Growing
                Businesses
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-base mb-8 leading-relaxed"
              >
                Accountrix Solutions is a strategic brand partner of SG &amp;
                Company. We deliver expert financial solutions—translating
                complexity into clarity for sustainable business growth.
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#1f1e1b] text-white border-t border-white/10 font-[family-name:var(--font-public-sans)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full px-6 lg:px-12 flex flex-col sm:flex-row sm:items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            {[
              { s: "100%", l: "Client Data Confidentiality" },
              { s: "2018", l: "Trusted Since" },
              { s: "SG & Co.", l: "Strategic Brand Partner" },
            ].map((x, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col flex-1 py-10 px-10 lg:px-16"
              >
                <span className="font-[family-name:var(--font-crimson-pro)] text-[#c85a32] text-4xl lg:text-5xl mb-1">
                  {x.s}
                </span>
                <span className="font-semibold text-white/50 text-xs uppercase tracking-widest">
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
              className="w-full lg:w-1/2 relative pb-6 pr-6 md:pb-10 md:pr-10"
            >
              <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-[#c85a32]" />
              <div className="relative aspect-[4/5] bg-gray-200 z-10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                  priority
                  alt="Team"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90 transition-all duration-500"
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
                Empowering Growth with Trusted Accounting &amp; Financial
                Expertise
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-6 text-[#5a5854] text-lg leading-relaxed mb-10"
              >
                <p>
                  At Accountrix Solutions, we believe strong financial
                  foundations are the cornerstone of lasting business success.
                  In strategic partnership with SG &amp; Company, we deliver
                  expert financial solutions tailored to evolving regulatory
                  requirements and dynamic market environments.
                </p>
                <p>
                  Beyond bookkeeping, SG &amp; Co. act as your strategic
                  advisors—ensuring compliances, optimizing tax structures, and
                  delivering clear financial insights that empower confident,
                  informed decisions.
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
                href="/about"
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
                href="/services"
                className="shrink-0 border border-[#1f1e1b] hover:bg-[#1f1e1b] transition-colors hover:text-white text-[#1f1e1b] font-semibold text-sm uppercase px-8 py-4 tracking-wide"
              >
                View All Services
              </motion.a>
            </motion.div>
            {/* Slider nav */}
            <div className="flex items-center justify-end gap-3 mb-6">
              <button
                onClick={() => scrollSlider("prev")}
                aria-label="Previous"
                className="w-11 h-11 flex items-center justify-center border border-[#1f1e1b] hover:bg-[#1f1e1b] hover:text-white text-[#1f1e1b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollSlider("next")}
                aria-label="Next"
                className="w-11 h-11 flex items-center justify-center border border-[#1f1e1b] hover:bg-[#1f1e1b] hover:text-white text-[#1f1e1b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Slider track */}
            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
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
                  data-card
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-[#e5e2db] p-8 md:p-10 hover:shadow-xl transition-shadow group snap-start shrink-0 w-[85vw] sm:w-[42vw] lg:w-[calc(33.333%-22px)]"
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
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1f1e1b] px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-16 lg:gap-24"
            >
              {/* Left — Why Choose Us */}
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <span className="block font-bold text-[#c85a32] text-sm uppercase tracking-widest mb-4">
                  Why Choose Us
                </span>
                <h2 className="font-[family-name:var(--font-crimson-pro)] text-white text-4xl lg:text-5xl leading-tight mb-10">
                  What Sets Us Apart
                </h2>
                <ul className="space-y-5">
                  {[
                    "Startup agility + domain expertise",
                    "Tech-enabled automation for accuracy & speed",
                    "Transparent pricing for mid-segment businesses",
                    "End-to-end coverage: bookkeeping → compliance → reporting",
                    "Trusted partnership model (Accountrix + SG & Co.)",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-4 text-white/80 text-lg leading-relaxed"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#c85a32] shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — Service split table */}
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <span className="block font-bold text-[#c85a32] text-sm uppercase tracking-widest mb-4 lg:mt-16">
                  Our Service Split
                </span>
                <div className="border border-white/20 overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-2 border-b border-white/20">
                    <div className="px-6 py-4 font-bold text-white text-sm uppercase tracking-wider border-r border-white/20">
                      Accountrix Solutions
                    </div>
                    <div className="px-6 py-4 font-bold text-white text-sm uppercase tracking-wider">
                      SG &amp; Co.
                    </div>
                  </div>
                  {/* Rows */}
                  {[
                    ["Bookkeeping & Accountancy", "GST Compliance & Filings"],
                    ["Payroll Management", "Income Tax Filings"],
                    ["MIS & Financial Reportings", "Regulatory Compliances"],
                  ].map(([left, right], i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 ${i < 2 ? "border-b border-white/20" : ""}`}
                    >
                      <div className="px-6 py-5 text-white/70 text-sm border-r border-white/20">
                        {left}
                      </div>
                      <div className="px-6 py-5 text-white/70 text-sm">
                        {right}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                Industries We Serve
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#5a5854] text-lg leading-relaxed mb-2"
              >
                Tailored financial solutions designed around the specific
                operational realities of distinct sectors.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[#5a5854] text-lg leading-relaxed"
              >
                Helping SMEs, Startups, Retail, Manufacturing, and IT companies
                streamline their finances.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  img: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=800&auto=format&fit=crop&q=80",
                  label: "Consumer & Retail",
                },
                {
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
                  label: "Wholesalers & Distributors",
                },
                {
                  img: "/manf-services.webp",
                  label: "Manufacturing & Service",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="overflow-hidden aspect-[4/3] bg-gray-100 mb-4">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-xl text-center">
                    {item.label}
                  </h3>
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
                <br />
                <span className="italic text-[#c85a32] text-3xl lg:text-4xl">
                  &ldquo;Book A Free Consultation Today.&rdquo;
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#5a5854] text-lg leading-relaxed mb-12 max-w-lg"
              >
                Whether you need a full-scale audit, tax planning, or simple
                bookkeeping, we are here to support your growth.
              </motion.p>
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#c85a32] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5a5854] text-sm uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@accountrixsolutions.in"
                      className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-xl lg:text-2xl hover:text-[#c85a32] transition-colors break-all"
                    >
                      info@accountrixsolutions.in
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#c85a32] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5a5854] text-sm uppercase tracking-widest mb-1">
                      Call
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
                      Registered Address
                    </p>
                    <p className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-xl leading-relaxed">
                      <span className="font-semibold text-base">
                        Office Address:
                      </span>
                      <br />
                      404, Shree Rama Apartments, Narayanguda
                      <br />
                      Hyderabad, Telangana 500027
                    </p>
                    <p className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-xl leading-relaxed mt-4">
                      <span className="font-semibold text-base">
                        Branch Office:
                      </span>
                      <br />
                      Gadchandur Road, Rajura
                      <br />
                      Dist: Chandrapur, Maharashtra 442905
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div className="relative">
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] appearance-none focus:outline-none focus:border-[#c85a32] transition-colors"
                  >
                    <option value="" disabled>
                      Service Interested In
                    </option>
                    <option>Accounting &amp; Bookkeeping</option>
                    <option>GST Filings</option>
                    <option>Payroll</option>
                    <option>Other</option>
                  </select>
                  <ChevronRight className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[#1f1e1b] pointer-events-none rotate-90" />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#5a5854] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors resize-none"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Message sent! We&apos;ll get back to you shortly.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 px-4 py-3 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#c85a32] hover:bg-[#a64522] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-semibold text-sm uppercase py-4 tracking-wide flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
