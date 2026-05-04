import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react';

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    status: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-28 bg-beige">
      <div className="w-full section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center gap-2 text-green font-sans text-xs font-semibold tracking-widest uppercase mb-4">
                <Send className="w-4 h-4" />
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy mb-5 leading-tight">
                Ready for Your
                <br />
                <span className="text-green">Next Move?</span>
              </h2>
              <p className="font-sans text-navy/70 text-base sm:text-lg leading-relaxed mb-8">
                Request your free 15-minute "Clarksville Game Plan" call. Tell us your timeline and goals — we will send you a segment-specific follow-up with everything you need to get started.
              </p>

              <div className="space-y-5">
                <a href="tel:931-272-8392" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-beige transition-all">
                    <Phone className="w-5 h-5 text-navy group-hover:text-beige transition-colors" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy/50">Call Any Time</p>
                    <p className="font-sans text-lg font-semibold text-navy group-hover:text-green transition-colors">(931) 272-8392</p>
                  </div>
                </a>

                <a href="mailto:rudyvalrey@kw.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-beige transition-all">
                    <Mail className="w-5 h-5 text-navy group-hover:text-beige transition-colors" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy/50">Email Us</p>
                    <p className="font-sans text-base font-semibold text-navy group-hover:text-green transition-colors">rudyvalrey@kw.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy/50">Office Location</p>
                    <p className="font-sans text-base font-semibold text-navy">2271 Wilma Rudolph Blvd, Clarksville, TN 37040</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-navy/50">Business Hours</p>
                    <p className="font-sans text-base font-semibold text-navy">Mon — Sun: 8:30am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-navy/5 text-center">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-3">Thank You!</h3>
                  <p className="font-sans text-navy/70 mb-2">
                    We have received your request and will get back to you within 24 hours.
                  </p>
                  <p className="font-sans text-sm text-navy/50">
                    Check your email for your Clarksville Game Plan starter materials.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-navy/5"
                >
                  <h3 className="font-serif text-xl text-navy mb-1">Request a Consultation</h3>
                  <p className="font-sans text-sm text-navy/50 mb-6">
                    Fill out the form below and we will reach out within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm font-medium text-navy mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block font-sans text-sm font-medium text-navy mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all"
                          placeholder="john@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-sans text-sm font-medium text-navy mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all"
                          placeholder="(931) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="status" className="block font-sans text-sm font-medium text-navy mb-1.5">
                          I am... *
                        </label>
                        <select
                          id="status"
                          name="status"
                          required
                          value={formData.status}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all appearance-none"
                        >
                          <option value="">Select one</option>
                          <option value="Military PCS">Military PCS / VA Buyer</option>
                          <option value="First-Time Buyer">First-Time Home Buyer</option>
                          <option value="Selling">Selling My Home</option>
                          <option value="New Construction">Buying New Construction</option>
                          <option value="Investing">Real Estate Investor</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block font-sans text-sm font-medium text-navy mb-1.5">
                          Timeline *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all appearance-none"
                        >
                          <option value="">Select one</option>
                          <option value="Immediately">Immediately</option>
                          <option value="1-3 Months">1 — 3 Months</option>
                          <option value="3-6 Months">3 — 6 Months</option>
                          <option value="6+ Months">6+ Months</option>
                          <option value="Just Researching">Just Researching</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-sans text-sm font-medium text-navy mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-beige/30 font-sans text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-all resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Request My Consultation
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-xs text-navy/40 text-center mt-4">
                    By submitting, you agree to be contacted about real estate services. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
