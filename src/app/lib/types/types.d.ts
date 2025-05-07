import { ReactNode } from 'react';

export interface ProjectProps {
  sourceVideo: string;
  title: string;
  websiteLink: string;
  technologies: string[];
  isEnglish: boolean;
};

export interface SkillProps {
  title: string;
  svgComponent: ReactNode;
};

export interface NavbarProps {
  isEnglish: boolean;
  toggleLanguage: () => void;
};
