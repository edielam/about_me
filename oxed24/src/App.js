// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';
import BlogList from './components/BlogList';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  background: #0e2a47;
  color: #cfcfcf;
`;

const Sidebar = styled.nav`
  background: #0a1f35;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled(motion.button)`
  background: none;
  border: none;
  color: #0ff;
  font-size: 1.2rem;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    color: #0f0;
  }
`;

const ContentArea = styled(motion.main)`
  overflow-y: auto;
  padding: 0rem;
`;

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  return (
    <AppContainer>
      <Sidebar>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('hero')}>Home</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('about')}>About</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('projects')}>Projects</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('contact')}>Contact</NavItem>
        <NavItem whileHover={{ scale: 1.1 }} onClick={() => setCurrentSection('blog')}>Blog</NavItem>
      </Sidebar>
      <ContentArea>
        <AnimatePresence mode="wait">
          {currentSection === 'hero' && <Hero key="hero" />}
          {currentSection === 'about' && <About key="about" />}
          {currentSection === 'projects' && <ProjectsList key="projects" />}
          {currentSection === 'contact' && <ContactForm key="contact" />}
          {currentSection === 'blog' && <BlogList key="blog" />}
        </AnimatePresence>
      </ContentArea>
    </AppContainer>
  );
};

export default App;
