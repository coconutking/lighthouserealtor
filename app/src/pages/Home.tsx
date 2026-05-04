import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import LeadCapture from '../sections/LeadCapture';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
