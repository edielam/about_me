// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
  background: #1e1e1e;
  color: #cfcfcf;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  margin-top: 1em;
  max-width: 800px;
  text-align: center;
  color: #cfcfcf;
`;

const About = () => {
  return (
    <AboutSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I am a software engineer passionate about building innovative and efficient solutions. With experience in Rust, React, and MERN stack, I have developed several projects including CortexCode, Oxterm, and Jeflix. I love tackling complex problems and sharing my knowledge through blogging.
      </AboutText>
    </AboutSection>
  );
};

export default About;
