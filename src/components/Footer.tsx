import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#141311] text-white pt-20 pb-10 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        <div className="lg:col-span-4 space-y-6 lg:pr-8">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/AccountrixLogo1.png"
              alt="Accountrix Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Smart Accounting, Simple Solutions. We provide clarity, compliance,
            and confidence for growing businesses.
          </p>
          <div className="inline-flex items-center gap-2 border border-gray-700 px-3 py-1">
            <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">
              Est. 2025
            </span>
            <span className="w-1 h-1 bg-[#c85a32] rounded-full" />
            <span className="font-bold text-gray-400 text-xs uppercase tracking-widest">
              Partner of SG & Co.
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h4 className="font-[family-name:var(--font-crimson-pro)] text-xl">
            Quick Links
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#news"
                className="hover:text-white transition-colors"
              >
                News & Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-[family-name:var(--font-crimson-pro)] text-xl">
            Our Services
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Accounting & Bookkeeping
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                GST Filings
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Financial Reporting
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Payroll Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-[family-name:var(--font-crimson-pro)] text-xl">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a
                href="mailto:info@accountrixsolutions.in"
                className="hover:text-white transition-colors"
              >
                info@accountrixsolutions.in
              </a>
            </li>
            <li>+91 7276535406</li>
            <li className="leading-relaxed">
              Gadchandur Road, Rajura,
              <br />
              Chandrapur, Maharashtra
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Accountrix Solutions. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-4 text-center text-sm text-gray-500">
        Designed &amp; Developed By{" "}
        <a
          href="https://tech-daddy.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Tech Daddy Global Solutions
        </a>
      </div>
    </footer>
  );
}
