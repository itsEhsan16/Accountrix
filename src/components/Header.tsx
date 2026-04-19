"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const serviceLinks = [
  { label: "Accounting & Bookkeeping", path: "/services#accounting" },
  { label: "GST Filings & Compliances", path: "/services#gst-filings" },
  { label: "Financial Reporting & MIS", path: "/services#financial-reporting" },
  { label: "Payroll Management", path: "/services#payroll" },
  { label: "Direct & Indirect Taxes", path: "/services#taxes" },
  { label: "Business Advisory", path: "/services#advisory" },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesExpanded(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(249,248,246,0.95)] border-b border-[#e5e2db] transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobile}
          >
            <Image
              src="/short-logo.png"
              alt="Accountrix Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors"
            >
              Home
            </Link>
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
                  {serviceLinks.map((service) => (
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
              Insights
            </Link>
            <Link
              href="/contact"
              className="font-medium text-[#5a5854] hover:text-[#c85a32] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-6 py-3 tracking-wide"
            >
              Get Free Consultation
            </Link>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-[#1f1e1b] transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1f1e1b] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1f1e1b] transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-[#f9f8f6] shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e2db]">
            <Link href="/" onClick={closeMobile}>
              <Image
                src="/AccountrixLogo1.png"
                alt="Accountrix Logo"
                width={100}
                height={34}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={closeMobile}
              className="w-9 h-9 flex items-center justify-center text-[#5a5854] hover:text-[#c85a32] transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            <Link
              href="/"
              onClick={closeMobile}
              className="block py-3 font-semibold text-[#1f1e1b] hover:text-[#c85a32] transition-colors border-b border-[#e5e2db]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobile}
              className="block py-3 font-semibold text-[#1f1e1b] hover:text-[#c85a32] transition-colors border-b border-[#e5e2db]"
            >
              About Us
            </Link>

            {/* Services accordion */}
            <div className="border-b border-[#e5e2db]">
              <button
                onClick={() => setServicesExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between py-3 font-semibold text-[#1f1e1b] hover:text-[#c85a32] transition-colors"
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
                  className={`transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {servicesExpanded && (
                <div className="pb-2 pl-4 space-y-1">
                  <Link
                    href="/services"
                    onClick={closeMobile}
                    className="block py-2 text-sm font-semibold text-[#c85a32] hover:text-[#a64522] transition-colors"
                  >
                    All Services
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      href={service.path}
                      onClick={closeMobile}
                      className="block py-2 text-sm text-[#5a5854] hover:text-[#c85a32] transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/news"
              onClick={closeMobile}
              className="block py-3 font-semibold text-[#1f1e1b] hover:text-[#c85a32] transition-colors border-b border-[#e5e2db]"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block py-3 font-semibold text-[#1f1e1b] hover:text-[#c85a32] transition-colors border-b border-[#e5e2db]"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-[#e5e2db]">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block text-center bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-6 py-4 tracking-wide"
            >
              Get Free Consultation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
