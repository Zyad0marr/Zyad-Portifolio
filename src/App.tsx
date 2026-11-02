import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Cover } from './components/Cover';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { OfferedServices } from './components/OfferedServices';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('cover');

  useEffect(() => {
    const sectionIds = [
      'cover',
      'about',
      'skills',
      'services',
      'projects',
      'contact'
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col font-['Manrope',sans-serif]">
      {/* Sticky Minimalist Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Cover />
        <About />
        <Skills />
        <OfferedServices />
        <Projects />
        <CallToAction />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
