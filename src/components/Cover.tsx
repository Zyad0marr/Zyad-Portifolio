import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Cover: React.FC = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 px-6 md:px-10 relative overflow-hidden bg-[#faf9f6] dark:bg-[#0b0f19] transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
              <span className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#3b82f6] uppercase">
                {PERSONAL_INFO.roleLabel}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-3"
            >
              {PERSONAL_INFO.coverGreeting}
            </motion.h1>

            {/* Large Secondary Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: 'easeOut' }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e293b] dark:text-[#e2e8f0] tracking-tight leading-snug mb-5"
            >
              {PERSONAL_INFO.coverSecondaryHeading}
            </motion.h2>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="text-base md:text-lg text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-xl mb-8 font-normal"
            >
              {PERSONAL_INFO.coverIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                id="hero-about-button"
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#f8fafc] dark:text-[#0f172a] dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <span>About Me</span>
                <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              </button>

              <button
                type="button"
                id="hero-contact-button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0f172a] bg-white hover:bg-[#f5f4ef] border border-[#d6d3c9] dark:bg-[#131b2e] dark:border-[#1e293b] dark:text-[#f8fafc] dark:hover:bg-[#1a233a] rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6]" />
                <span>Contact Me</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Uploaded Personal Photo in Simple Rounded Rectangle Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Natural frame: Simple rounded rectangle frame with subtle border */}
              <div className="rounded-2xl overflow-hidden border border-[#e5e3dc] dark:border-[#1e293b] bg-white dark:bg-[#131b2e] shadow-[0_4px_24px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] aspect-[4/5] relative">
                <img
                  src="/ziad-omar.jpg"
                  alt="Ziad Omar - Software Tester"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Minimal honest caption tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#64748b] dark:text-[#94a3b8] px-1 font-medium">
                <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc]">Ziad Omar</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#2563eb] dark:text-[#3b82f6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
                  Available for QA Roles
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
