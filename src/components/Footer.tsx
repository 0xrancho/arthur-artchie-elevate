export const Footer = () => {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-row items-center justify-between gap-4">
          <h2 className="text-white font-bold whitespace-nowrap" style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: '1.35rem' }}>
            Arthur &<br />Archie
          </h2>
          <p className="text-cream opacity-80 text-right text-xs md:text-base">&copy; 2025 Arthur & Archie. Seven generations of trust-based professional services.</p>
        </div>
      </div>
    </footer>
  );
};
