export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface SkillGroup {
  label: string;
  skills: string;
}

export interface Stat {
  label: string;
  value: string;
  color?: 'blue' | 'magenta' | 'green';
}

export interface PortfolioData {
  name: string;
  surname: string;
  tagline: string;
  bio: string[];
  stats: Stat[];
  projects: Project[];
  skills: {
    frontend: SkillGroup[];
    backend: SkillGroup[];
  };
}
