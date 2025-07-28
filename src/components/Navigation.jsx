import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navigation = ({ user, navLinks, activeSection, scrollY, isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrollY > 50 ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className={`text-2xl font-bold transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <a href="#hero" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-pulse">{user.initials}</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-white' : ''}`}>
                  {link.name}
                  {activeSection === link.href.substring(1) && (<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></span>)}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
               <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"><Github size={20} /></a>
               <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"><Linkedin size={20} /></a>
               <a href={`mailto:${user.email}`} className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"><Mail size={20} /></a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-8 h-8 cursor-pointer z-50">
                <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-4 rotate-45' : 'top-2'}`}></span>
                <span className={`absolute w-full h-0.5 bg-white top-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-4 -rotate-45' : 'top-6'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-500 z-30 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center space-y-8">
            {navLinks.map((link, index) => (
              <a key={link.name} href={link.href} className={`block text-5xl font-bold hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 transform ${isMenuOpen ? `translate-y-0 opacity-100` : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
          </div>
           <div className="flex items-center space-x-8 mt-16">
               <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300"><Github size={28} /></a>
               <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300"><Linkedin size={28} /></a>
               <a href={`mailto:${user.email}`} className="text-gray-400 hover:text-white transition-all duration-300"><Mail size={28} /></a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 