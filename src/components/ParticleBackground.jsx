import React, { useRef, useCallback, useEffect } from 'react';

const ParticleBackground = ({ mousePosition }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  // Advanced Particle System for background
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = window.innerWidth > 768 ? 150 : 50; // Fewer particles on mobile
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 60 + 240 // Purple to blue range
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      if (!canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      particlesRef.current.forEach((particle, index) => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.0001;
          particle.vy += dy * force * 0.0001;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.x < 0) particle.x = canvasRef.current.width;
        if (particle.x > canvasRef.current.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvasRef.current.height;
        if (particle.y > canvasRef.current.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
        ctx.fill();

        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dist = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 70%, 60%, ${0.1 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [mousePosition]);

  useEffect(() => {
    const handleResize = () => {
      if(animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    setTimeout(initParticles, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ background: 'radial-gradient(ellipse at center, rgba(30,0,80,0.3) 0%, rgba(0,0,0,0.8) 100%)' }} 
    />
  );
};

export default ParticleBackground; 