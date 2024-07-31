import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Skill, SkillsContainer } from "../ViewConstants";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggler";

const ProjectsSection = styled.section`
  margin-left: 0rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: "Consolas", "Monaco", monospace;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.primary};
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 2rem;
  border-left: 3px solid #569cd6;
  padding-left: 1rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};
  margin: 0;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-family: monospace;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  font-family: monospace;
`;

const ProjectStatus = styled.span`
  font-size: 0.9rem;
  color: #608b4e;
  font-style: italic;
`;

const Project2 = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "CortexCode",
      description:
        "A real-time p2p collaborative code editor with an embedded terminal and compute sharing.",
      image:
        "https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/mini.png",
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
      description: "Implemented TCP from scratch in Rust.",
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
  const { theme } = useContext(ThemeContext);
  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <ProjectsSection theme={theme}>
      <ThemeToggle />
      <ProjectsTitle theme={theme}>Projects</ProjectsTitle>
      <ProjectList theme={theme}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            onMouseEnter={() => toggleProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
          >
            <ProjectHeader theme={theme}>
              <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
              <ProjectLink
                theme={theme}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </ProjectLink>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.STATUS && <ProjectStatus>{project.STATUS}</ProjectStatus>}
            {expandedProject === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <SkillsContainer>
                  {project.skills.map((skill, skillIndex) => (
                    <Skill key={skillIndex}>{skill}</Skill>
                  ))}
                </SkillsContainer>
              </motion.div>
            )}
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Project2;
