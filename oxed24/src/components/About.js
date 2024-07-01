// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
`;

const SkillsContainer = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
`;

const Skill = styled(motion.div)`
  background: #0ff;
  color: #000;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  display: inline-block;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  const skills = ['React', 'Rust', 'Node.js', 'MongoDB', 'WebSockets', 'Docker'];

  return (
    <AboutSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          I'm a software engineer passionate about building innovative and efficient solutions.
          With experience in Rust, React, and MERN stack, I've developed several projects
          including CortexCode, Oxterm, and Jeflix. I love tackling complex problems and
          sharing my knowledge through blogging.
        </AboutText>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </Skill>
          ))}
        </SkillsContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
