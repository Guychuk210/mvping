import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyMe from '@/components/sections/WhyMe';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

/**
 * Landing page component that renders all sections
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyMe />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
