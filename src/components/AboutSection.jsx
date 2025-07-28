import React from 'react';

const AboutSection = ({ aboutText, skills }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start md:items-center">
          <div className="md:col-span-3 space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold overflow-hidden">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-up">About</span><br />
              <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>Me</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>{aboutText}</p>
          </div>
          <div className="md:col-span-2 space-y-4">
             <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>My Toolkit</h3>
             <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
               {skills.map((skill, index) => (
                 <div 
                   key={skill.name} 
                   className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 animate-fade-in-up" 
                   style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                 >
                   {skill.name}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 