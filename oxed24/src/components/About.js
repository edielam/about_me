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
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background: rgba(0, 100, 100, 0.5);
  padding: 2rem 2rem;
  border-radius: 20px;
`;

const AboutText = styled.p`
  font-size: 1rem;
  font-weight: 550;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 2rem;
`;

const ResumeLink = styled.a`
  font-size: 1.2rem;
  color: #0ff;
  text-decoration: none;
  border: 1px solid #0ff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0ff;
    color: #000;
  }
`;





const About = () => {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          My journey into the world of technology began with a fascination for AI that started six years ago. As someone with a background in Biomedical Engineering, I've always been captivated by cross-disciplinary fields, and AI's intersection with neuroscience and the philosophical debates on the nature of consciousness felt like the perfect blend of my interests. Over time, this passion led me to discover the immense potential of software engineering in revolutionizing our lives.
          <br /><br />
          My philosophy towards software engineering is simple yet effective: let the project's goals and constraints guide the technologies I learn and implement. This approach has enabled me to become proficient in various programming paradigms and cloud architectures, and has allowed me to tackle a diverse range of challenges with innovative solutions.
          <br /><br />
          One of my recent projects, CortexCode, is a testament to this approach. Born out of my frustration with resource constraints while attempting to fine-tune large language models for a Kaggle AI Olympiad competition, I created a peer-to-peer collaborative code editor with a runtime environment for compute sharing. Tailored towards distributed machine learning, CortexCode enables hobbyists like myself to pool resources even when separated by distance.
          <br /><br />
          Developing CortexCode has been a highly rewarding experience. It allowed me take a deep dive into concurrency systems, explore network security, and challenge myself in system engineering, especially while embedding a terminal emulator. It's projects like these that remind me why I love what I do, and I eagerly anticipate embarking on my next venture once CortexCode is complete.
          <br /><br />
          At the heart of my software engineering journey is a desire to make a positive impact on people's lives. Whether it's solving real-world problems, optimizing performance, or ensuring code quality, my goal is to create meaningful solutions while having fun along the way. And as a firm believer in the power of knowledge-sharing, I continue to contribute to the wider developer community through my technical blog, where I share insights, lessons learned, and best practices from my experiences.
        </AboutText>
        <ResumeLink href="resume.pdf" target="_blank">View My Resume</ResumeLink>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
