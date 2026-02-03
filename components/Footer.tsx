import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {currentYear} {PROFILE.name}. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">GitHub</a>
          <a href={PROFILE.socials.googleScholar} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">Scholar</a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;