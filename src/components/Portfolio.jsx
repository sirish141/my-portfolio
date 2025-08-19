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

  const aboutText = "👋 Hello there!I’m Sirish Aravindakumar, a Full Stack Developer👨‍💻with a strong grasp of C, Python, and JavaScript. I’m passionate about building scalable, efficient, and user-focused applications. From crafting intuitive frontends to engineering solid backend systems, I enjoy working across the stack to bring ideas to life.I’m currently looking for new opportunities where I can contribute, grow, and collaborate with like-minded teams. Learning is a constant for me, and I love tackling real-world problems through clean, maintainable code.When I’m not coding, you’ll find me traveling or exploring new cafes. Let’s connect and build something great together!";

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
      title: "Whispr App(Real Time Chat App)",
      description: "Engineered a full-stack real-time chat application using the MERN stack, enabling authenticated users to engage in private and group conversations.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Tailwind CSS" ],
      color: "from-red-500 to-orange-500",
      year: "2025",
      githubUrl: null, // Assuming this is the repo, update if needed
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