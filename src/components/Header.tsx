import logo from "@/assets/logo-arthur-archie.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-subtle-navy">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Arthur & Archie - Est. 1828 - Present"
              className="h-[72px] w-auto"
              loading="eager"
              decoding="sync"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#solution" className="text-navy font-semibold text-base hover:text-terracotta transition-colors">
              About
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
