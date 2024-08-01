import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Skill, SkillsContainer } from "../ViewConstants";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggler";
import { myProjects } from "./Desc";

const ProjectsSection = styled.section`
  margin-left: 0rem;
  padding: 5rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: "Consolas", "Monaco", monospace;

  @media (max-width: 768px) {
    padding: 2rem;
  }
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
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border-left: 3px solid #569cd6;
  padding-left: 1rem;

  &:hover img {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
  transition: transform 0.3s ease;
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

  const projects = myProjects;
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
            <Thumbnail src={project.image} alt={project.title} />
            <div>
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
              {project.STATUS && (
                <ProjectStatus>{project.STATUS}</ProjectStatus>
              )}
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
            </div>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Project2;
