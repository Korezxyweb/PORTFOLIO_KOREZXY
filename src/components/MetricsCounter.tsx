import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Clock, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types';
import { CORE_METRICS } from '../data/portfolioData';

interface MetricsCounterProps {
  theme: ThemeMode;
}

interface CounterNumberProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounterNumber: React.FC<CounterNumberProps> = ({
  targetValue,
  suffix = '',
  duration = 1.4,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(1);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setCurrentValue(1);
      return;
    }

    let startTimestamp: number | null = null;
    const startVal = 1;
    const endVal = targetValue;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(startVal + (endVal - startVal) * easeProgress);
      setCurrentValue(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(endVal);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref} className="tabular-nums font-mono font-extrabold">
      {currentValue}
      {suffix}
    </span>
  );
};

export const MetricsCounter: React.FC<MetricsCounterProps> = ({ theme }) => {
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'accuracy':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'uptime':
        return <Clock className="w-5 h-5 text-sky-400" />;
      case 'projects':
        return <Layers className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="metrics"
      className={`py-20 border-y transition-colors relative ${
        theme === 'dark'
          ? 'bg-slate-950/60 border-slate-850'
          : 'bg-zinc-100/60 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
              theme === 'dark'
                ? 'bg-slate-900 text-emerald-400 border-slate-800'
                : 'bg-white text-emerald-700 border-zinc-200 shadow-sm'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>QUANTITATIVE PROOF &amp; BENCHMARKS</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Engineered For Mathematical Precision
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Empirical standards applied to every line of code, infrastructure tier, and production deployment.
          </p>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CORE_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between relative group transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-lg shadow-black/20'
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Row: Icon + Target Label */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-850'
                        : 'bg-zinc-50 border-zinc-200'
                    }`}
                  >
                    {getMetricIcon(metric.id)}
                  </div>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                      theme === 'dark'
                        ? 'bg-slate-950 text-zinc-400 border-slate-800'
                        : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                    }`}
                  >
                    Verified Metric
                  </span>
                </div>

                {/* Animated Figure */}
                <div className="mb-2">
                  <div
                    className={`text-4xl sm:text-5xl font-mono tracking-tight font-extrabold ${
                      theme === 'dark' ? 'text-zinc-100' : 'text-zinc-950'
                    }`}
                  >
                    <AnimatedCounterNumber
                      targetValue={metric.value}
                      suffix={metric.suffix}
                      duration={1.2 + idx * 0.2}
                    />
                  </div>
                </div>

                {/* Metric Title Label */}
                <h3
                  className={`text-base font-bold font-mono mb-2 ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}
                >
                  {metric.label}
                </h3>

                {/* Metric Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {metric.description}
                </p>
              </div>

              {/* Mathematical Invariant Formula */}
              {metric.formula && (
                <div
                  className={`pt-3 border-t text-[11px] font-mono truncate ${
                    theme === 'dark'
                      ? 'border-slate-800 text-zinc-500'
                      : 'border-zinc-200 text-zinc-500'
                  }`}
                  title={metric.formula}
                >
                  <span className="opacity-60 font-semibold mr-1">Formula:</span>
                  <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-700'}>
                    {metric.formula}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
