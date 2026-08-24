import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Workflow, Sigma, Zap, Shield, CheckCircle } from 'lucide-react';
import { ThemeMode } from '../types';
import { ARCHITECTURE_PRINCIPLES } from '../data/portfolioData';

interface ArchitecturePhilosophyProps {
  theme: ThemeMode;
}

export const ArchitecturePhilosophy: React.FC<ArchitecturePhilosophyProps> = ({ theme }) => {
  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-sky-400" />;
      case 'Sigma':
        return <Sigma className="w-5 h-5 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 border-t transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
              theme === 'dark'
                ? 'bg-slate-900 text-emerald-400 border-slate-800'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}
          >
            <Sigma className="w-3.5 h-3.5 text-emerald-500" />
            <span>DISCIPLINED SYSTEM DESIGN</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Mathematical Rigor in Web Architecture
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Software is built on mathematical invariants. Every component hierarchy, data structure, and caching layer is designed for deterministic stability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ARCHITECTURE_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-lg border ${
                      theme === 'dark' ? 'bg-slate-950 border-slate-850' : 'bg-zinc-100 border-zinc-200'
                    }`}
                  >
                    {getPrincipleIcon(principle.iconName)}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded border ${
                      theme === 'dark'
                        ? 'bg-slate-950 text-emerald-400 border-slate-800'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {principle.mathAnalogy}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold font-mono mb-1 ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  {principle.title}
                </h3>
                <p className="text-xs font-mono text-emerald-500 font-semibold mb-3">
                  {principle.subtitle}
                </p>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {principle.description}
                </p>
              </div>

              <div
                className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                  theme === 'dark' ? 'border-slate-800 text-zinc-500' : 'border-zinc-200 text-zinc-500'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified in 15+ Production Next.js Deployments</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
