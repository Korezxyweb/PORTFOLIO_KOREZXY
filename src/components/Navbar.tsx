import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Github, MessageSquare, Video, ArrowUpRight, Menu, X, Terminal } from 'lucide-react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Technical Stack', href: '#skills' },
    { label: 'Math & Logic Lab', href: '#math-lab' },
    { label: 'Engineering Work', href: '#projects' },
    { label: 'Connect', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-zinc-50/85 backdrop-blur-md border-b border-zinc-200/80 shadow-md shadow-zinc-950/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            href="#overview"
            id="nav-brand-link"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-transform group-hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-400'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-600/30 group-hover:border-emerald-600'
              }`}
            >
              K
            </div>
            <div className="flex flex-col">
              <span
                className={`font-mono text-sm tracking-widest uppercase font-bold transition-colors ${
                  theme === 'dark' ? 'text-zinc-100 group-hover:text-emerald-400' : 'text-zinc-900 group-hover:text-emerald-700'
                }`}
              >
                KOREZXY CREATIVES
              </span>
              <span className={`text-[10px] font-mono tracking-tight ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Dev &amp; Math Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wide transition-all ${
                  theme === 'dark'
                    ? 'text-zinc-300 hover:text-white hover:bg-slate-900/80'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Social Links + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Social Links */}
            <div className="hidden sm:flex items-center gap-1.5">
              <a
                id="header-github-link"
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  theme === 'dark'
                    ? 'text-zinc-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800'
                    : 'text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200'
                }`}
              >
                <Github className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">GitHub</span>
              </a>

              <a
                id="header-tiktok-link"
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  theme === 'dark'
                    ? 'text-zinc-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800'
                    : 'text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200'
                }`}
              >
                <Video className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">TikTok</span>
              </a>

              <a
                id="header-whatsapp-link"
                href={SOCIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Quick Connect"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  theme === 'dark'
                    ? 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="text-[11px]">WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              id="theme-toggle-button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                theme === 'dark'
                  ? 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800'
                  : 'bg-zinc-100 text-slate-700 hover:bg-zinc-200 border border-zinc-200'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-zinc-300 hover:text-white bg-slate-900 border border-slate-800'
                  : 'text-zinc-700 hover:text-zinc-950 bg-zinc-100 border border-zinc-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden border-b px-4 py-4 ${
              theme === 'dark'
                ? 'bg-slate-950 border-slate-800 text-zinc-200'
                : 'bg-zinc-50 border-zinc-200 text-zinc-800'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-slate-900 text-zinc-300 hover:text-white'
                      : 'hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-950'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-zinc-700/20 grid grid-cols-3 gap-2">
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-2 rounded-lg text-xs font-mono text-center transition-colors ${
                    theme === 'dark' ? 'bg-slate-900 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                  }`}
                >
                  <Github className="w-4 h-4 mb-1" />
                  <span>GitHub</span>
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-2 rounded-lg text-xs font-mono text-center transition-colors ${
                    theme === 'dark' ? 'bg-slate-900 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                  }`}
                >
                  <Video className="w-4 h-4 mb-1" />
                  <span>TikTok</span>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2 rounded-lg text-xs font-mono text-center bg-emerald-600 text-white font-medium"
                >
                  <MessageSquare className="w-4 h-4 mb-1" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
