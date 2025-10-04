import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Arthur & Archie" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-primary font-semibold text-base hover:text-terracotta transition-colors">
              Services
            </a>
            <a href="#solution" className="text-primary font-semibold text-base hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#heritage" className="text-primary font-semibold text-base hover:text-terracotta transition-colors">
              Heritage
            </a>
            <a href="#contact" className="text-primary font-semibold text-base hover:text-terracotta transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
