import { MetricItem, SkillItem, ProjectItem, ArchitecturePrinciple, SocialLink } from '../types';

export const SOCIAL_LINKS: Record<string, SocialLink> = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/korezxyweb',
    handle: '@korezxyweb',
    iconName: 'Github',
    color: '#6e5494',
  },
  tiktok: {
    name: 'TikTok',
    url: 'https://tiktok.com/@officialkorezxy',
    handle: '@officialkorezxy',
    iconName: 'Video',
    color: '#00f2fe',
  },
  whatsapp: {
    name: 'WhatsApp',
    url: 'https://wa.me/2348167526464',
    handle: '+234 816 752 6464',
    iconName: 'MessageSquare',
    color: '#25D366',
  },
  email: {
    name: 'Email Direct',
    url: 'mailto:korezxy@gmail.com',
    handle: 'korezxy@gmail.com',
    iconName: 'Mail',
    color: '#ea4335',
  }
};

export const CORE_METRICS: MetricItem[] = [
  {
    id: 'accuracy',
    value: 100,
    suffix: '%',
    label: 'Code Accuracy & Logic',
    description: 'Deterministic unit validation, invariant state preservation, and zero-defect algorithmic logic.',
    formula: 'lim(Errors → 0) P(Deterministic Execution) = 1.0',
  },
  {
    id: 'uptime',
    value: 24,
    suffix: '/7',
    label: 'System Uptime & Support',
    description: 'Continuous monitoring, high availability serverless edge deployments, and instant latency response.',
    formula: 'Availability = MTBF / (MTBF + MTTR) ≈ 99.99%',
  },
  {
    id: 'projects',
    value: 15,
    suffix: '+',
    label: 'Production Web Applications',
    description: 'Enterprise-grade React and Next.js applications engineered with mathematical rigor and performance.',
    formula: 'Σ(Shipped Systems) > 15 ∧ Active Users > 10⁴',
  },
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  {
    name: 'React',
    percentage: 78,
    category: 'Core Web',
    description: 'Modern component architecture, concurrent features, custom hooks, and reactive state management.',
    iconName: 'Atom',
  },
  {
    name: 'Next.js',
    percentage: 75,
    category: 'Core Web',
    description: 'App Router, Server Components (RSC), Edge runtime optimizations, dynamic caching, and SSR/SSG pipelines.',
    iconName: 'Layers',
  },
  {
    name: 'JavaScript',
    percentage: 80,
    category: 'Languages',
    description: 'ESNext specifications, asynchronous event-loop mastery, Closures, functional programming, and DOM APIs.',
    iconName: 'FileCode',
  },
  {
    name: 'Python',
    percentage: 75,
    category: 'Languages',
    description: 'Scientific computing, data manipulation (NumPy/Pandas), mathematical modeling, and automated algorithmic scripting.',
    iconName: 'Terminal',
  },
  {
    name: 'MATLAB',
    percentage: 72,
    category: 'Scientific & Mathematical',
    description: 'Matrix computations, linear algebraic solvers, discrete signal transforms, numerical ODE approximations, and data simulation.',
    iconName: 'Binary',
  },
  {
    name: 'Excel Data Solutions',
    percentage: 76,
    category: 'Scientific & Mathematical',
    description: 'Advanced financial modeling, matrix formulas, Power Query pipelines, dynamic statistical arrays, and multivariate regressions.',
    iconName: 'FileSpreadsheet',
  },
  {
    name: 'HTML5 & CSS3',
    percentage: 98,
    category: 'Core Web',
    description: 'Semantic DOM standards, responsive CSS Grid / Flexbox mathematical ratios, fluid typography, and sub-pixel perfection.',
    iconName: 'LayoutGrid',
  },
];

