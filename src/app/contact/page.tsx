"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import {
  contactInfo,
  officeHours,
  faqItems,
  serviceOptions,
} from "@/data/contact";

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

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e2db]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-lg lg:text-xl group-hover:text-[#c85a32] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[#c85a32]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#5a5854] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative bg-[#f9f8f6] selection:bg-[#c85a32] selection:text-white">
      {/* ── Hero Banner ── */}
      <section className="relative px-6 lg:px-12 py-24 lg:py-32 overflow-hidden bg-[#1f1e1b] text-white">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Link
              href="/"
              className="font-medium text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-[#c85a32] font-medium text-sm">
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-[family-name:var(--font-crimson-pro)] text-5xl lg:text-7xl mb-6"
          >
            Let&apos;s Start a{" "}
            <span className="italic font-medium text-[#c85a32]">
              Conversation.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-light"
          >
            Have a question or ready to simplify your finances? We&apos;d love
            to hear from you.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide"
            >
              Send Us a Message
              <Send className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section
        ref={formSectionRef}
        className="px-6 lg:px-12 py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info cards, social, hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeInUp}>
                <span className="font-bold text-[#c85a32] text-sm uppercase tracking-widest">
                  Reach Us
                </span>
                <h2 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mt-2 mb-6">
                  We&apos;re Here to Help You Grow.
                </h2>
                <p className="text-[#5a5854] leading-relaxed">
                  Reach out through any channel below or fill in the form. Our
                  team responds within one business day.
                </p>
              </motion.div>

              {/* Info cards */}
              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-5 h-5 text-[#c85a32]" />,
                    label: "Email Us",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-[#c85a32]" />,
                    label: "Call Us",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-[#c85a32]" />,
                    label: "Visit Us",
                    value: contactInfo.address,
                    href: "https://maps.app.goo.gl/rajura",
                  },
                ].map(({ icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label === "Visit Us" ? "_blank" : undefined}
                    rel={
                      label === "Visit Us" ? "noopener noreferrer" : undefined
                    }
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-[#faf3f0] border border-[#e5e2db] p-5 group hover:border-[#c85a32] transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 bg-white flex items-center justify-center border border-[#e5e2db] group-hover:border-[#c85a32] transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1f1e1b] text-sm uppercase tracking-wide mb-1">
                        {label}
                      </p>
                      <p className="text-[#5a5854] text-sm leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social media */}
              <motion.div variants={fadeInUp}>
                <p className="font-semibold text-[#1f1e1b] text-sm uppercase tracking-wide mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      platform: "LinkedIn",
                      url: "https://linkedin.com/company/accountrix-solutions",
                      icon: "linkedin",
                    },
                    {
                      platform: "Twitter / X",
                      url: "https://twitter.com/accountrix",
                      icon: "twitter",
                    },
                    {
                      platform: "Instagram",
                      url: "https://instagram.com/accountrix",
                      icon: "instagram",
                    },
                    {
                      platform: "Facebook",
                      url: "https://facebook.com/accountrix",
                      icon: "facebook",
                    },
                  ].map(({ platform, url, icon }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className="w-10 h-10 flex items-center justify-center border border-[#e5e2db] text-[#5a5854] hover:bg-[#c85a32] hover:text-white hover:border-[#c85a32] transition-colors"
                    >
                      {socialIcons[icon]}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Office hours */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#c85a32]" />
                  <p className="font-semibold text-[#1f1e1b] text-sm uppercase tracking-wide">
                    Office Hours
                  </p>
                </div>
                <div className="space-y-3">
                  {officeHours.map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between border-b border-[#e5e2db] pb-3 last:border-0"
                    >
                      <span className="text-[#5a5854] text-sm">{day}</span>
                      <span
                        className={`text-sm font-medium ${
                          hours === "Closed"
                            ? "text-[#c85a32]"
                            : "text-[#1f1e1b]"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#f9f8f6] border border-[#e5e2db] p-8 md:p-12"
            >
              <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-3xl mb-2">
                Send a Message
              </h3>
              <p className="text-[#5a5854] text-sm mb-8">
                Fill in the form and we&apos;ll get back to you within one
                business day.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors"
                  />
                </div>
                <div className="relative">
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] appearance-none focus:outline-none focus:border-[#c85a32] transition-colors"
                  >
                    <option value="" disabled>
                      Service Interested In
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[#1f1e1b] pointer-events-none" />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-[#5a5854] py-3 text-[#1f1e1b] placeholder:text-[#5a5854] focus:outline-none focus:border-[#c85a32] transition-colors resize-none"
                  />
                </div>

                {/* Status messages */}
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
                      Something went wrong. Please try again or email us
                      directly.
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2">
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
                        Sending…
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
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="px-6 lg:px-12 pb-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-sm border border-[#e5e2db]"
          >
            <iframe
              title="Accountrix Solutions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9853286282074!2d79.37946397503!3d19.99168952148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2de1cbb0d89f5%3A0x7e1ef9c7c8d5f2d1!2sRajura%2C%20Maharashtra%20442905!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="font-bold text-[#c85a32] text-sm uppercase tracking-widest"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mt-2"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#5a5854] mt-4 text-lg max-w-2xl mx-auto"
            >
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              us directly.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="border-t border-[#e5e2db]">
              {faqItems.map((item) => (
                <motion.div key={item.question} variants={fadeInUp}>
                  <FaqItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="px-6 lg:px-12 py-20 bg-[#1f1e1b] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="font-bold text-[#c85a32] text-sm uppercase tracking-widest"
          >
            Get Started Today
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-crimson-pro)] text-4xl lg:text-5xl mt-2 mb-4"
          >
            Ready to Simplify Your Accounting?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg mb-10 max-w-xl mx-auto"
          >
            Join businesses that trust Accountrix Solutions to handle their
            finances with precision and care.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToForm}
              className="bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide"
            >
              Send Us a Message
            </button>
            <Link
              href="/services"
              className="border border-white hover:bg-white transition-colors hover:text-[#1f1e1b] text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
