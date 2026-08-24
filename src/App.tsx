'use client';

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsCounter } from './components/MetricsCounter';
import { SkillsGrid } from './components/SkillsGrid';
import { MathematicalPlayground } from './components/MathematicalPlayground';
import { ArchitecturePhilosophy } from './components/ArchitecturePhilosophy';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('korezxy_theme') as ThemeMode | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const next = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('korezxy_theme', next);
      return next;
    });
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-300 selection:bg-emerald-500/25 selection:text-emerald-300 ${
        theme === 'dark'
          ? 'bg-slate-950 text-zinc-100'
          : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      {/* Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* 1. Hero Section */}
        <HeroSection theme={theme} />

        {/* 2. Animating Metrics & Review Counters */}
        <MetricsCounter theme={theme} />

        {/* 3. Intermediate Technical Skills Grid */}
        <SkillsGrid theme={theme} />

        {/* 4. Interactive Mathematical Simulation Lab */}
        <MathematicalPlayground theme={theme} />

        {/* 5. System & Mathematical Architecture Principles */}
        <ArchitecturePhilosophy theme={theme} />

        {/* 6. Production & Scientific Web Projects */}
        <ProjectsSection theme={theme} />

        {/* 7. Direct Contact & Dispatch */}
        <ContactSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
