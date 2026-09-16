import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Database, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Database: <Database className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Code2: <Code2 className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#e8e6df] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#3b82f6] uppercase mb-2"
          >
            Skills & Learning Focus
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-3"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-sm md:text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed"
          >
            Core testing competencies, API and data verification basics, and programming fundamentals I am actively practicing.
          </motion.p>
        </div>

        {/* 3 Structured Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc] dark:bg-[#131b2e] dark:border-[#1e293b] flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e2e8f0] dark:bg-[#1a233a] dark:border-[#26334a] flex items-center justify-center shrink-0">
                    {iconMap[cat.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] dark:text-[#f8fafc] tracking-tight">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-xs font-semibold text-[#1e293b] dark:bg-[#1a233a] dark:border-[#26334a] dark:text-[#e2e8f0] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#eeece6] dark:border-[#1e293b] flex items-center justify-between text-[11px] text-[#64748b] dark:text-[#94a3b8]">
                <span>{cat.skills.length} competencies</span>
                <span className="font-semibold text-[#2563eb] dark:text-[#3b82f6]">Hands-on Practice</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
