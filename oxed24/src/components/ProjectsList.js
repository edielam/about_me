
// src/components/ProjectsList.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #0ff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0f0;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #cfcfcf;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #0ff;
`;

const ProjectsList = () => {
  const projects = [
    {
      title: "CortexCode",
      description: "A real-time p2p collaborative code editor with an embedded terminal and compute sharing using an isolated runtime environment.",
      tech: "Tauri, Rust, React, WebSocket, libp2p, Docker Swarm"
    },
    {
      title: "Oxterm",
      description: "A basic terminal emulator built from scratch using Rust.",
      tech: "Rust"
    },
    {
      title: "Jeflix",
      description: "A MERN stack clone of Netflix.",
      tech: "MongoDB, Express, React, Node.js"
    },
    {
      title: "TCP from Scratch",
      description: "Implemented TCP from scratch in Rust.",
      tech: "Rust"
    }
  ];

  return (
    <ProjectsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>Tech: {project.tech}</ProjectTech>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default ProjectsList;
