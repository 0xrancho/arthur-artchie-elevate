import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "/assessment", label: "Growth Assessment" },
    { href: "/heritage", label: "Heritage" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/team", label: "Team" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-subtle-navy">
      <div className="max-w-[1200px] mx-auto px-4 py-[27px]">
        <div className="flex justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="flex flex-col">
            <h1 className="text-navy font-bold leading-none" style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '2rem' }}>
              Arthur & Archie
            </h1>
          </div>

          {/* Center tagline - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex flex-1 justify-center mx-8">
            <p className="text-navy/70 text-sm italic text-center">
              Seven generations of service excellence
            </p>
          </div>

          {/* Hamburger Menu - Right aligned */}
          <button
            className="flex flex-col gap-1.5 p-2"
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

        {/* Menu */}
        {mobileMenuOpen && (
          <nav className="mt-6 pb-4 border-t border-border pt-4">
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
