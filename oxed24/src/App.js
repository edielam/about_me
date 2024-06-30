// src/App.js
import React from 'react';
import Hero from './components/Hero';
import HighlightedProject from './components/HighlightedProject';
import RecentBlogPost from './components/RecentBlogPost';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsList />
      <ContactForm />
    </div>
  );
};

export default App;
