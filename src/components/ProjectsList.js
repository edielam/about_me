import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Skill, SkillsContainer } from "../ViewConstants";

const ProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: 1;
  padding: 2rem;
  background: rgba(0, 0, 20, 0.85);
  overflow: hidden;
`;

const ProjectContainer = styled.div`
  background: rgba(0, 100, 100, 0.3);
  border-radius: 10px;
  padding: 2rem;
  width: 80%;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
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
const ProjectStatus = styled.h3`
  font-size: 0.9rem;
  color: #090;
  margin-bottom: 0.5rem;
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
  overflow-y: auto;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  position: relative;
  margin: auto;
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
      description:
        "A real-time p2p collaborative code editor with an embedded terminal and compute sharing.",
      image:
        "https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/prgs1.png",
      link: "https://github.com/edielam/TerminalEditor-CC",
      skills: [
        "Rust",
        "JavaScript",
        "Tauri",
        "React",
        "WebRTC",
        "P2P Networking",
        "Cross-platform Development",
        "Real-time Collaboration",
        "Docker Swarm",
        "Distributed Systems",
      ],
    },
    {
      title: "Oxterm",
      description: "A basic terminal emulator built from scratch using Rust.",
      image:
        "https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/term.png",
      link: "https://github.com/edielam/oxterm",
      skills: [
        "Rust",
        "Systems Programming",
        "Terminal Emulation",
        "ANSI Escape Codes",
        "Unicode Handling",
        "Input/Output Streams",
        "Cross-platform Development",
      ],
      STATUS: "IN PROGRESS, PRIVATE REPO ...",
    },
    {
      title: "Jeflix",
      description: "A MERN stack clone of Netflix.",
      image:
        "https://raw.githubusercontent.com/edielam/Jeflix/production/imgs/jeflix1.png",
      link: "https://github.com/edielam/Jeflix",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
        "JWT Authentication",
        "Responsive Design",
        "Redux/Context",
      ],
    },
    {
      title: "TCP from Scratch",
      description:
        "Implemented TCP from scratch in Rust. STATUS: IN PROGRESS, PRIVATE REPO",
      image:
        "https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/tcp.jpg",
      link: "https://github.com/edielam/tcp-from-scratch",
      skills: [
        "Rust",
        "Network Programming",
        "TCP/IP Protocol",
        "Socket Programming",
        "Packet Handling",
        "Error Handling",
        "Flow Control",
        "Congestion Control",
      ],
      STATUS: "IN PROGRESS, PRIVATE REPO ...",
    },
    {
      title: "Savage Rampage",
      description:
        "A simple 2D game built with Unity and C# where zombies chase the player character. The objective of the game is to jump over the zombies to avoid getting caught.",
      image:
        "https://raw.githubusercontent.com/edielam/Savage-Rampage/main/screenshots/r1.png",
      link: "https://github.com/edielam/Savage-Rampage",
      skills: [
        "Unity Engine",
        "C#",
        "2D Game Development",
        "Physics Simulation",
        "Sprite Animation",
        "Game Design",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "My Space",
      description:
        "My personal portfolio website showcasing my projects and skills. Built using modern web technologies and featuring 3D graphics with Three.js.",
      image:
        "https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/pf.gif",
      link: "https://github.com/edielam/about_me/tree/portfolio",
      skills: [
        "React",
        "Three.js",
        "JavaScript",
        "Responsive Design",
        "3D Graphics",
        "Web Animation",
      ],
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
              <CloseButton onClick={() => setSelectedProject(null)}>
                &times;
              </CloseButton>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <ProjectStatus>{selectedProject.STATUS}</ProjectStatus>
              <ProjectDescription>
                {selectedProject.description}
              </ProjectDescription>

              <SkillsContainer>
                {selectedProject.skills.map((skill, index) => (
                  <Skill key={index} whileHover={{ scale: 1.1 }}>
                    {skill}
                  </Skill>
                ))}
              </SkillsContainer>
              <ProjectLink
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
