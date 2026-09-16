import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  MessageCircle, 
  Mail, 
  ArrowUpRight, 
  Copy, 
  Check 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copyEmailToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = PERSONAL_INFO.email;
    let succeeded = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        succeeded = true;
      } catch {
        succeeded = false;
      }
    }

    if (!succeeded) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        succeeded = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        succeeded = false;
      }
    }

    setCopied(true);
    setToastMessage('Email address copied to clipboard');
    setTimeout(() => {
      setCopied(false);
      setToastMessage(null);
    }, 2500);
  };

  const contactOptions = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      href: PERSONAL_INFO.linkedinUrl,
      isExternal: true,
      description: "Connect on LinkedIn",
      iconColor: "text-[#0a66c2] dark:text-[#38bdf8]",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      href: PERSONAL_INFO.whatsappUrl,
      isExternal: true,
      description: "Chat on WhatsApp",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "email",
      label: "Email",
      icon: Mail,
      href: PERSONAL_INFO.mailtoUrl,
      isExternal: false,
      description: "Send an email",
      iconColor: "text-[#2563eb] dark:text-[#60a5fa]",
      hasCopy: true,
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-3"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.06, ease: 'easeOut' }}
            className="text-base sm:text-lg text-[#64748b] dark:text-[#94a3b8]"
          >
            Reach out through your preferred channel.
          </motion.p>
        </div>

        {/* 3 Contact Options: LinkedIn, WhatsApp, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {contactOptions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.08 + index * 0.05, ease: 'easeOut' }}
                className="flex flex-col"
              >
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex-1 p-5 rounded-2xl border border-[#e5e3dc] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#131b2e] hover:bg-white dark:hover:bg-[#1a243b] hover:border-[#cbd5e1] dark:hover:border-[#334155] transition-all duration-200 flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#0f1422] border border-[#e8e6df] dark:border-[#1e293b] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-200">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0f172a] dark:group-hover:text-[#f8fafc] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  <div>
                    <div className="text-base font-bold text-[#0f172a] dark:text-[#f8fafc] mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                      {item.description}
                    </div>
                  </div>

                  {item.hasCopy && (
                    <div className="pt-3 mt-4 border-t border-[#eeece6] dark:border-[#1e293b]/70 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={copyEmailToClipboard}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc] transition-colors py-0.5 px-1 rounded cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-[#0f172a] dark:bg-[#1e293b] text-white text-xs font-medium shadow-lg flex items-center gap-2 border border-slate-700 dark:border-slate-600"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
