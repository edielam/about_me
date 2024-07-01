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
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  position: absolute;
`;

export const ContentArea = styled(motion.main)`
  position: relative;
  overflow-y: auto;
  padding: 0rem;
  z-index: 1;
`;

export const SectionWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};
