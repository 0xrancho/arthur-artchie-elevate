export const Footer = () => {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <h4 className="font-bold mb-4 text-cream">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Growth Audit</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">AI Enablement</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Revenue Operations Strategy</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Company</h4>
            <div className="space-y-2">
              <a href="#solution" className="block text-cream/80 hover:text-cream transition-colors">About</a>
              <a href="#heritage" className="block text-cream/80 hover:text-cream transition-colors">Heritage</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Team</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Case Studies</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Insights</a>
              <a href="#contact" className="block text-cream/80 hover:text-cream transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-cream">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">LinkedIn</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Email</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">Schedule Call</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center text-cream/80">
          <p>&copy; 2025 Arthur & Archie. Seven generations of trust-based professional services.</p>
        </div>
      </div>
    </footer>
  );
};
