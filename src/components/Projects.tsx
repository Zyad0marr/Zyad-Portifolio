import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, Layers, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#3b82f6] uppercase">
              Practical Portfolio
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-[11px] font-semibold text-amber-800 dark:text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              In Progress
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight"
          >
            Projects (In Progress)
          </motion.h2>
        </div>

        {/* Visually clean, professional in-progress card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
          className="p-8 sm:p-10 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc] dark:bg-[#131b2e] dark:border-[#1e293b] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors duration-300"
        >
          {/* Subtle In Progress Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1a233a] border border-[#e2e8f0] dark:border-[#26334a] text-xs font-semibold text-[#0f172a] dark:text-[#f8fafc] mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Status: In Progress</span>
          </div>

          {/* Exact Requested Professional Statement */}
          <p className="text-lg sm:text-xl font-medium text-[#0f172a] dark:text-[#f8fafc] leading-relaxed mb-8">
            Projects are currently in progress. I’m building practical projects as I continue developing my Software Testing and technical skills. More projects will be added soon.
          </p>

          {/* Clean overview of hands-on exercises in preparation */}
          <div className="pt-6 border-t border-[#eeece6] dark:border-[#1e293b]">
            <span className="text-xs font-bold tracking-wider text-[#64748b] dark:text-[#94a3b8] uppercase block mb-4">
              Current Practical Focus
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] dark:bg-[#1a233a] dark:border-[#26334a] flex items-center gap-3">
                <FileCheck className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6] shrink-0" />
                <span className="text-xs font-medium text-[#1e293b] dark:text-[#e2e8f0]">Manual Test Cases</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] dark:bg-[#1a233a] dark:border-[#26334a] flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6] shrink-0" />
                <span className="text-xs font-medium text-[#1e293b] dark:text-[#e2e8f0]">Bug Reporting Formats</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] dark:bg-[#1a233a] dark:border-[#26334a] flex items-center gap-3">
                <Terminal className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6] shrink-0" />
                <span className="text-xs font-medium text-[#1e293b] dark:text-[#e2e8f0]">Postman API Testing</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

