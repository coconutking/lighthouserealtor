import { Phone, Mail, MapPin, Facebook, Instagram, Home } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="w-full section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-beige/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-beige" />
                </div>
                <div>
                  <p className="font-serif font-bold text-beige text-base leading-tight">Lighthouse</p>
                  <p className="font-sans text-[10px] text-beige/60 tracking-widest uppercase">Home Group</p>
                </div>
              </div>
              <p className="font-sans text-sm text-beige/50 leading-relaxed mb-4">
                Your trusted Clarksville real estate team. Specializing in Fort Campbell PCS relocations, first-time buyers, and sellers.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/lighthousehomegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-beige/10 flex items-center justify-center hover:bg-green transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-beige" />
                </a>
                <a
                  href="https://www.instagram.com/lighthousehomegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-beige/10 flex items-center justify-center hover:bg-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-beige" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-beige text-base mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Services', id: 'services' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="font-sans text-sm text-beige/50 hover:text-green transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-beige text-base mb-4">Services</h4>
              <ul className="space-y-2.5">
                {[
                  'Military PCS Relocation',
                  'First-Time Home Buyers',
                  'Seller Representation',
                  'New Construction',
                  'VA Loan Navigation',
                  'Investment Properties',
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollTo('services')}
                      className="font-sans text-sm text-beige/50 hover:text-green transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-beige text-base mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:931-272-8392" className="flex items-center gap-2.5 text-beige/50 hover:text-green transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="font-sans text-sm">(931) 272-8392</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:rudyvalrey@kw.com" className="flex items-center gap-2.5 text-beige/50 hover:text-green transition-colors">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="font-sans text-sm">rudyvalrey@kw.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2.5 text-beige/50">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm">
                      2271 Wilma Rudolph Blvd
                      <br />
                      Clarksville, TN 37040
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-beige/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Lighthouse Home Group. All rights reserved. Licensed in TN &amp; KY.
            </p>
            <p className="font-sans text-xs text-beige/40 text-center sm:text-right">
              Keller Williams Realty Affiliated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
