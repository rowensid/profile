import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  category: 'Core' | 'Game Dev' | 'Backend';
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}