// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2rem;
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
  max-width: 1000px;
`;

const SkillsContainer = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;
`;

const SkillCategoryTitle = styled.h3`
  color: #0ff;
  margin-bottom: 0.5rem;
`;

const Skill = styled(motion.span)`
  background: #0ff;
  color: #000;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem;
  border-radius: 15px;
  display: inline-block;
  font-size: 0.9rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e0e0e0;
`;

const About = () => {
  const skills = {
    'Programming Languages': ['Python', 'Rust', 'JavaScript', 'Java', 'C++', 'TypeScript'],
    'Web Dev Frameworks': ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'Express.js', 'Node.js'],
    // 'Backend Frameworks': ['FastAPI', 'Django', 'Flask', 'Spring Boot', 'Express.js', 'Node.js'],
    'Cross-platform & Desktop': ['Tauri'],
    'Database, Cloud & DevOps': ['PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD pipelines'],
    'ML & Other Technologies': ['PyTorch', 'WebSockets', 'Libp2p'],
    // 'Other Technologies': [],
    // 'Tools & Methodologies': ['Git', 'Agile/Scrum', 'Test-Driven Development', 'Design Patterns']
  };

  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          My journey into the world of technology began with a fascination for AI that started six years ago. As someone with a background in Biomedical Engineering, I've always been captivated by cross-disciplinary fields, and AI's intersection with neuroscience and the philosophical debates on the nature of consciousness felt like the perfect blend of my interests. Over time, this passion led me to discover the immense potential of software engineering in revolutionizing our lives.
          My philosophy towards software engineering is simple yet effective: let the project's goals and constraints guide the technologies I learn and implement. This approach has enabled me to become proficient in various programming paradigms and cloud architectures, and has allowed me to tackle a diverse range of challenges with innovative solutions.
          One of my recent projects, CortexCode, is a testament to this approach. Born out of my frustration with resource constraints while attempting to fine-tune large language models for a Kaggle AI Olympiad competition, I created a peer-to-peer collaborative code editor with a runtime environment for compute sharing. Tailored towards distributed machine learning, CortexCode enables hobbyists like myself to pool resources even when separated by distance.
          Developing CortexCode has been a highly rewarding experience. It allowed me to delve deep into concurrency systems, explore network security, and challenge myself in system engineering, especially while embedding a terminal emulator. It's projects like these that remind me why I love what I do, and I eagerly anticipate embarking on my next venture once CortexCode is complete.
          At the heart of my software engineering journey is a desire to make a positive impact on people's lives. Whether it's solving real-world problems, optimizing performance, or ensuring code quality, my goal is to create meaningful solutions while having fun along the way. And as a firm believer in the power of knowledge-sharing, I continue to contribute to the wider developer community through my technical blog, where I share insights, lessons learned, and best practices from my experiences.</AboutText>
        <SkillsContainer>
          {Object.entries(skills).map(([category, categorySkills]) => (
            <SkillCategory key={category}>
              <SkillCategoryTitle>{category}</SkillCategoryTitle>
              {categorySkills.map((skill, index) => (
                <Skill key={index} whileHover={{ scale: 1.1 }}>
                  {skill}
                </Skill>
              ))}
            </SkillCategory>
          ))}
        </SkillsContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
