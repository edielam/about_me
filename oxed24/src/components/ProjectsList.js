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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #0ff;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

const ProjectLink = styled.a`
  color: #0ff;
  text-decoration: none;
  margin-top: 1rem;
  align-self: flex-start;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectsList = () => {
  const projects = [
    {
      title: "CortexCode",
      description: "A real-time p2p collaborative code editor with an embedded terminal and compute sharing.",
      image: "/images/cortexcode.jpg",
      link: "https://github.com/yourusername/cortexcode"
    },
    {
      title: "Oxterm",
      description: "A basic terminal emulator built from scratch using Rust.",
      image: "/images/oxterm.jpg",
      link: "https://github.com/yourusername/oxterm"
    },
    {
      title: "Jeflix",
      description: "A MERN stack clone of Netflix.",
      image: "/images/jeflix.jpg",
      link: "https://github.com/yourusername/jeflix"
    },
    {
      title: "TCP from Scratch",
      description: "Implemented TCP from scratch in Rust.",
      image: "/images/tcp.jpg",
      link: "https://github.com/yourusername/tcp-from-scratch"
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
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsList;
