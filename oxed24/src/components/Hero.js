import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const HeroSection = styled(motion.section)`
  height: 100vh;
  background: #92bde9;
  color: #cfcfcf;
  overflow: hidden;
  position: relative;
`;

const TerminalWindow = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #0ff;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Courier New', monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
`;

const TerminalPrompt = styled.div`
  color: #0ff;
  &::before {
    content: '(0xed24):$ ';
  }
`;

const TerminalOutput = styled.div`
  color: #0f0;
  margin-top: 10px;
`;

const Hero = () => {
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
    const particlesMaterial = new THREE.PointsMaterial({ color: '#0e2a47', size: 0.05 });

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
    <HeroSection>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      <TerminalWindow>
        <TerminalPrompt>cargo add myspace</TerminalPrompt>
        <TerminalOutput>Welcome to Eddy's Universe</TerminalOutput>
        <TerminalPrompt>explore projects</TerminalPrompt>
        <TerminalOutput>Loading project data...</TerminalOutput>
      </TerminalWindow>
    </HeroSection>
  );
};

export default Hero;
