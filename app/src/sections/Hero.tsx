import { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Shield, Clock } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const parallax = scrollY * 0.4;
        imageRef.current.style.transform = `translateY(${parallax}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Clarksville Tennessee neighborhood aerial view"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(21,30,61,0.85) 0%, rgba(21,30,61,0.55) 35%, rgba(21,30,61,0.55) 65%, rgba(21,30,61,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full section-padding pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <MapPin className="w-4 h-4" style={{ color: '#a8d4b3' }} />
            <span
              className="text-white font-sans text-sm tracking-wider uppercase"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
            >
              Clarksville, TN & Fort Campbell, KY
            </span>
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-beige leading-[1.1] mb-6 animate-fade-in-up"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.4)' }}
          >
            Find Your Home
            <br />
            <span style={{ color: '#a8d4b3' }}>Near Fort Campbell</span>
          </h1>

          <p
            className="font-sans text-base sm:text-lg text-white max-w-xl mx-auto mb-4 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.1s', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            PCS relocation? First-time buyer? Selling your home? Lighthouse Home Group makes every move seamless.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              <Shield className="w-4 h-4" style={{ color: '#a8d4b3' }} />
              <span className="text-sm font-sans">VA Loan Experts</span>
            </div>
            <div className="flex items-center gap-2 text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              <Clock className="w-4 h-4" style={{ color: '#a8d4b3' }} />
              <span className="text-sm font-sans">Fast Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              <MapPin className="w-4 h-4" style={{ color: '#a8d4b3' }} />
              <span className="text-sm font-sans">Since 2008</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto px-8 py-4 text-base">
              Get Your Free Consultation
            </button>
            <button onClick={scrollToServices} className="btn-secondary w-full sm:w-auto px-8 py-4 text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Explore Our Services
            </button>
          </div>

          <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="tel:931-272-8392"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-sans text-sm transition-colors"
            >
              Or call us directly: <span className="text-white font-semibold underline underline-offset-2">(931) 272-8392</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down to services"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
