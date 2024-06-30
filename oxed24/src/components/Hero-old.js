// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HighlightedProject from './HighlightedProject';
import RecentBlogPost from './RecentBlogPost';

const HeroSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0e2a47;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1000%26quot%3B)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3E%3C/rect%3E%3Cpath d='M0,497.026C92.94,489.092,189.151,463.116,255.477,397.529C317.462,336.235,322.097,241.443,343.833,157.023C361.841,87.084,377.32,18.566,371.588,-53.426C365.545,-129.329,350.096,-203.873,309.949,-268.572C265.024,-340.971,212.237,-420.445,130.004,-442.752C48.005,-464.995,-29.63,-401.866,-112.509,-383.169C-202.684,-362.826,-312.234,-392.416,-378.558,-328.023C-444.943,-263.572,-434.884,-155.784,-441.753,-63.514C-448.199,23.076,-442.78,107.546,-417.161,190.511C-388.499,283.328,-363.416,386.159,-285.134,443.678C-205.602,502.115,-98.335,505.42,0,497.026' fill='%230b2239'%3E%3C/path%3E%3Cpath d='M1440 1102.761C1545.377 1100.5549999999998 1652.946 1086.271 1740.562 1027.683 1827.387 969.624 1885.007 877.822 1922.296 780.2570000000001 1958.034 686.749 1963.826 585.789 1947.175 487.079 1930.812 390.077 1897.432 293.529 1828.372 223.474 1761.349 155.485 1667.284 121.73000000000002 1572.895 107.40300000000002 1486.328 94.26299999999998 1405.635 137.87 1318.461 146.07600000000002 1204.308 156.822 1056.152 75.68700000000001 981.88 163.03699999999998 907.335 250.70800000000003 1019.521 384.26800000000003 1018.0889999999999 499.338 1016.9169999999999 593.515 955.0129999999999 680.492 974.2909999999999 772.682 995.904 876.04 1045.09 979.381 1131.24 1040.441 1218.672 1102.4099999999999 1332.857 1105.004 1440 1102.761' fill='%23113255'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1000'%3E%3Crect width='1440' height='560' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
  color: #cfcfcf;
  text-align: center;
  padding: 0 20px;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin: 0.5em 0;
  color: #0ff;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin: 0.5em 0;
  color: #0ff;
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: 1em 2em;
  margin-top: 2em;
  font-size: 1.2rem;
  color: #000;
  background: #0ff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #0f0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-top: 2em;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #0ff;
`;

const Hero = () => {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProfileImage src="https://github.com/edielam/about_me/blob/master/oxed24/src/images/b4.PNG?raw=true" alt="Profile" />
      <HeroTitle
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Eddy
      </HeroTitle>
      <HeroSubtitle
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >

      </HeroSubtitle>
      <HeroButton
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore my work
      </HeroButton>
      {/* <CardContainer>
        <HighlightedProject />
        <RecentBlogPost />
      </CardContainer> */}
    </HeroSection>
  );
};

export default Hero;
