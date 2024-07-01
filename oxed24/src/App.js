// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';
import BlogList from './components/BlogList';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  background: #0e2a47;
  color: #cfcfcf;
`;

const Sidebar = styled.nav`
  background: #0a1f35;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled(motion.button)`
  background: none;
  border: none;
  color: #0ff;
  font-size: 1.2rem;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    color: #0f0;
  }
`;
const BackSea = styled(motion.section)`
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  position: absolute;
`;

const ContentArea = styled(motion.main)`
  position: relative;
  overflow-y: auto;
  padding: 0rem;
  z-index: 1;
`;

const SectionWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

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
          {currentSection === 'hero' && <Hero key="hero" />}
          {currentSection === 'about' && (
            <SectionWrapper key="about">
              <About />
            </SectionWrapper>
          )}
          {currentSection === 'projects' && (
            <SectionWrapper key="projects">
              <ProjectsList />
            </SectionWrapper>
          )}
          {currentSection === 'contact' && (
            <SectionWrapper key="contact">
              <ContactForm />
            </SectionWrapper>
          )}
          {currentSection === 'blog' && (
            <SectionWrapper key="blog">
              <BlogList />
            </SectionWrapper>
          )}
        </AnimatePresence>
      </ContentArea>
    </AppContainer>
  );
};

export default App;
