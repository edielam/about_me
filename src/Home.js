// src/components/home.js
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import { LuMenuSquare } from "react-icons/lu";

import {
  AppContainer,
  Sidebar,
  NavItem,
  ContentArea,
  SectionWrapper,
  pageVariants,
  pageTransition,
  PhotoContainer,
  Photo,
  MenuButton,
} from "./ViewConstants";
import Project2 from "./components/Project2";
import About2 from "./components/About-old";
import { ThemeContext } from "./components/ThemeContext";
import { useLocation } from "react-router-dom";

const Home = ({ section }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(() => {
    switch (location.pathname) {
      case "/0x1":
        return "about";
      case "/0x2":
        return "projects";
      case "/0x3":
        return "contact";
      default:
        return "hero";
    }
  });

  useEffect(() => {
    if (section) {
      setCurrentSection(section);
    }
  }, [section]);
  return (
    <AppContainer>
      <MenuButton theme={theme} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <LuMenuSquare />
      </MenuButton>
      <Sidebar isOpen={isMenuOpen}>
        <PhotoContainer>
          <Photo
            src="https://raw.githubusercontent.com/edielam/about_me/portfolio/src/assets/b5.png"
            alt="Eddy"
          />
        </PhotoContainer>
        <NavItem
          whileHover={{ x: 5 }}
          onClick={() => {
            setCurrentSection("hero");
            setIsMenuOpen(false);
          }}
        >
          {"// Home"}
        </NavItem>
        <NavItem
          whileHover={{ x: 5 }}
          onClick={() => {
            setCurrentSection("about");
            setIsMenuOpen(false);
          }}
        >
          {"// About"}
        </NavItem>
        <NavItem
          whileHover={{ x: 5 }}
          onClick={() => {
            setCurrentSection("projects");
            setIsMenuOpen(false);
          }}
        >
          {"// Projects"}
        </NavItem>
        <NavItem
          whileHover={{ x: 5 }}
          onClick={() => {
            setCurrentSection("contact");
            setIsMenuOpen(false);
          }}
        >
          {"// Contact"}
        </NavItem>
      </Sidebar>
      <ContentArea>
        <AnimatePresence mode="wait">
          {currentSection === "hero" && <Hero />}
          {currentSection === "about" && (
            <SectionWrapper
              key="about"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About2 />
            </SectionWrapper>
          )}
          {currentSection === "projects" && (
            <SectionWrapper
              key="projects"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {/* <ProjectsList /> */}
              <Project2 />
            </SectionWrapper>
          )}
          {currentSection === "contact" && (
            <SectionWrapper
              key="contact"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactForm />
            </SectionWrapper>
          )}
        </AnimatePresence>
      </ContentArea>
    </AppContainer>
  );
};

export default Home;
