import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Github, Video, Mail, Copy, Check, Send, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [projectType, setProjectType] = useState('Next.js Full-Stack Web Application');
  const [projectDetails, setProjectDetails] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello KOREZXY CREATIVES,%0A%0AMy Name: ${encodeURIComponent(
      clientName || 'Inquirer'
    )}%0AProject Type: ${encodeURIComponent(projectType)}%0ASpecifications: ${encodeURIComponent(
      projectDetails || 'I would like to discuss a web engineering & mathematical development project.'
    )}%0A%0ALooking forward to your response!`;

    window.open(`https://wa.me/2348167526464?text=${formattedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 border-t transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
              theme === 'dark'
                ? 'bg-slate-900 text-emerald-400 border-slate-800'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
            <span>INITIALIZE DIRECT COMMUNICATION</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Let's Engineer Your Vision
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Direct access to KOREZXY CREATIVES for web development, system architecture, and mathematical algorithm consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Official Handles */}
          <div className="lg:col-span-5 space-y-4">
            <h3
              className={`text-base font-bold font-mono ${
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
              }`}
            >
              Direct Verification Handles
            </h3>

            {/* WhatsApp Card */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50'
                  : 'bg-white border-zinc-200 hover:border-emerald-500/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">WhatsApp (Direct Chat)</div>
                  <div
                    className={`text-sm font-mono font-bold ${
                      theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
                    }`}
                  >
                    +234 816 752 6464
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('+2348167526464', 'whatsapp')}
                  title="Copy Phone Number"
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-white bg-slate-950'
                      : 'text-zinc-600 hover:text-zinc-950 bg-zinc-100'
                  }`}
                >
                  {copiedItem === 'whatsapp' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={SOCIAL_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 shadow-sm transition-colors"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-lg border ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-850 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                  }`}
                >
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">GitHub Repository</div>
                  <div
                    className={`text-sm font-mono font-bold ${
                      theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
                    }`}
                  >
                    korezxyweb
                  </div>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-950 hover:bg-slate-800 text-zinc-300 border border-slate-800'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200'
                }`}
              >
                <span>Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* TikTok Card */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-lg border ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-850 text-sky-400' : 'bg-zinc-100 border-zinc-200 text-sky-600'
                  }`}
                >
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">TikTok Handle</div>
                  <div
                    className={`text-sm font-mono font-bold ${
                      theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
                    }`}
                  >
                    @officialkorezxy
                  </div>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-950 hover:bg-slate-800 text-zinc-300 border border-slate-800'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200'
                }`}
              >
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-lg border ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-850 text-rose-400' : 'bg-zinc-100 border-zinc-200 text-rose-600'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Email Address</div>
                  <div
                    className={`text-sm font-mono font-bold ${
                      theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
                    }`}
                  >
                    korezxy@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('korezxy@gmail.com', 'email')}
                  title="Copy Email Address"
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-white bg-slate-950'
                      : 'text-zinc-600 hover:text-zinc-950 bg-zinc-100'
                  }`}
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="mailto:korezxy@gmail.com"
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-950 hover:bg-slate-800 text-zinc-300 border border-slate-800'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200'
                  }`}
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* SLA / Availability Guarantee */}
            <div
              className={`p-4 rounded-xl border text-xs font-mono flex items-start gap-2.5 ${
                theme === 'dark' ? 'bg-slate-950/60 border-slate-850 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Guaranteed Response:</strong> All technical queries &amp; WhatsApp inquiries are triaged within 2-4 business hours.
              </span>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Interactive Project Request Composer */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 shadow-xl shadow-black/20'
                  : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3
                    className={`text-lg font-bold font-mono ${
                      theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                    }`}
                  >
                    Fast Project Dispatch via WhatsApp
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    Assemble your project parameters and dispatch straight to KOREZXY (+234 816 752 6464).
                  </p>
                </div>
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MessageSquare className="w-5 h-5" />
                </span>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4 font-mono text-xs">
                <div>
                  <label
                    className={`block mb-1.5 font-semibold ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arthur or FinTech Ltd"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-zinc-100 placeholder-zinc-600'
                        : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block mb-1.5 font-semibold ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    Project Scope
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-zinc-100'
                        : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                    }`}
                  >
                    <option value="Next.js Full-Stack Web Application">Next.js Full-Stack Web Application</option>
                    <option value="React Frontend Architecture & Performance Audit">React Frontend Architecture &amp; Performance Audit</option>
                    <option value="Mathematical Algorithm & Python Data Engine">Mathematical Algorithm &amp; Python Data Engine</option>
                    <option value="MATLAB / Excel Scientific Simulation Platform">MATLAB / Excel Scientific Simulation Platform</option>
                    <option value="Custom Technical Consulting">Custom Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block mb-1.5 font-semibold ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    Brief Architectural Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your technical requirements, latency goals, or core math models..."
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors resize-none ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-zinc-100 placeholder-zinc-600'
                        : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:translate-y-[-1px] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit directly to WhatsApp (+234 816 752 6464)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
