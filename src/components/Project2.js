import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Skill, SkillsContainer } from "../ViewConstants";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggler";
import { myProjects } from "./Desc";

const ProjectsSection = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
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
  font-size: 0.9rem;
`;

const ProjectStatus = styled.span`
  font-size: 0.8rem;
  color: #608b4e;
  font-style: italic;
  display: block;
  margin-bottom: 0.5rem;
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
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            theme={theme}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => toggleProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
          >
            <Thumbnail src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectHeader theme={theme}>
                <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                <ProjectLink
                  theme={theme}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
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
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Project2;
