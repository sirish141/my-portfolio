import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const ContactSection = ({ user }) => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
            <p className="text-xs sm:text-sm text-gray-400 tracking-widest font-mono">CONTACT</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Let's build something amazing together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, and contribute to innovative solutions. Have a project in mind? Let's connect.
            </p>
          </div>
          <div className="space-y-2 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href={`mailto:${user.email}`} className="flex items-center p-4 sm:p-6 border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-300 group rounded-t-lg">
              <Mail className="w-5 h-5 sm:w-7 sm:h-7 mr-4 sm:mr-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300 transform group-hover:-translate-y-1" />
              <span className="text-sm sm:text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300 break-all">{user.email}</span>
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 sm:p-6 border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-300 group">
              <Linkedin className="w-5 h-5 sm:w-7 sm:h-7 mr-4 sm:mr-6 text-gray-400 group-hover:text-pink-400 transition-all duration-300 transform group-hover:-translate-y-1" />
              <span className="text-sm sm:text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">LinkedIn Profile</span>
            </a>
            <a href={user.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 sm:p-6 border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-300 group">
              <Github className="w-5 h-5 sm:w-7 sm:h-7 mr-4 sm:mr-6 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-y-1" />
              <span className="text-sm sm:text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">GitHub Repository</span>
            </a>
            <a href={user.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 sm:p-6 border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-300 group rounded-b-lg">
              <FileText className="w-5 h-5 sm:w-7 sm:h-7 mr-4 sm:mr-6 text-gray-400 group-hover:text-green-400 transition-all duration-300 transform group-hover:-translate-y-1" />
              <span className="text-sm sm:text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 