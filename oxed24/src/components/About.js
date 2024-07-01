// src/components/About.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AboutBack = styled(motion.section)`
  height: 100vh;
  // background: #0e2a47;
  // color: #cfcfcf;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  position: relative;
`;
const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
`;

const SkillsContainer = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
`;

const Skill = styled(motion.div)`
  background: #0ff;
  color: #000;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  display: inline-block;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  const skills = ['React', 'Rust', 'Node.js', 'MongoDB', 'WebSockets', 'Docker'];
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
    <AboutBack>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      <AboutSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          <AboutText>
            I'm a software engineer passionate about building innovative and efficient solutions.
            With experience in Rust, React, and MERN stack, I've developed several projects
            including CortexCode, Oxterm, and Jeflix. I love tackling complex problems and
            sharing my knowledge through blogging.
          </AboutText>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </Skill>
            ))}
          </SkillsContainer>
        </AboutContent>
      </AboutSection>
    </AboutBack>
  );
};

export default About;
