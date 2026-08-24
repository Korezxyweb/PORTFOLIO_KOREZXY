import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Binary, ArrowRight, Github, MessageSquare, Video, ShieldCheck, Cpu } from 'lucide-react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface HeroSectionProps {
  theme: ThemeMode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  return (
    <section
      id="overview"
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-[0.035] ${
          theme === 'dark' ? 'invert-0' : 'invert'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Engineering Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 border ${
                theme === 'dark'
                  ? 'bg-slate-900/90 text-emerald-400 border-emerald-500/30'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Technical Architecture &amp; Web Builds</span>
            </motion.div>

            {/* Prominent Name in Classic Clean Typeface */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-mono mb-4 leading-tight"
            >
              <span
                className={`block transition-colors ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-950'
                }`}
              >
                KOREZXY CREATIVES
              </span>
            </motion.h1>

            {/* Sleek Summary Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 max-w-2xl"
            >
              <p
                className={`text-lg sm:text-xl font-medium leading-relaxed ${
                  theme === 'dark' ? 'text-emerald-400/90' : 'text-emerald-700'
                }`}
              >
                Web Developer &amp; Mathematician
              </p>
              <p
                className={`text-base sm:text-lg mt-1 leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Bridging algorithmic logic with modern web architecture.
              </p>
            </motion.div>

            {/* Value Proposition Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Specializing in high-performance Next.js systems, deterministic React applications, Python numerical computing, and rigorous mathematical data modeling. No fluff, just mathematically sound engineering.
            </motion.p>

            {/* CTAs and Verified Handle Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <a
                id="hero-whatsapp-cta"
                href={SOCIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-mono text-sm font-semibold flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 transition-all hover:translate-y-[-1px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +234 816 752 6464</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-github-cta"
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-5 py-3 rounded-lg font-mono text-sm font-medium flex items-center justify-center gap-2 transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-zinc-200 border-slate-700'
                    : 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300 shadow-sm'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>github.com/korezxyweb</span>
              </a>

              <a
                id="hero-tiktok-cta"
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-5 py-3 rounded-lg font-mono text-sm font-medium flex items-center justify-center gap-2 transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-zinc-200 border-slate-700'
                    : 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300 shadow-sm'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>@officialkorezxy</span>
              </a>
            </motion.div>

            {/* Quick Specs Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono"
            >
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded border ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800 text-zinc-400'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}
              >
                <Binary className="w-3.5 h-3.5 text-emerald-500" />
                <span>Algorithmic Logic ⊗ Modern Web</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded border ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800 text-zinc-400'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Deterministic Codebases</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code & Mathematics Terminal Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`rounded-xl border shadow-xl overflow-hidden font-mono text-xs ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 shadow-black/40 text-zinc-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 shadow-zinc-950/20'
              }`}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-zinc-400 font-mono">korezxy_core_engine.ts</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <Cpu className="w-3 h-3" />
                  <span>MATH_RUNTIME_ACTIVE</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 space-y-2 overflow-x-auto leading-relaxed bg-slate-950/95">
                <div className="text-zinc-500">// KOREZXY CREATIVES - Algorithmic Engineering Core</div>
                <div className="text-zinc-500">// Web Architecture ∩ Mathematical Modeling</div>
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-amber-300">EngineerProfile</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">name</span>:{' '}
                  <span className="text-emerald-300">"KOREZXY"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">role</span>:{' '}
                  <span className="text-emerald-300">"Web Developer &amp; Mathematician"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">stack</span>:{' '}
                  <span className="text-yellow-300">[</span>
                  <span className="text-emerald-300">"React"</span>,{' '}
                  <span className="text-emerald-300">"Next.js"</span>,{' '}
                  <span className="text-emerald-300">"Python"</span>,{' '}
                  <span className="text-emerald-300">"MATLAB"</span>
                  <span className="text-yellow-300">]</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">codeAccuracy</span>:{' '}
                  <span className="text-amber-400">1.0</span>; <span className="text-zinc-500">// 100% verified</span>
                </div>
                <div>&#125;</div>
                <div className="pt-2">
                  <span className="text-purple-400">function</span>{' '}
                  <span className="text-blue-400">optimizeWebArchitecture</span>(
                  <span className="text-orange-300">load</span>: <span className="text-cyan-300">Matrix&lt;T&gt;</span>
                  ): <span className="text-cyan-300">DeterministicState</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">eigenvector</span> ={' '}
                  <span className="text-blue-400">computeDiscreteEigen</span>(load);
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-sky-300">uptime</span>: <span className="text-emerald-300">"24/7"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-sky-300">shippedApps</span>: <span className="text-amber-400">15</span>,
                </div>
                <div className="pl-8">
                  <span className="text-sky-300">status</span>: <span className="text-emerald-300">"PRODUCTION_READY"</span>
                </div>
                <div className="pl-4">&#125;;</div>
                <div>&#125;</div>

                {/* Simulated Terminal Prompt */}
                <div className="pt-3 mt-3 border-t border-slate-800 text-[11px] flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span>korezxy --verify --target=production</span>
                  <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
