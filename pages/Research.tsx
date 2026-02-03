import React from 'react';
import { FileText, Code, Link as LinkIcon } from 'lucide-react';
import { PROFILE } from '../constants';

const Research: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Projects */}
      <section>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Research Projects</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of ongoing and completed research initiatives I have contributed to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE.research.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-slate-900 border-b pb-2 border-slate-200 mb-8">Publications</h2>
        <div className="space-y-8">
          {PROFILE.publications.map((pub) => (
            <div key={pub.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
              {/* Year Badge */}
              <div className="hidden sm:flex flex-col items-center pt-1">
                <span className="text-xl font-bold text-slate-300 group-hover:text-blue-500 transition-colors">{pub.year}</span>
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  {/* Make title clickable if PDF link exists */}
                  {pub.pdfLink ? (
                    <a 
                      href={pub.pdfLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-blue-600 hover:underline transition-colors"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <div className="text-slate-600 text-sm">
                  {pub.authors.map((author, index) => (
                    <span key={index} className={author === PROFILE.name ? "font-bold text-slate-800" : ""}>
                      {author}{index < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                <div className="text-slate-500 text-sm font-medium italic">
                  {pub.venue}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-1">
                  {pub.pdfLink && (
                    <a href={pub.pdfLink} className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 border border-slate-200 rounded px-2 py-1 hover:bg-blue-50 transition">
                      <FileText className="h-3 w-3" /> PDF
                    </a>
                  )}
                  {pub.codeLink && (
                    <a href={pub.codeLink} className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 border border-slate-200 rounded px-2 py-1 hover:bg-blue-50 transition">
                      <Code className="h-3 w-3" /> Code
                    </a>
                  )}
                  {pub.projectLink && (
                    <a href={pub.projectLink} className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 border border-slate-200 rounded px-2 py-1 hover:bg-blue-50 transition">
                      <LinkIcon className="h-3 w-3" /> Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;