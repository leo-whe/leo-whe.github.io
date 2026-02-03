import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, GraduationCap, Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct a mailto link to open the user's email client
    // This is the best way to handle "sending" emails from a static site without a backend
    const subject = `Inquiry from Personal Website: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-600 text-lg">
          I'm always open to discussing new research collaborations or opportunities.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>{PROFILE.email}</span>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span>{PROFILE.institution}</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                  <Github className="h-5 w-5" />
                </a>
                <a href={PROFILE.socials.twitter} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md flex justify-center items-center gap-2">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;