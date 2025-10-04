import logo from "@/assets/logo-header.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.05)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Arthur & Archie - Est. 1828" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-navy font-semibold text-base hover:text-terracotta transition-colors">
              Services
            </a>
            <a href="#solution" className="text-navy font-semibold text-base hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#heritage" className="text-navy font-semibold text-base hover:text-terracotta transition-colors">
              Heritage
            </a>
            <a href="#contact" className="text-navy font-semibold text-base hover:text-terracotta transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
