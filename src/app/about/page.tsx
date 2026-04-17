"use client";

import { motion } from "framer-motion";
import { Lock, Eye, ShieldCheck, TrendingUp } from "lucide-react";
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

export default function About() {
  return (
    <div className="relative bg-[#f9f8f6] selection:bg-[#c85a32] selection:text-white">
      {/* Section 1: Hero Banner */}
      <section className="relative px-6 lg:px-12 py-24 lg:py-32 overflow-hidden bg-[#1f1e1b] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Office setting"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-[family-name:var(--font-crimson-pro)] text-5xl lg:text-7xl mb-6"
          >
            Your Trusted Strategic Advisors.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-light"
          >
            We don't just crunch numbers; we illuminate the path to your
            business growth.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/#contact"
              className="inline-flex bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Our Story & Mission */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
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
              Empowering Businesses Since 2025
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-[#5a5854] text-lg leading-relaxed mb-8"
            >
              <p>
                Founded in Rajura, Maharashtra, Accountrix Solutions was built
                on a simple premise: businesses deserve financial clarity
                without the complexity. Navigating the regulatory landscape of
                today's market requires more than just basic bookkeeping—it
                requires a strategic partner.
              </p>
            </motion.div>
            <motion.blockquote
              variants={fadeInUp}
              className="border-l-4 border-[#c85a32] pl-6 py-2"
            >
              <p className="font-[family-name:var(--font-crimson-pro)] text-[#c85a32] text-xl italic font-medium leading-relaxed">
                "Our mission goes beyond basic bookkeeping. We aim to be your
                strategic advisors, ensuring compliance, optimizing tax
                structures, and providing the clarity needed to make confident
                business decisions."
              </p>
            </motion.blockquote>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/3] bg-gray-200 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Accountrix Solutions Story"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3: The SG & Co. Partnership */}
      <section className="bg-[#1f1e1b] text-white px-6 lg:px-12 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block border border-white/20 px-4 py-2 font-bold text-[#c85a32] text-sm uppercase tracking-widest"
          >
            SG & Co. Strategic Brand Partner
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-crimson-pro)] text-4xl lg:text-5xl leading-tight"
          >
            Uncompromising Expertise, <br className="hidden md:block" />
            Backed by SG & Company
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Through our strategic brand partnership with SG & Company,
            Accountrix Solutions brings top-tier financial acumen directly to
            growing businesses. This collaboration allows us to combine deep,
            localized knowledge of Maharashtra's market dynamics with the
            expansive resources and unmatched regulatory expertise of a premier
            financial institution.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 4: Our Core Values */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight"
            >
              The Foundations of Our Practice
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Lock,
                title: "100% Confidentiality",
                desc: "Your data security is our highest priority. We employ uncompromising standards to ensure your financial information remains strictly confidential.",
              },
              {
                icon: Eye,
                title: "Unmatched Clarity",
                desc: "We transform complex ledgers and tax codes into transparent, actionable insights you can actually understand.",
              },
              {
                icon: ShieldCheck,
                title: "Strict Compliance",
                desc: "From GST to ITR, we keep you perfectly aligned with statutory requirements so you can operate with total peace of mind.",
              },
              {
                icon: TrendingUp,
                title: "Client-Centric Growth",
                desc: "“Our team, clients, and shareholders are at the center of everything we do.” Your sustainable, profitable growth is our ultimate metric of success.",
              },
            ].map((Value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-[#e5e2db] p-10 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#faf3f0] flex items-center justify-center text-[#c85a32] mb-6">
                  <Value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl mb-4">
                  {Value.title}
                </h3>
                <p className="text-[#5a5854] leading-relaxed">{Value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Leadership / The Team */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-4xl lg:text-5xl leading-tight mb-6"
            >
              Meet the Experts
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#5a5854] text-lg max-w-2xl mx-auto"
            >
              A brief introduction to the financial advisors and operational
              directors driving Accountrix Solutions forward.
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
                name: "Placeholder Name 1",
                role: "Lead Chartered Accountant",
                bio: "With over 15 years of statutory compliance experience, they ensure strict precision in all business reporting.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Placeholder Name 2",
                role: "Financial Advisor",
                bio: "Specializing in tax optimization and structures, providing clients with actionable paths to greater profitability.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Placeholder Name 3",
                role: "Operational Director",
                bio: "Focused on seamless client integration and overseeing the delivery of accurate, timely financial solutions.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
              },
            ].map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={member.img}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-crimson-pro)] text-[#1f1e1b] text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="font-bold text-[#c85a32] text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-[#5a5854] leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="bg-[#c85a32] px-6 lg:px-12 py-24 lg:py-32 text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-crimson-pro)] text-4xl lg:text-5xl leading-tight mb-6"
          >
            Ready to Simplify Your Accounting?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/90 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Whether you need comprehensive financial reporting,{" "}
            <Link
              href="/#services"
              className="underline underline-offset-4 font-medium hover:text-[#1f1e1b] transition-colors"
            >
              seamless GST filings
            </Link>
            , or strategic business advisory, Accountrix Solutions is here to
            support your journey.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/#contact"
              className="inline-block bg-[#1f1e1b] hover:bg-[#141311] transition-colors text-white font-semibold text-sm uppercase px-10 py-5 tracking-wide"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
