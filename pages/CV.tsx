import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { PROFILE } from '../constants';

const CV: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Teaching */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-serif font-bold text-slate-900">Teaching</h2>
        </div>
        
        <div className="space-y-8 relative border-l-2 border-slate-100 ml-3 pl-8">
          {PROFILE.teaching.map((job) => (
            <div key={job.id} className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-sm"></span>
              <h3 className="font-bold text-slate-900">{job.course}</h3>
              <div className="text-slate-600 font-medium text-sm mb-1">{job.role} &middot; {job.institution}</div>
              <div className="text-slate-400 text-xs font-mono mb-2">{job.period}</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-2">
          <Award className="h-6 w-6 text-amber-500" />
          <h2 className="text-2xl font-serif font-bold text-slate-900">Awards & Honors</h2>
        </div>

        <div className="space-y-4">
          {PROFILE.awards.map((award) => (
            <div key={award.id} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex justify-between items-center group hover:border-blue-200 transition">
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition">{award.title}</h3>
                <div className="text-slate-500 text-sm">{award.organization}</div>
              </div>
              <span className="text-slate-400 font-mono text-sm bg-slate-50 px-2 py-1 rounded">{award.year}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CV;