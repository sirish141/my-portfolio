import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-12 sm:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 overflow-hidden">
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">Featured Work</span>
        </h2>
        <div className="space-y-16 sm:space-y-32">
          {projects.map((project, index) => (
            <div key={project.title} className={`group relative grid md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center animate-fade-in-up ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className={`relative overflow-hidden rounded-2xl aspect-video ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/30 rounded-full animate-spin-slow group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                </div>
                {project.liveUrl && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                )}
              </div>
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400 font-mono">
                  <span>{project.year}</span>
                  <div className="w-6 sm:w-8 h-px bg-gray-400"></div>
                  <span>PROJECT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-purple-400/50 group-hover:bg-purple-400/10 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 pt-4">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start space-x-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button className="flex items-center justify-center sm:justify-start space-x-2 text-white bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 rounded-full cursor-not-allowed" disabled>
                      <span>Live Demo</span>
                    </button>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 