export const ARCHITECTURE_PRINCIPLES: ArchitecturePrinciple[] = [
  {
    title: 'Algorithmic Optimization',
    subtitle: 'Complexity Reduction & Speed',
    mathAnalogy: 'Time Complexity T(n) ∈ O(log n)',
    description: 'Applying discrete mathematics and dynamic programming principles to eliminate redundant re-renders and quadratic tree traversals in frontend state trees.',
    iconName: 'Cpu',
  },
  {
    title: 'Deterministic State Theory',
    subtitle: 'State as a Pure Function of Actions',
    mathAnalogy: 'S_{t+1} = f(S_t, A)',
    description: 'Treating UI rendering as a pure mathematical transformation of state. Every interaction produces predictable, testable, and invariant user experiences.',
    iconName: 'Workflow',
  },
  {
    title: 'Matrix & Numerical Precision',
    subtitle: 'Data Modeling & Quantitative Logic',
    mathAnalogy: 'Ax = λx (Eigenvalues & Transformations)',
    description: 'Transforming complex multidimensional datasets and scientific matrices into high-speed browser visualizers with sub-millisecond execution cycles.',
    iconName: 'Sigma',
  },
  {
    title: 'Zero-Latency Architecture',
    subtitle: 'Serverless Edge & Next.js Caching',
    mathAnalogy: 'Latency L(d) → 0 via Global Edge Distribution',
    description: 'Leveraging distributed edge runtimes, incremental static regeneration, and optimistic UI mutations to guarantee immediate feedback loops.',
    iconName: 'Zap',
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'matrix-sim',
    title: 'Algorithmic Matrix & Vector Field Engine',
    tagline: 'Interactive linear algebra visualizer & real-time transformation matrix simulator',
    description: 'A high-performance computational platform executing live eigenvalues, vector projections, and Gaussian elimination pipelines in real-time browser canvas with custom WebGL acceleration.',
    mathematicalFocus: 'Linear Algebra, Eigen-decompositions & Matrix Inversions',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MATLAB Algorithms'],
    metrics: [
      { label: 'Compute Speed', value: '< 1.4ms' },
      { label: 'Matrix Dimensions', value: 'Up to 256x256' },
      { label: 'Numerical Precision', value: '64-bit IEEE 754' }
    ],
    githubUrl: 'https://github.com/korezxyweb',
    liveUrl: 'https://github.com/korezxyweb',
    status: 'Production',
    complexity: 'O(N³)'
  },
  {
    id: 'monte-carlo-fin',
    title: 'Quantitative Risk & Calculus Analytics Suite',
    tagline: 'Stochastic numerical simulator & dynamic forecasting dashboard',
    description: 'Full-scale financial and mathematical forecasting engine executing 100,000+ Monte Carlo iterations per session to model asset volatility, Black-Scholes surfaces, and statistical confidence intervals.',
    mathematicalFocus: 'Probability Density Functions, Brownian Motion & Numerical Integration',
    techStack: ['Python', 'React', 'Next.js', 'Excel Data Integration', 'JavaScript'],
    metrics: [
      { label: 'Simulations / sec', value: '100,000+' },
      { label: 'Accuracy Range', value: '99.98%' },
      { label: 'Latency', value: '28ms' }
    ],
    githubUrl: 'https://github.com/korezxyweb',
    liveUrl: 'https://github.com/korezxyweb',
    status: 'Production',
    complexity: 'O(N)'
  },
  {
    id: 'korezxy-core-web',
    title: 'Deterministic Next.js Enterprise Portal',
    tagline: 'High-throughput modular web architecture for algorithmic data workloads',
    description: 'Engineered with zero-bundle-bloat Server Components, dynamic ISR caching layers, and mathematically proportional typography to deliver sub-second LCP scores on 4G networks.',
    mathematicalFocus: 'Discrete Graph Caching & Network Flow Optimization',
    techStack: ['Next.js', 'React', 'HTML5 & CSS3', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'First Contentful Paint', value: '0.38s' },
      { label: 'Bundle Size (Gzipped)', value: '42 kB' }
    ],
    githubUrl: 'https://github.com/korezxyweb',
    liveUrl: 'https://github.com/korezxyweb',
    status: 'Production',
    complexity: 'O(1)'
  },
  {
    id: 'graph-algo-suite',
    title: 'Discrete Graph & Network Routing Optimizer',
    tagline: 'Dijkstra, A*, and Bellman-Ford interactive shortest path simulator',
    description: 'Visual interactive sandbox illustrating graph traversal algorithms, heuristic efficiency comparisons, and topological sorting across weighted directed graphs.',
    mathematicalFocus: 'Graph Theory, Heuristic Functions & Discrete Optimization',
    techStack: ['JavaScript', 'Python', 'React', 'Tailwind CSS'],
    metrics: [
      { label: 'Node Capacity', value: '2,500 Nodes' },
      { label: 'Search Efficiency', value: 'A* Heuristic 3.4x Faster' },
      { label: 'Execution', value: 'Deterministic' }
    ],
    githubUrl: 'https://github.com/korezxyweb',
    liveUrl: 'https://github.com/korezxyweb',
    status: 'Case Study',
    complexity: 'O(V + E)'
  }
];
