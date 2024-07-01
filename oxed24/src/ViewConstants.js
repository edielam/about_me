
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  background: #0e2a47;
  color: #cfcfcf;
`;

export const Sidebar = styled.nav`
  background: #0a1f35;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PhotoContainer = styled.div`
  margin-top: 5rem;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #0ff;
  top: 0;
  position: absolute;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavItem = styled(motion.button)`
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

export const BackSea = styled(motion.section)`
  position: fixed;
  left: 25%;
  width: 80%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  top: 0;
  z-index: 0;
  pointer-events: none;
`;

export const ContentArea = styled(motion.main)`
  position: relative;
  overflow-y: auto;
  padding: 0;
  z-index: 1;
  height: 100vh;
`;

export const SectionWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const pageTransition = {
  duration: 1.5,
};

export const SkillsContainer = styled.div`
  // background: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem 0rem;
`;

// export const SkillCategory = styled.div`
//   margin-bottom: 1rem;
// `;

// export const SkillCategoryTitle = styled.h3`
//   color: #0ff;
//   margin-bottom: 0.5rem;
// `;

export const Skill = styled(motion.span)`
  background: #0ff;
  color: #000;
  padding: 0.3rem 0.8rem;
  margin: 0.2rem;
  border-radius: 15px;
  display: inline-block;
  font-size: 0.8rem;
`;
