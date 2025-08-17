import { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';
import CustomCursor from './CustomCursor';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  // State management for various interactive features
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  // Refs for DOM elements to avoid direct DOM manipulation in React
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const heroRef = useRef(null);

  // User-specific data
  const user = {
    name: "Sirish Aravindakumar",
    initials: "SA",
    email: "sirisharavindakumar@gmail.com",
    github: "https://github.com/sirish141",
    linkedin: "https://www.linkedin.com/in/sirish-aravindakumar-7126b732b/",
    resumeUrl: "/SirishResume.pdf" // Link to resume in public folder
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const aboutText = "I'm Sirish, a full-stack developer from Bangalore. My main drive is building impressive, fully-fledged web applications that look amazing and function flawlessly. As a fresher, I'm passionate about writing clean code, crafting beautiful UIs, and creating interactive websites. I'm always keen to learn new technologies, with a strong interest in cloud computing. My hobbies include traveling to cold, mountainous places, exploring new cafes, and gaming.";

  const skills = [
    { name: "React", group: "Frontend" },
    { name: "JavaScript", group: "Frontend" },
    { name: "HTML", group: "Frontend" },
    { name: "CSS", group: "Frontend" },
    { name: "Node.js", group: "Backend" },
    { name: "Express", group: "Backend" },
    { name: "Python", group: "Backend" },
    { name: "MongoDB", group: "Backend" },
    { name: "SQL", group: "Backend" },
    { name: "Git & GitHub", group: "Tools" },
    { name: "VS Code", group: "Tools" },
    { name: "C", group: "Other" },
  ];

  const projects = [
    {
      title: "AutoCare Hub",
      description: "A full-stack web application for booking vehicle maintenance services, featuring secure user authentication, session management, and a booking system with real-time interaction. Built with an MVC architecture and a responsive EJS frontend.",
      tech: ["Node.js", "Express", "EJS", "SQLite3", "bcryptjs"],
      color: "from-blue-600 to-cyan-600",
      year: "2025",
      githubUrl: "https://github.com/sirish141/service_maintenance",
      liveUrl: null // Add live demo URL here when available
    },
    {
      title: "Etch-a-Sketch",
      description: "An interactive browser-based sketchpad built with vanilla JavaScript. It dynamically generates a grid and uses mouse hover effects to simulate drawing, showcasing strong DOM manipulation skills.",
      tech: ["HTML", "CSS", "JavaScript", "DOM"],
      color: "from-red-500 to-orange-500",
      year: "2025",
      githubUrl: "https://github.com/sirish141/Etch-a-Sketch", // Assuming this is the repo, update if needed
      liveUrl: null
    }
  ];

  // Effect for initial load, event listeners, and cleanup
  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        setTimeout(() => {
          if (cursorDotRef.current) {
            cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          }
        }, 100);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative font-sans">
      <ParticleBackground mousePosition={mousePosition} />
      <CustomCursor mousePosition={mousePosition} cursorRef={cursorRef} cursorDotRef={cursorDotRef} />
      
      <Navigation 
        user={user} 
        navLinks={navLinks} 
        activeSection={activeSection} 
        scrollY={scrollY} 
        isLoaded={isLoaded} 
      />

      <HeroSection isLoaded={isLoaded} />
      <AboutSection aboutText={aboutText} skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection user={user} />
    </div>
  );
};

export default Portfolio; 