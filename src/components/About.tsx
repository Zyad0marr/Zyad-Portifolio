import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-8"
        >
          About
        </motion.h2>

        {/* Stacked Text Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          className="space-y-6 text-base sm:text-lg text-[#334155] dark:text-[#cbd5e1] leading-relaxed"
        >
          <p>
            {PERSONAL_INFO.aboutParagraph1}
          </p>
          <p>
            {PERSONAL_INFO.aboutParagraph2}
          </p>
          <p>
            {PERSONAL_INFO.aboutParagraph3}
          </p>
          <p>
            {PERSONAL_INFO.aboutParagraph4}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
