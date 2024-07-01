// src/components/HighlightedProject.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = styled(motion.div)`
  background: #1e1e1e;
  border: 1px solid #0ff;
  border-radius: 10px;
  margin: 1em;
  padding: 2em;
  width: 45%;
  text-align: left;
  &:hover {
    border-color: #0f0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0f0;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #cfcfcf;
`;

const ProjectLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5em 1em;
  margin-top: 1em;
  font-size: 1rem;
  color: #000;
  background: #0ff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #0f0;
  }
`;

const HighlightedProject = () => {
  return (
    <ProjectCard
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
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
    </ProjectCard>
  );
};

export default HighlightedProject;
