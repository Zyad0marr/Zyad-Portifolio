import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  FileSpreadsheet, 
  ListChecks, 
  Bug, 
  CheckSquare, 
  RotateCcw, 
  Layout, 
  Network, 
  Database 
} from 'lucide-react';
import { OFFERED_SERVICES, PERSONAL_INFO } from '../data/portfolioData';

export const OfferedServices: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    ListChecks: <ListChecks className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Bug: <Bug className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    CheckSquare: <CheckSquare className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    RotateCcw: <RotateCcw className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Layout: <Layout className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Network: <Network className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
    Database: <Database className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]" />,
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#0b0f19] transition-colors duration-300">
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
            Developing Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-3"
          >
            {PERSONAL_INFO.servicesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-sm md:text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed"
          >
            {PERSONAL_INFO.servicesIntro}
          </motion.p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFERED_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-white border border-[#e5e3dc] dark:bg-[#131b2e] dark:border-[#1e293b] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] dark:bg-[#1a233a] dark:border-[#26334a] flex items-center justify-center">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-[11px] font-semibold text-[#64748b] dark:text-[#94a3b8] tracking-wider uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] dark:text-[#cbd5e1] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#f1f0eb] dark:border-[#1e293b] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#2563eb] dark:text-[#3b82f6] font-semibold tracking-wide uppercase">
                  {service.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

