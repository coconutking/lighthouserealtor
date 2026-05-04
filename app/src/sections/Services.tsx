import { useEffect, useRef, useState } from 'react';
import { Home, Shield, TrendingUp, Building2, KeyRound, Download, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'military-pcs',
    icon: Shield,
    title: 'Military PCS & VA Buyers',
    description: 'Moving to Fort Campbell? Get a home plan before you arrive. We understand tight timelines and VA loan complexity.',
    image: '/images/military-pcs.jpg',
    cta: 'Get PCS Checklist',
    leadMagnet: 'Fort Campbell PCS Homebuyer Checklist',
    features: ['VA-friendly home search', 'Neighborhood shortlist', 'Commute mapping', 'Pre-arrival video tours'],
  },
  {
    id: 'first-time-buyer',
    icon: KeyRound,
    title: 'First-Time Home Buyers',
    description: 'Buying your first Clarksville home does not have to be confusing. We guide you from pre-approval to closing.',
    image: '/images/first-time-buyer.jpg',
    cta: 'Get Starter Kit',
    leadMagnet: 'Clarksville First-Time Buyer Starter Kit',
    features: ['Affordability guide', 'Loan options explained', 'Step-by-step timeline', 'Lender pre-approval handoff'],
  },
  {
    id: 'home-selling',
    icon: TrendingUp,
    title: 'Sell Your Home Fast',
    description: 'Find out what your Clarksville home could sell for this month. Same-day estimate plus net proceeds breakdown.',
    image: '/images/home-selling.jpg',
    cta: 'Get Pricing Report',
    leadMagnet: 'Clarksville Seller Pricing Report',
    features: ['Same-day CMA', 'Net proceeds breakdown', 'Prep checklist', 'Marketing plan'],
  },
  {
    id: 'new-construction',
    icon: Building2,
    title: 'New Construction',
    description: 'Compare Clarksville builders before you sign. We help navigate contracts, incentives, and hidden costs.',
    image: '/images/new-construction.jpg',
    cta: 'Get Buyer Guide',
    leadMagnet: 'Clarksville New Construction Buyer Guide',
    features: ['Builder comparison tours', 'Contract review guidance', 'Incentive analysis', 'Inspection tips'],
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = (serviceId: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const select = document.getElementById('status') as HTMLSelectElement | null;
      if (select) {
        const mapping: Record<string, string> = {
          'military-pcs': 'Military PCS',
          'first-time-buyer': 'First-Time Buyer',
          'home-selling': 'Selling',
          'new-construction': 'New Construction',
        };
        setTimeout(() => {
          select.value = mapping[serviceId] || '';
        }, 500);
      }
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-beige">
      <div className="w-full section-padding">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-green font-sans text-xs font-semibold tracking-widest uppercase mb-4">
            <Home className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy mb-5">
            Services Tailored to You
          </h2>
          <p className="font-sans text-navy/70 text-base sm:text-lg leading-relaxed">
            Whether you are PCSing to Fort Campbell, buying your first home, or selling to upgrade, we have a specialized plan for your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(i);
            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[i] = el; }}
                data-index={i}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-navy/5 card-hover ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/30" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-navy/60 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-navy/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
                        <span className="font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => scrollToContact(service.id)}
                      className="btn-primary text-xs px-5 py-3 flex-1 justify-center"
                    >
                      <Download className="w-3.5 h-3.5 mr-2" />
                      {service.cta}
                    </button>
                    <button
                      onClick={() => scrollToContact(service.id)}
                      className="btn-secondary text-xs px-5 py-3 flex-1 justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
