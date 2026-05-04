import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: 'Since 1993', label: 'Full-Time REALTOR', icon: Clock },
  { value: 'Broker', label: 'Licensed Since 1996', icon: Award },
  { value: 'TN & KY', label: 'Dual-State Licensed', icon: MapPin },
  { value: 'ABR · CRS · GRI', label: 'Top Designations', icon: Users },
];

const trustPoints = [
  'Full-time REALTOR since 1993, licensed broker since 1996',
  'Licensed in both Tennessee and Kentucky for seamless cross-state moves',
  'ABR, CRS, and GRI designations — the highest tier of REALTOR credentials',
  'Three-year Board of Directors member, Clarksville Association of REALTORS',
  'Chaired Ethics, Grievance, and Community Realtor committees',
  'Army veteran serving Fort Campbell military families with PCS expertise',
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-28 bg-navy overflow-hidden">
      <div className="w-full section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center gap-2 text-green font-sans text-xs font-semibold tracking-widest uppercase mb-4">
                <Star className="w-4 h-4" />
                About Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-beige mb-6 leading-tight">
                Guided by Local
                <br />
                <span className="text-green">Expertise & Trust</span>
              </h2>
              <p className="font-sans text-beige/80 text-base sm:text-lg leading-relaxed mb-8">
                Betty and Rudy Valrey have helped Clarksville families and Fort Campbell military households buy and sell homes since 1993. Born in Japan and a veteran of both the Air Force Reserve and the Army, Rudy brings a UC Berkeley economics background and real military experience to every PCS, first-time purchase, and sale.
              </p>

              <div className="space-y-3 mb-8">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm sm:text-base text-beige/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <Icon className="w-5 h-5 text-green mb-2" />
                      <p className="font-serif text-xl sm:text-2xl text-beige font-bold">{stat.value}</p>
                      <p className="font-sans text-xs text-beige/50 mt-1">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/betty-rudy.webp"
                  alt="Betty and Rudy Valrey - Lighthouse Home Group real estate agents in Clarksville TN"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/10" />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl p-4 sm:p-5 shadow-xl border border-navy/5 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-green text-green" />
                  ))}
                </div>
                <p className="font-sans text-xs text-navy/70 leading-relaxed">
                  "We will always do our best for our clients. We will always try and handle every question or concern in a timely manner."
                </p>
                <p className="font-sans text-xs font-semibold text-navy mt-2">— Rudy Valrey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
