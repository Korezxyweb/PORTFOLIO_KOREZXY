import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Atom, Layers, FileCode, Terminal, Binary, FileSpreadsheet, LayoutGrid, Cpu, Check, Filter } from 'lucide-react';
import { ThemeMode, SkillItem } from '../types';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

interface SkillsGridProps {
  theme: ThemeMode;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Web', 'Scientific & Mathematical', 'Languages'];

  const filteredSkills =
    selectedCategory === 'All'
      ? TECHNICAL_SKILLS
      : TECHNICAL_SKILLS.filter((skill) => skill.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-zinc-200" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-purple-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-rose-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
                theme === 'dark'
                  ? 'bg-slate-900 text-emerald-400 border-slate-800'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-emerald-500" />
              <span>TECHNICAL PROFICIENCY BENCHMARK</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Technical &amp; Mathematical Stack
            </h2>
            <p
              className={`text-sm sm:text-base mt-2 max-w-xl ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Rigorous mastery across modern web frameworks, computational logic, and scientific data analysis.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-800 text-zinc-400 hover:text-zinc-200 border border-slate-800'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                  : 'bg-white hover:bg-zinc-50/80 border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div>
                {/* Header: Icon + Name + Percentage Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-slate-950 border-slate-850'
                          : 'bg-zinc-100 border-zinc-200'
                      }`}
                    >
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold font-mono ${
                          theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                        }`}
                      >
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500">{skill.category}</span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border tabular-nums ${
                      theme === 'dark'
                        ? 'bg-slate-950 text-emerald-400 border-slate-800'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    {skill.percentage}%
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed mb-5 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>0%</span>
                  <span>Proficiency Target: {skill.percentage}%</span>
                </div>

                <div
                  className={`w-full h-2.5 rounded-full overflow-hidden p-0.5 border ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-zinc-100 border-zinc-200'
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.15 + index * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-400 relative"
                  >
                    {/* Glowing lead tip */}
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/70 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technical Note */}
        <div
          className={`mt-10 p-4 rounded-xl border text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-4 ${
            theme === 'dark'
              ? 'bg-slate-950/60 border-slate-800 text-zinc-400'
              : 'bg-zinc-100/70 border-zinc-200 text-zinc-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All competencies benchmarked against deterministic production implementations.</span>
          </div>
          <a
            href="https://github.com/korezxyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 underline font-semibold transition-colors"
          >
            Audit repositories on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
