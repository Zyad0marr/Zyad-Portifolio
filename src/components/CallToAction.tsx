import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CallToAction: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white border border-[#e5e3dc] dark:bg-[#131b2e] dark:border-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center transition-colors duration-300"
        >
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff6ff] dark:bg-[#1a2642] border border-blue-200 dark:border-blue-900/50 text-xs font-semibold text-[#2563eb] dark:text-[#3b82f6] mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Software Testing & Quality</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-5 max-w-2xl mx-auto">
            {PERSONAL_INFO.ctaHeading}
          </h2>

          {/* Body Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#475569] dark:text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto mb-8">
            {PERSONAL_INFO.ctaText}
          </p>

          {/* Clear & Professional CTA Button */}
          <div className="flex justify-center">
            <a
              id="btn-test-software"
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] rounded-xl transition-all shadow-[0_2px_10px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{PERSONAL_INFO.ctaButtonText}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
