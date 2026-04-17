"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(249,248,246,0.95)] border-b border-[#e5e2db] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/AccountrixLogo1.png"
            alt="Accountrix Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors"
          >
            About Us
          </Link>

          <div className="relative group py-2">
            <Link
              href="/services"
              className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors flex items-center gap-1"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70 group-hover:rotate-180 transition-transform duration-200"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#f9f8f6] shadow-xl border border-[#e5e2db] rounded-sm overflow-hidden flex flex-col">
                {[
                  {
                    label: "Accounting & Bookkeeping",
                    path: "/services#accounting",
                  },
                  {
                    label: "GST Filings & Compliances",
                    path: "/services#gst-filings",
                  },
                  {
                    label: "Financial Reporting & MIS",
                    path: "/services#financial-reporting",
                  },
                  { label: "Payroll Management", path: "/services#payroll" },
                  { label: "Direct & Indirect Taxes", path: "/services#taxes" },
                  { label: "Business Advisory", path: "/services#advisory" },
                ].map((service) => (
                  <Link
                    key={service.label}
                    href={service.path}
                    className="block px-4 py-3 text-sm text-[#5a5854] hover:bg-[#c85a32] hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/news"
            className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors"
          >
            News & Blogs
          </Link>
          <Link
            href="/contact"
            className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors"
          >
            Contact Us
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-6 py-3 tracking-wide"
        >
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
