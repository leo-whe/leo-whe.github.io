import React from 'react';
import { Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      
      {/* Hero / About Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-24">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 mb-6">
              <img 
                src="https://picsum.photos/400/400?random=profile" 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-serif font-bold text-slate-900">{PROFILE.name}</h1>
              <div className="text-slate-600 font-medium">
                {PROFILE.title}
              </div>
              <div className="text-slate-500 text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {PROFILE.institution}
              </div>
              <div className="text-slate-500 text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {PROFILE.location}
              </div>
              
              <div className="pt-4 flex gap-3">
                 <a href={`mailto:${PROFILE.email}`} className="flex-1 bg-slate-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition shadow-sm flex items-center justify-center gap-2">
                   <Mail className="h-4 w-4" /> Email
                 </a>
                 <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-2">
                   <Download className="h-4 w-4" /> CV
                 </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-9 space-y-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b pb-2 border-slate-200">About Me</h2>
            <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {PROFILE.bio}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 border-b pb-2 border-slate-200 mb-6">News</h2>
            <div className="space-y-4">
              {PROFILE.news.map((item) => (
                <div key={item.id} className="flex gap-4 items-start group">
                  <span className="flex-shrink-0 w-24 text-sm font-semibold text-slate-400 font-mono pt-1">{item.date}</span>
                  <div className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition">
                    {/* Make content clickable if link exists */}
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-slate-900 hover:text-blue-600 hover:underline inline-flex items-start gap-1 font-medium"
                      >
                        {item.content} <ExternalLink className="h-3.5 w-3.5 mt-1 opacity-50 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span>{item.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;