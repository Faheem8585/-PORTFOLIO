// TypeScript interfaces for the portfolio application

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  featured: boolean;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  content: string;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  featured: boolean;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Skill {
  name: string;
  level?: number; // 1-5 or percentage
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  type: 'conference' | 'journal' | 'preprint' | 'poster';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
