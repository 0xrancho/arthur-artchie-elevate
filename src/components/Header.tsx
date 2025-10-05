import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#solution", label: "About" },
    { href: "#heritage", label: "Heritage" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-subtle-navy">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="flex items-center gap-4">
            <img
              src="/Gemini_AAlogo2.png"
              alt="Arthur & Archie - Est. 1828 - Present"
              className="h-[72px] w-auto"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy font-semibold text-base hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Menu - Right aligned */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-navy rounded-full"></span>
                <span className="w-6 h-0.5 bg-navy rounded-full"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-navy font-semibold text-base hover:text-terracotta transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
