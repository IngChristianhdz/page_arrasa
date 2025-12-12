import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import Certifications from '@/react-app/components/Certifications';
import About from '@/react-app/components/About';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
