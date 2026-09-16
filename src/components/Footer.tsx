import React from 'react';
import { ArrowUp, MessageCircle, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: "WhatsApp", href: PERSONAL_INFO.whatsappUrl, icon: MessageCircle, isExternal: true },
    { label: "Email", href: PERSONAL_INFO.mailtoUrl, icon: Mail, isExternal: false },
    { label: "LinkedIn", href: PERSONAL_INFO.linkedinUrl, icon: Linkedin, isExternal: true },
  ];

  return (
    <footer className="py-10 border-t border-[#e8e6df] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#0b0f19] text-[#64748b] dark:text-[#94a3b8] text-xs transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        
        {/* Copyright notice */}
        <p className="font-medium text-[#475569] dark:text-[#94a3b8] text-center sm:text-left">
          {PERSONAL_INFO.footerText}
        </p>

        {/* Minimal Contact Options: WhatsApp · Email · LinkedIn */}
        <div className="flex items-center flex-wrap justify-center gap-1 sm:gap-1.5">
          {footerLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                {index > 0 && (
                  <span className="text-[#cbd5e1] dark:text-[#334155] select-none mx-0.5 sm:mx-1 font-semibold">
                    ·
                  </span>
                )}
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md font-medium text-[#64748b] hover:text-[#0f172a] dark:text-[#94a3b8] dark:hover:text-[#f8fafc] hover:bg-[#eeece6] dark:hover:bg-[#1a233a] transition-all duration-200 group"
                  aria-label={item.label}
                >
                  <Icon className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#2563eb] dark:text-[#94a3b8] dark:group-hover:text-[#3b82f6] transition-colors" />
                  <span>{item.label}</span>
                </a>
              </React.Fragment>
            );
          })}
        </div>

        {/* Back to top subtle button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc] transition-colors py-1.5 px-3 rounded-md hover:bg-[#eeece6] dark:hover:bg-[#1a233a] cursor-pointer"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
