import React from 'react';
import { motion } from 'motion/react';
import { Layers, Github, ExternalLink, ArrowUpRight, Binary, Code2, CheckCircle2, Cpu } from 'lucide-react';
import { ThemeMode, ProjectItem } from '../types';
import { FEATURED_PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';

interface ProjectsSectionProps {
  theme: ThemeMode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
                theme === 'dark'
                  ? 'bg-slate-900 text-emerald-400 border-slate-800'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>PRODUCTION &amp; SCIENTIFIC SYSTEMS</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
                theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
              }`}
            >
              Featured Engineering Projects
            </h2>
            <p
              className={`text-sm sm:text-base mt-2 max-w-xl ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Real applications fusing Next.js web architecture, TypeScript precision, and mathematical algorithms.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all border ${
              theme === 'dark'
                ? 'bg-slate-900 hover:bg-slate-800 text-zinc-200 border-slate-800'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-200 shadow-sm'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>View All on GitHub (@korezxyweb)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-lg shadow-black/20'
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Top Status & Complexity Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        theme === 'dark'
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      ● {project.status}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        theme === 'dark'
                          ? 'bg-slate-950 text-zinc-400 border-slate-800'
                          : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                      }`}
                    >
                      Complexity: {project.complexity}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl || SOCIAL_LINKS.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'text-zinc-400 hover:text-white bg-slate-950 hover:bg-slate-800'
                        : 'text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Title and Tagline */}
                <h3
                  className={`text-xl font-bold font-mono tracking-tight mb-2 ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-xs font-mono font-medium mb-4 ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}
                >
                  {project.tagline}
                </p>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Mathematical Focus Highlight */}
                <div
                  className={`p-3 rounded-lg border mb-6 text-xs font-mono ${
                    theme === 'dark'
                      ? 'bg-slate-950/80 border-slate-800 text-zinc-300'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                  }`}
                >
                  <span className="text-emerald-500 font-semibold mr-1">Math Theory:</span>
                  <span>{project.mathematicalFocus}</span>
                </div>

                {/* Quantitative Metric Badges */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`p-2.5 rounded-lg border text-center font-mono ${
                        theme === 'dark'
                          ? 'bg-slate-950/50 border-slate-800'
                          : 'bg-zinc-100/70 border-zinc-200'
                      }`}
                    >
                      <div
                        className={`text-xs sm:text-sm font-bold tabular-nums ${
                          theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
                        }`}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10px] text-zinc-500 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-zinc-700/20 flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      theme === 'dark'
                        ? 'bg-slate-950 text-zinc-400 border-slate-800'
                        : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
