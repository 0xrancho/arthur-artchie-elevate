import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const StickyFooterBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~600px (roughly past the hero)
      const scrollY = window.scrollY;
      const threshold = 600;

      // Hide when near the bottom (within 300px of footer)
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const nearBottom = scrollY + windowHeight > documentHeight - 300;

      setIsVisible(scrollY > threshold && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-navy border-t border-cream/10 py-3 px-6 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-sm text-cream/90 text-center md:text-left">
          See how trust intelligence works on your accounts
        </span>
        <Link to="/assessment" className="text-cyan-400 font-semibold text-sm hover:underline transition-all">
          Try the Growth Assessment! →
        </Link>
      </div>
    </div>
  );
};
