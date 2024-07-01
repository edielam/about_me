// src/components/ProjectsList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill, SkillsContainer } from '../ViewConstants';

const ProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 1;
  padding: 2rem;
`;
const ProjectContainer = styled.div`
  background: rgba(0, 100, 100, 0.5);
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectItem = styled(motion.div)`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0ff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #cfcfcf;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #0ff;
  text-decoration: none;
  border: 1px solid #0ff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  position: absolute;
  right: 5rem;
  bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 255, 0.2);
  }
`;

const ProjectModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #0ff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "CortexCode",
      description: "A real-time p2p collaborative code editor with an embedded terminal and compute sharing.",
      image: "https://github.com/edielam/about_me/blob/master/oxed24/src/assets/prgs1.png?raw=true",
      link: "https://github.com/username/cortexcode",
      skills: ['Rust', 'JavaScript', 'Tauri', 'React', 'WebRTC', 'P2P Networking', 'Cross-platform Development', 'Real-time Collaboration', 'Docker Swarm', 'Distributed Systems']
    },
    {
      title: "Oxterm",
      description: "A basic terminal emulator built from scratch using Rust.",
      image: "/images/oxterm.jpg",
      link: "https://github.com/username/oxterm",
      skills: ['Rust', 'Systems Programming', 'Terminal Emulation', 'ANSI Escape Codes', 'Unicode Handling', 'Input/Output Streams', 'Cross-platform Development']
    },
    {
      title: "Jeflix",
      description: "A MERN stack clone of Netflix.",
      image: "https://github.com/edielam/Jeflix/raw/production/imgs/jeflix1.png?raw=true",
      link: "https://github.com/edielam/Jeflix",
      skills: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful API', 'JWT Authentication', 'Responsive Design', 'State Management (Redux/Context)']
    },
    {
      title: "TCP from Scratch",
      description: "Implemented TCP from scratch in Rust.",
      image: "/images/tcp.jpg",
      link: "https://github.com/username/tcp-from-scratch",
      skills: ['Rust', 'Network Programming', 'TCP/IP Protocol', 'Socket Programming', 'Packet Handling', 'Error Handling', 'Flow Control', 'Congestion Control']
    },
    {
      title: "Savage Rampage",
      description: "A simple 2D game built with Unity and C# where zombies chase the player character. The objective of the game is to jump over the zombies to avoid getting caught.",
      image: "https://github.com/edielam/Savage-Rampage/raw/main/screenshots/r1.png?raw=true",
      link: "https://github.com/edielam/Savage-Rampage",
      skills: ['Unity Engine', 'C#', '2D Game Development', 'Physics Simulation', 'Sprite Animation', 'Game Design', 'Object-Oriented Programming']
    },
    {
      title: "My Space",
      description: "My personal portfolio website showcasing my projects and skills. Built using modern web technologies and featuring 3D graphics with Three.js.",
      image: "https://github.com/edielam/about_me/blob/master/oxed24/src/assets/pf.gif?raw=true",
      link: "https://github.com/edielam/about_me/tree/master/oxed24",
      skills: ['React', 'Three.js', 'JavaScript', 'Responsive Design', '3D Graphics', 'Web Animation']
    },
  ];

  return (
    <ProjectsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectContainer>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                {/* <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink> */}
              </ProjectOverlay>
            </ProjectItem>
          ))}
        </ProjectsGrid>
      </ProjectContainer>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <CloseButton onClick={() => setSelectedProject(null)}>&times;</CloseButton>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <ProjectDescription>{selectedProject.description}</ProjectDescription>
              <SkillsContainer>
                {selectedProject.skills.map((skill, index) => (
                  <Skill key={index} whileHover={{ scale: 1.1 }}>
                    {skill}
                  </Skill>
                ))}
              </SkillsContainer>
              <ProjectLink href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ModalContent>
          </ProjectModal>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default ProjectsList;
