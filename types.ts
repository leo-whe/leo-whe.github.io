export interface NewsItem {
  id: string;
  date: string;
  content: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description?: string;
  pdfLink?: string;
  codeLink?: string;
  projectLink?: string;
  tags: string[];
}

export interface TeachingExperience {
  id: string;
  role: string;
  course: string;
  institution: string;
  period: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface GalleryItem {
  url: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  institution: string;
  email: string;
  location: string;
  bio: string;
  shortBio: string; // Used for AI context
  socials: {
    googleScholar?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  news: NewsItem[];
  publications: Publication[];
  teaching: TeachingExperience[];
  awards: Award[];
  research: ResearchProject[];
  galleryImages: GalleryItem[];
}