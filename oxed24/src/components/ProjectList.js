// src/components/ProjectsList.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
  background: #121212;
  color: #cfcfcf;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
`;

const ProjectCard = styled(motion.div)`
  background: #1e1e1e;
  border: 1px solid #0ff;
  border-radius: 10px;
  margin: 1em 0;
  padding: 2em;
  width: 80%;
  max-width: 800px;
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

const ProjectsList = () => {
  const projects = [
    {
      title: "CortexCode",
      description: "A real-time p2p collaborative code editor with an embedded terminal and compute sharing using an isolated runtime environment. Technologies: Tauri, Rust, React, WebSocket, libp2p, Docker Swarm."
    },
    {
      title: "Oxterm",
      description: "A basic terminal emulator built from scratch using Rust. Technologies: Rust."
    },
    {
      title: "Jeflix",
      description: "A MERN stack clone of Netflix. Technologies: MongoDB, Express, React, Node.js."
    },
    {
      title: "TCP from Scratch",
      description: "Implemented TCP from scratch in Rust. Technologies: Rust."
    }
  ];

  return (
    <ProjectsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
};

export default ProjectsList;
