// src/components/Skills.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled(motion.section)`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
  background: #1e1e1e;
  color: #cfcfcf;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
`;

const SkillBarContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 1em 0;
`;

const SkillBarBackground = styled.div`
  background: #121212;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1em;
`;

const fillAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${({ width }) => width}%;
  }
`;

const SkillBarFill = styled.div`
  background: #0ff;
  height: 30px;
  width: ${({ width }) => width}%;
  animation: ${fillAnimation} 2s ease-in-out;
`;

const SkillLabel = styled.div`
  color: #0ff;
  font-size: 1.2rem;
  margin-bottom: 0.5em;
`;

const Skills = () => {
  const skills = [
    { name: 'Rust', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Docker', level: 85 },
  ];

  return (
    <SkillsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SkillsTitle>My Skills</SkillsTitle>
      {skills.map((skill, index) => (
        <SkillBarContainer key={index}>
          <SkillLabel>{skill.name}</SkillLabel>
          <SkillBarBackground>
            <SkillBarFill width={skill.level} />
          </SkillBarBackground>
        </SkillBarContainer>
      ))}
    </SkillsSection>
  );
};

export default Skills;
