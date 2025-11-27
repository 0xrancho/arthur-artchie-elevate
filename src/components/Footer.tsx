interface FooterProps {
  compact?: boolean;
}

export const Footer = ({ compact = false }: FooterProps) => {
  if (compact) {
    return (
      <footer className="bg-navy text-cream py-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-white font-bold" style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '1.25rem' }}>
              Arthur & Archie
            </h2>
            <a href="mailto:hello@arthurandarchie.com" className="text-cream/80 hover:text-cream transition-colors text-sm">
              hello@arthurandarchie.com
            </a>
            <p className="text-cream/60 text-sm">
              &copy; 2025 Arthur & Archie
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-navy text-cream py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-white font-bold mb-4" style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '1.75rem' }}>
              Arthur & Archie
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed">
              Seven generations of trust-based professional services excellence.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#solution" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  Trust-Based Growth Analysis
                </a>
              </li>
              <li>
                <a href="/#solution" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  Campaign Execution Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/heritage" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  Heritage
                </a>
              </li>
              <li>
                <a href="/team" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="/faq" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@arthurandarchie.com" className="text-cream/80 hover:text-cream transition-colors text-sm">
                  hello@arthurandarchie.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <p className="text-cream/60 text-sm text-center">
            &copy; 2025 Arthur & Archie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
