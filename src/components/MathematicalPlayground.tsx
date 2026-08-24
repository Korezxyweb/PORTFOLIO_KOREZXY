import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Binary, Calculator, Activity, Sliders, RefreshCw, Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface MathematicalPlaygroundProps {
  theme: ThemeMode;
}

export const MathematicalPlayground: React.FC<MathematicalPlaygroundProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'integral' | 'bigo'>('matrix');

  // Matrix Transformation State
  const [matrixA, setMatrixA] = useState<number>(1);
  const [matrixB, setMatrixB] = useState<number>(0.5);
  const [matrixC, setMatrixC] = useState<number>(-0.3);
  const [matrixD, setMatrixD] = useState<number>(1.2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Matrix Determinant & Trace calculations
  const determinant = Number((matrixA * matrixD - matrixB * matrixC).toFixed(4));
  const trace = Number((matrixA + matrixD).toFixed(4));
  const discriminant = Math.pow(trace, 2) - 4 * determinant;
  const isEigenReal = discriminant >= 0;
  const lambda1 = isEigenReal ? ((trace + Math.sqrt(discriminant)) / 2).toFixed(3) : `${(trace / 2).toFixed(2)} + ${(Math.sqrt(-discriminant) / 2).toFixed(2)}i`;
  const lambda2 = isEigenReal ? ((trace - Math.sqrt(discriminant)) / 2).toFixed(3) : `${(trace / 2).toFixed(2)} - ${(Math.sqrt(-discriminant) / 2).toFixed(2)}i`;

  // Draw Matrix on Canvas
  useEffect(() => {
    if (activeTab !== 'matrix') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const originX = width / 2;
    const originY = height / 2;
    const scale = 36; // pixels per unit

    ctx.clearRect(0, 0, width, height);

    // Background grid
    ctx.strokeStyle = theme === 'dark' ? '#1e293b' : '#e2e8f0';
    ctx.lineWidth = 1;

    // Draw un-transformed grid lines
    const gridSize = 6;
    for (let i = -gridSize; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(originX + i * scale, 0);
      ctx.lineTo(originX + i * scale, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, originY + i * scale);
      ctx.lineTo(width, originY + i * scale);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = theme === 'dark' ? '#475569' : '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Draw transformed unit square
    // Unit square corners: (0,0), (1,0), (1,1), (0,1)
    const transform = (x: number, y: number) => {
      const tx = matrixA * x + matrixB * y;
      const ty = matrixC * x + matrixD * y;
      return {
        px: originX + tx * scale,
        py: originY - ty * scale, // Canvas Y is inverted
      };
    };

    const p0 = transform(0, 0);
    const p1 = transform(1, 0);
    const p2 = transform(1, 1);
    const p3 = transform(0, 1);

    // Transformed area
    ctx.fillStyle = theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.2)';
    ctx.strokeStyle = theme === 'dark' ? '#10b981' : '#059669';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(p0.px, p0.py);
    ctx.lineTo(p1.px, p1.py);
    ctx.lineTo(p2.px, p2.py);
    ctx.lineTo(p3.px, p3.py);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Basis vector i-hat (red/rose)
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p0.px, p0.py);
    ctx.lineTo(p1.px, p1.py);
    ctx.stroke();

    // Basis vector j-hat (sky/blue)
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p0.px, p0.py);
    ctx.lineTo(p3.px, p3.py);
    ctx.stroke();

    // Text labels
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#f43f5e';
    ctx.fillText(`T(î) = (${matrixA.toFixed(2)}, ${matrixC.toFixed(2)})`, p1.px + 5, p1.py - 5);
    ctx.fillStyle = '#0284c7';
    ctx.fillText(`T(ĵ) = (${matrixB.toFixed(2)}, ${matrixD.toFixed(2)})`, p3.px + 5, p3.py - 5);
  }, [matrixA, matrixB, matrixC, matrixD, activeTab, theme]);

  // Numerical Integration State
  const [upperBound, setUpperBound] = useState<number>(3.1415);
  const [subIntervals, setSubIntervals] = useState<number>(100);
  const lowerBound = 0;

  // Function: f(x) = sin(x) + 0.5 * x
  const f = (x: number) => Math.sin(x) + 0.5 * x;
  
  // Numerical Integration Calculation (Simpson's Rule)
  const h = (upperBound - lowerBound) / subIntervals;
  let simpsonSum = f(lowerBound) + f(upperBound);
  for (let i = 1; i < subIntervals; i++) {
    const x = lowerBound + i * h;
    simpsonSum += (i % 2 === 0 ? 2 : 4) * f(x);
  }
  const computedIntegral = (simpsonSum * (h / 3)).toFixed(5);
  // Analytical exact value: [-cos(x) + 0.25 * x^2] from 0 to upperBound
  const exactIntegral = (-Math.cos(upperBound) + 0.25 * Math.pow(upperBound, 2) - (-Math.cos(0) + 0)).toFixed(5);
  const integralError = Math.abs(Number(computedIntegral) - Number(exactIntegral)).toExponential(2);

  // Big-O Scale State
  const [inputN, setInputN] = useState<number>(128);
  const bigOData = [
    { notation: 'O(1)', label: 'Constant', ops: 1, color: 'text-emerald-400' },
    { notation: 'O(log N)', label: 'Logarithmic', ops: Math.round(Math.log2(inputN)), color: 'text-teal-400' },
    { notation: 'O(N)', label: 'Linear', ops: inputN, color: 'text-sky-400' },
    { notation: 'O(N log N)', label: 'Linearithmic', ops: Math.round(inputN * Math.log2(inputN)), color: 'text-amber-400' },
    { notation: 'O(N²)', label: 'Quadratic', ops: Math.pow(inputN, 2), color: 'text-rose-400' },
  ];

  return (
    <section id="math-lab" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-3 border ${
              theme === 'dark'
                ? 'bg-slate-900 text-emerald-400 border-slate-800'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}
          >
            <Binary className="w-3.5 h-3.5 text-emerald-500" />
            <span>INTERACTIVE COMPUTATIONAL ENGINE</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${
              theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
            }`}
          >
            Mathematical Logic &amp; Simulation Lab
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Live proof of mathematical rigor executed client-side via JavaScript &amp; Canvas algorithms.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div
            className={`p-1 rounded-xl border flex items-center gap-1 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-800'
                : 'bg-zinc-100 border-zinc-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                activeTab === 'matrix'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : theme === 'dark'
                  ? 'text-zinc-400 hover:text-white'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Binary className="w-4 h-4" />
              <span>2D Matrix Linear Transformation</span>
            </button>

            <button
              onClick={() => setActiveTab('integral')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                activeTab === 'integral'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : theme === 'dark'
                  ? 'text-zinc-400 hover:text-white'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Numerical Simpson's Integration</span>
            </button>

            <button
              onClick={() => setActiveTab('bigo')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                activeTab === 'bigo'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : theme === 'dark'
                  ? 'text-zinc-400 hover:text-white'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Big-O Algorithmic Scale</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Container */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all shadow-xl ${
            theme === 'dark'
              ? 'bg-slate-900/80 border-slate-800 shadow-black/30'
              : 'bg-white border-zinc-200 shadow-sm'
          }`}
        >
          {/* TAB 1: MATRIX TRANSFORMATION */}
          {activeTab === 'matrix' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Canvas Visualization */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div
                  className={`w-full max-w-lg aspect-square rounded-xl border overflow-hidden relative flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <canvas
                    ref={canvasRef}
                    width={460}
                    height={460}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-500 bg-black/40 px-2 py-1 rounded backdrop-blur">
                    Canvas WebGL / 2D Context • Live Re-render
                  </div>
                </div>
              </div>

              {/* Matrix Controls & Determinant Output */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3
                    className={`text-lg font-bold font-mono ${
                      theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                    }`}
                  >
                    Transformation Matrix $A$
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    Adjust coefficients to observe basis vectors î and ĵ rotate, scale, and shear.
                  </p>
                </div>

                {/* Matrix Bracket Representation */}
                <div
                  className={`p-4 rounded-xl border font-mono text-sm flex items-center justify-between ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-100 border-zinc-200'
                  }`}
                >
                  <span className="text-zinc-500 text-2xl">[</span>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="text-rose-400 font-bold">a: {matrixA}</div>
                    <div className="text-sky-400 font-bold">b: {matrixB}</div>
                    <div className="text-rose-400 font-bold">c: {matrixC}</div>
                    <div className="text-sky-400 font-bold">d: {matrixD}</div>
                  </div>
                  <span className="text-zinc-500 text-2xl">]</span>
                </div>

                {/* Sliders */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-rose-400">Entry a (X-scale / stretch): {matrixA}</span>
                    </div>
                    <input
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={matrixA}
                      onChange={(e) => setMatrixA(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-sky-400">Entry b (X-shear): {matrixB}</span>
                    </div>
                    <input
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={matrixB}
                      onChange={(e) => setMatrixB(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-rose-400">Entry c (Y-shear): {matrixC}</span>
                    </div>
                    <input
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={matrixC}
                      onChange={(e) => setMatrixC(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-sky-400">Entry d (Y-scale / stretch): {matrixD}</span>
                    </div>
                    <input
                      type="range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={matrixD}
                      onChange={(e) => setMatrixD(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Quantitative Computed Output */}
                <div
                  className={`p-4 rounded-xl border space-y-2 text-xs font-mono ${
                    theme === 'dark' ? 'bg-slate-950/70 border-slate-800' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Determinant det(A) = ad - bc:</span>
                    <span
                      className={`font-bold ${
                        determinant === 0
                          ? 'text-rose-400'
                          : theme === 'dark'
                          ? 'text-emerald-400'
                          : 'text-emerald-700'
                      }`}
                    >
                      {determinant} {determinant === 0 && '(Singular / Dimension Collapse)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Trace tr(A) = a + d:</span>
                    <span className="font-bold text-zinc-300">{trace}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Eigenvalues λ₁, λ₂:</span>
                    <span className="font-bold text-amber-400">
                      {lambda1}, {lambda2}
                    </span>
                  </div>
                </div>

                {/* Reset Presets */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setMatrixA(1);
                      setMatrixB(0);
                      setMatrixC(0);
                      setMatrixD(1);
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-zinc-300'
                        : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800'
                    }`}
                  >
                    Identity Matrix
                  </button>
                  <button
                    onClick={() => {
                      // 45 deg rotation matrix: cos 45 = 0.707, -sin 45 = -0.707, sin 45 = 0.707, cos 45 = 0.707
                      setMatrixA(0.71);
                      setMatrixB(-0.71);
                      setMatrixC(0.71);
                      setMatrixD(0.71);
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-zinc-300'
                        : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800'
                    }`}
                  >
                    45° Rotation
                  </button>
                  <button
                    onClick={() => {
                      setMatrixA(1.5);
                      setMatrixB(0.8);
                      setMatrixC(0);
                      setMatrixD(1);
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-zinc-300'
                        : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800'
                    }`}
                  >
                    Horizontal Shear
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NUMERICAL INTEGRATION */}
          {activeTab === 'integral' && (
            <div className="space-y-6">
              <div>
                <h3
                  className={`text-lg font-bold font-mono ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  Definite Calculus Integration Simulator
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  Evaluates $\int_0^b (\sin(x) + 0.5x) \, dx$ using Simpson's Composite Rule with order of accuracy $O(h^4)$.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      Upper Integration Bound $b$: <span className="text-emerald-400">{upperBound.toFixed(2)}</span>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="6.28"
                      step="0.05"
                      value={upperBound}
                      onChange={(e) => setUpperBound(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      Sub-intervals $N$ (Quadrature Mesh): <span className="text-emerald-400">{subIntervals}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={subIntervals}
                      onChange={(e) => setSubIntervals(parseInt(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div
                    className={`p-4 rounded-xl border font-mono text-xs space-y-2 ${
                      theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-100 border-zinc-200'
                    }`}
                  >
                    <div className="text-zinc-400 font-semibold">Mesh Step Size ($h$):</div>
                    <div className="text-emerald-400 font-bold">{h.toFixed(6)} units</div>
                    <div className="text-zinc-400 font-semibold pt-1">Error Convergence Rate:</div>
                    <div className="text-sky-400 font-bold">O(h⁴) ≈ {integralError}</div>
                  </div>
                </div>

                <div
                  className={`p-6 rounded-xl border flex flex-col justify-between font-mono ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase text-zinc-500">Computed Output</span>
                    <div className="text-3xl font-extrabold text-emerald-400 mt-2 font-mono tabular-nums">
                      {computedIntegral}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">
                      Analytical Exact: <span className="text-zinc-300">{exactIntegral}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-[11px] text-zinc-400">
                    <span className="text-emerald-400 font-bold">✓ Zero Divergence:</span> State calculations are executed in pure 64-bit precision functions for guaranteed invariant rendering.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BIG-O SCALE */}
          {activeTab === 'bigo' && (
            <div className="space-y-6">
              <div>
                <h3
                  className={`text-lg font-bold font-mono ${
                    theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                  }`}
                >
                  Asymptotic Complexity Benchmark
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  Calculates operational count growth across data structures for input size $N = {inputN}$.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Input Elements $N$: <span className="text-emerald-400 font-bold">{inputN.toLocaleString()} elements</span>
                </label>
                <input
                  type="range"
                  min="8"
                  max="1024"
                  step="8"
                  value={inputN}
                  onChange={(e) => setInputN(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {bigOData.map((item) => (
                  <div
                    key={item.notation}
                    className={`p-4 rounded-xl border font-mono ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800'
                        : 'bg-zinc-100 border-zinc-200'
                    }`}
                  >
                    <div className={`text-base font-extrabold ${item.color}`}>{item.notation}</div>
                    <div className="text-[11px] text-zinc-500 mb-2">{item.label}</div>
                    <div className="text-xl font-bold tabular-nums">
                      {item.ops.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-1">operations</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
