export type ThemeMode = 'dark' | 'light';

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  iconName: string;
  color?: string;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  formula?: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'Core Web' | 'Scientific & Mathematical' | 'Languages';
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  mathematicalFocus: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Case Study' | 'Engine Open-Source';
  complexity: 'O(1)' | 'O(log N)' | 'O(N)' | 'O(N log N)' | 'O(N²)' | 'O(N³)' | 'O(V + E)';
}

export interface ArchitecturePrinciple {
  title: string;
  subtitle: string;
  mathAnalogy: string;
  description: string;
  iconName: string;
}
