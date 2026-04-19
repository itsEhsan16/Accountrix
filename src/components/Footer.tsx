import Link from "next/link";
import Image from "next/image";

const logoShineStyle = `
  @keyframes logo-shine {
    0%   { transform: translateX(-120%) skewX(-20deg); }
    100% { transform: translateX(220%) skewX(-20deg); }
  }
  .logo-badge-shine::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 45%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    transform: translateX(-120%) skewX(-20deg);
    pointer-events: none;
  }
  .logo-badge:hover .logo-badge-shine::after {
    animation: logo-shine 0.55s ease forwards;
  }
`;

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: logoShineStyle }} />
    <footer className="bg-[#141311] text-white pt-20 pb-10 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        <div className="lg:col-span-4 space-y-6 lg:pr-8">
          <Link href="/" className="logo-badge flex items-center gap-2 w-fit">
            {/* Slanted white badge with sliding shine on hover */}
            <div
              className="logo-badge-shine relative inline-flex items-center justify-center overflow-hidden px-5 py-2"
              style={{
                clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)",
                background: "#ffffff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.8) inset",
              }}
            >
              <Image
                src="/AccountrixLogo1 1 [Vectorized].svg"
                alt="Accountrix Logo"
                width={130}
                height={44}
                className="relative h-11 w-auto"
              />
            </div>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Smart Accounting, Simple Solutions. We provide clarity, compliance,
            and confidence for growing businesses.
          </p>
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
              <Link href="/news" className="hover:text-white transition-colors">
                Insights
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
                GST Filings & Compliance
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
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Direct & Indirect Taxes
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-white transition-colors"
              >
                Business Advisory
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
            <li className="leading-relaxed">Hyderabad, India</li>
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
    </>
  );
}
