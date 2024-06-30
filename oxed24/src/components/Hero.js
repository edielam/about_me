// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
  color: #333;
  text-align: center;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin: 0.5em 0;
  color: #0070f3;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin: 0.5em 0;
  color: #0070f3;
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: 1em 2em;
  margin-top: 2em;
  font-size: 1.2rem;
  color: #fff;
  background: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #005bb5;
  }
`;

const Hero = () => {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroTitle
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm [Your Name]
      </HeroTitle>
      <HeroSubtitle
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        A Software Engineer
      </HeroSubtitle>
      <HeroButton
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore my work
      </HeroButton>
    </HeroSection>
  );
};

export default Hero;
