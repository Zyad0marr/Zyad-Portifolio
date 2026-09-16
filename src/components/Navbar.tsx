import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#faf9f6]/95 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#e5e3dc] dark:border-[#1e293b] shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#cover"
          onClick={(e) => handleNavClick(e, 'cover')}
          className="group flex flex-col focus:outline-none"
          aria-label={`${PERSONAL_INFO.logoName} - ${PERSONAL_INFO.logoRole}`}
        >
          <span className="text-base font-bold tracking-wider text-[#0f172a] group-hover:text-black dark:text-[#f8fafc] dark:group-hover:text-white transition-colors duration-200">
            {PERSONAL_INFO.logoName}
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-[#64748b] dark:text-[#94a3b8] uppercase">
            {PERSONAL_INFO.logoRole}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[13px]" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-1 font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#0f172a] dark:text-[#f8fafc] font-semibold' 
                    : 'text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#2563eb] dark:bg-[#3b82f6] transition-all duration-250 ease-out ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions: Theme Toggle & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            id="theme-toggle-desktop"
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc] bg-white/70 dark:bg-[#131b2e] hover:bg-white dark:hover:bg-[#1a233a] border border-[#e2e8f0] dark:border-[#1e293b] rounded-lg transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          {/* Contact CTA */}
          <a
            id="nav-contact-button"
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#f8fafc] dark:text-[#0f172a] dark:hover:bg-slate-200 rounded-md transition-all duration-200 shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700" />
          </a>
        </div>

        {/* Mobile Controls: Theme Toggle & Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="theme-toggle-mobile-header"
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc] bg-white/70 dark:bg-[#131b2e] border border-[#e2e8f0] dark:border-[#1e293b] rounded-lg focus:outline-none cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc] rounded-md focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden bg-[#faf9f6] dark:bg-[#0f1422] border-b border-[#e5e3dc] dark:border-[#1e293b] px-6 py-5 shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm py-1.5 font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-[#0f172a] dark:text-[#f8fafc] font-semibold'
                      : 'text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#e5e3dc] dark:border-[#1e293b] flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#f8fafc] dark:text-[#0f172a] dark:hover:bg-slate-200 rounded-md transition-colors"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
