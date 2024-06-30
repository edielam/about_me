// src/App.js
import React from 'react';
import Hero from './components/Hero';
import HighlightedProject from './components/HighlightedProject';
import RecentBlogPost from './components/RecentBlogPost';

const App = () => {
  return (
    <div>
      <Hero />
      <HighlightedProject />
      <RecentBlogPost />
    </div>
  );
};

export default App;
