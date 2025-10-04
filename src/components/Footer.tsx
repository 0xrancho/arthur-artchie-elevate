import logo from "@/assets/logo-footer.png";

export const Footer = () => {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <img src={logo} alt="Arthur & Archie - Est. 1828" className="h-16 w-auto" />
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <h4 className="font-bold mb-4 text-cream">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Growth Audit</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">AI Enablement</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Revenue Operations Strategy</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Company</h4>
            <div className="space-y-2">
              <a href="#solution" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">About</a>
              <a href="#heritage" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Heritage</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Team</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Case Studies</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Insights</a>
              <a href="#contact" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Email</a>
              <a href="#" className="block text-cream opacity-80 hover:opacity-100 transition-opacity">Schedule Call</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center text-cream opacity-80">
          <p>&copy; 2025 Arthur & Archie. Seven generations of trust-based professional services.</p>
        </div>
      </div>
    </footer>
  );
};
