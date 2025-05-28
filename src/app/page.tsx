import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import CompetitorComparison from '@/components/sections/CompetitorComparison';
import WhyMe from '@/components/sections/WhyMe';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import { AppProvider } from '@/contexts/AppContext';

/**
 * Landing page component that renders all sections
 */
export default function Home() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <CompetitorComparison />
          <About />
          <WhyMe />
          <Work />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
