// src/App.js
import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    'hero'
    'about'
    'skills'
    'projects'
    'contact';
  gap: 2em;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <ContactForm />
    </AppContainer>
  );
};

export default App;
