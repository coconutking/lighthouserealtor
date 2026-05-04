import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full section-padding flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
            aria-label="Lighthouse Home Group - Back to top"
          >
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
              <span className="text-beige font-serif font-bold text-lg">LH</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-serif font-bold text-base leading-tight transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
                Lighthouse
              </p>
              <p className={`text-[10px] font-sans font-medium tracking-widest uppercase transition-colors ${isScrolled ? 'text-navy/70' : 'text-white/80'}`}>
                Home Group
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-sans text-sm font-medium transition-colors hover:text-green ${
                  isScrolled ? 'text-navy' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:931-272-8392"
              className={`hidden sm:flex items-center gap-2 font-sans text-sm font-semibold transition-colors ${
                isScrolled ? 'text-navy hover:text-green' : 'text-white hover:text-white/80'
              }`}
              aria-label="Call us at 931-272-8392"
            >
              <Phone className="w-4 h-4" />
              <span>(931) 272-8392</span>
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex btn-primary text-xs px-4 py-2.5"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg animate-fade-in lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-serif text-2xl text-beige hover:text-green transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:931-272-8392"
              className="flex items-center gap-2 text-beige font-sans text-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              (931) 272-8392
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary mt-4"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
