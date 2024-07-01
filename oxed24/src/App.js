// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';
import BlogList from './components/BlogList';
import { AppContainer, Sidebar, NavItem, BackSea, ContentArea, SectionWrapper, pageVariants, pageTransition } from './ViewConstants';

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up Three.js scene for particle background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: '#0ff', size: 0.05 });

    const particlesPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPositions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      // Clean up Three.js scene
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <AppContainer>
      <Sidebar>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('hero')}>Home</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('about')}>About</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('projects')}>Projects</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('contact')}>Contact</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('blog')}>Blog</NavItem>
      </Sidebar>
      <ContentArea>
        <BackSea>
          <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        </BackSea>
        <AnimatePresence mode="wait">
          {currentSection === 'hero' && (
            <SectionWrapper
              key="hero"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Hero />
            </SectionWrapper>
          )}
          {currentSection === 'about' && (
            <SectionWrapper
              key="about"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </SectionWrapper>
          )}
          {currentSection === 'projects' && (
            <SectionWrapper
              key="projects"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProjectsList />
            </SectionWrapper>
          )}
          {currentSection === 'contact' && (
            <SectionWrapper
              key="contact"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactForm />
            </SectionWrapper>
          )}
          {currentSection === 'blog' && (
            <SectionWrapper
              key="blog"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BlogList />
            </SectionWrapper>
          )}
        </AnimatePresence >
      </ContentArea>
    </AppContainer>
  );
};

export default App;
