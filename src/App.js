//src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/0x1" element={<Home section="about" />} />
        <Route path="/0x2" element={<Home section="projects" />} />
        <Route path="/0x3" element={<Home section="contact" />} />
      </Routes>
    </Router>
  );
};

export default App;
