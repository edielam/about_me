// src/components/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 2rem 4rem;
  text-align: center;
  background: rgba(0, 0, 20, 0.85);
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  background: rgba(0, 100, 100, 0.5);
  padding: 2rem 2rem;
  border-radius: 20px;
  text-align: left;
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

// const ResumeLink = styled.a`
//   font-size: 1.2rem;
//   color: #0ff;
//   text-decoration: none;
//   border: 1px solid #0ff;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   transition:
//     background-color 0.3s,
//     color 0.3s;

//   &:hover {
//     background-color: #0ff;
//     color: #000;
//   }
// `;

const Section = styled(motion.div)`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  color: #0ff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const PullQuote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: #990;
  border-left: 3px solid #0ff;
  padding-left: 1rem;
  margin: 1rem 0;
  text-align: center;
  width: 100%;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>
            <Icon>
              <GiArtificialIntelligence />
            </Icon>
            My Journey
          </SectionTitle>
          <AboutText>
            My journey into the world of technology began six years ago with a
            fascination for AI. With a background in Biomedical Engineering,
            I've always been captivated by cross-disciplinary fields. AI's
            intersection with neuroscience and the philosophical debates on the
            nature of consciousness felt like the perfect blend of my interests.
          </AboutText>
        </Section>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>
            <Icon>
              <FaCode />
            </Icon>
            My Philosophy
          </SectionTitle>
          <PullQuote>
            "Choosing the right tool for the job, even if it means learning
            something new, is key to creating efficient and effective
            solutions."
          </PullQuote>
          <AboutText>
            My philosophy towards software engineering is simple yet effective:
            let the project's goals and constraints guide the technologies I
            learn and implement. This approach has enabled me to become
            proficient in various programming paradigms, allowing me to tackle a
            diverse range of challenges with innovative solutions.
          </AboutText>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>
            <Icon>
              <FaProjectDiagram />
            </Icon>
            Recent Project: CortexCode
          </SectionTitle>
          <AboutText>
            One of my recent projects, CortexCode, is a testament to my
            philosophy of letting project goals guide technology choices.
            Frustrated with resource constraints while fine-tuning large
            language models for a Kaggle AI Olympiad competition, I developed a
            peer-to-peer collaborative code editor with a runtime environment
            for compute sharing. This was my first major Rust-based project.
            Even though I was more familiar with Java and Python, I recognized
            that using Rust with Tauri was a superior choice to Electron,
            aligning perfectly with the project's performance and resource
            efficiency goals.
          </AboutText>
          <AboutText>
            Developing CortexCode has been highly rewarding. It allowed me to
            dive deep into concurrency systems, explore network security, and
            challenge myself in system engineering, especially while embedding a
            terminal emulator. It's projects like these that remind me why I
            love what I do. I eagerly anticipate my next venture once CortexCode
            is complete.
          </AboutText>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>
            <Icon>
              <FaProjectDiagram />
            </Icon>
            Making an Impact
          </SectionTitle>
          <AboutText>
            At the heart of my software engineering journey is a desire to make
            a positive impact. Whether it's solving real-world problems,
            optimizing performance, or ensuring code quality, my goal is to
            create meaningful solutions while enjoying the process. As a firm
            believer in the power of knowledge-sharing, I contribute to the
            developer community through my technical blog, where I share
            insights, lessons learned, and best practices from my experiences.
          </AboutText>
        </Section>

        {/* <ResumeLink href="resume.pdf" target="_blank">
          View My Resume
        </ResumeLink> */}
      </AboutContent>
    </AboutSection>
  );
};

export default About;
