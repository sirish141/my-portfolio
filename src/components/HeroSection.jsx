import React from 'react';

const HeroSection = ({ isLoaded }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="text-center z-10 px-4 relative">
        <h1 className={`text-6xl md:text-9xl font-light mb-6 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <span className="block font-medium text-white animate-slide-up" style={{ animationDelay: '0.5s' }}>Sirish</span>
          <span className="block text-gray-400 animate-slide-up" style={{ animationDelay: '0.8s' }}>Aravindakumar</span>
        </h1>
        <p className={`text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-12 animate-fade-in-up transition-all duration-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
           Full-stack developer passionate about building beautiful, functional web applications and exploring new technologies.
        </p>
        <div className={`flex items-center justify-center space-x-3 text-gray-400 animate-fade-in-up transition-all duration-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Available for opportunities</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 