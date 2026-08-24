import React, { useState, useEffect } from 'react';
import { Github, MessageSquare, Video, Mail, ArrowUp, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors ${
        theme === 'dark'
          ? 'bg-slate-950 border-slate-800 text-zinc-400'
          : 'bg-zinc-100 border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-zinc-700/20">
          {/* Brand & Subtitle */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-xs ${
                  theme === 'dark'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}
              >
                K
              </div>
              <span
                className={`font-mono text-sm uppercase tracking-widest font-bold ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`}
              >
                KOREZXY CREATIVES
              </span>
            </div>
            <p className="text-xs font-mono max-w-md">
              Web Developer &amp; Mathematician | Bridging algorithmic logic with modern web architecture.
            </p>
          </div>

          {/* Social Links List */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              id="footer-github-link"
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all border ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-850 text-zinc-300 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border-zinc-200 shadow-sm'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-tiktok-link"
              href={SOCIAL_LINKS.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all border ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-850 text-zinc-300 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border-zinc-200 shadow-sm'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>TikTok</span>
            </a>

            <a
              id="footer-whatsapp-link"
              href={SOCIAL_LINKS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                theme === 'dark'
                  ? 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className={`p-2.5 rounded-lg transition-colors border ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-850 text-zinc-400 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-zinc-50 text-zinc-600 hover:text-zinc-950 border-zinc-200 shadow-sm'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Status & Timestamp */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Deterministic &amp; Operational</span>
            </div>
            <span className="text-zinc-600">•</span>
            <span className="tabular-nums text-zinc-500">{timeString}</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} KOREZXY CREATIVES. All mathematical &amp; code assets preserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
