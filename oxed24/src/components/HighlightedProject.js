// src/components/HighlightedProject.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background: #fff;
  color: #333;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #0070f3;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const ProjectLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5em 1em;
  margin-top: 1em;
  font-size: 1rem;
  color: #fff;
  background: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #005bb5;
  }
`;

const HighlightedProject = () => {
  return (
    <ProjectSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProjectTitle>Featured Project: CortexCode</ProjectTitle>
      <ProjectDescription>
        CortexCode is a real-time p2p collaborative code editor with an embedded terminal and compute sharing using an isolated runtime environment.
      </ProjectDescription>
      <ProjectLink
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View Project
      </ProjectLink>
    </ProjectSection>
  );
};

export default HighlightedProject;
