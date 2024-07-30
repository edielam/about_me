// import styled from "styled-components";
// import { motion } from "framer-motion";

// export const AppContainer = styled.div`
//   display: grid;
//   grid-template-columns: 250px 1fr;
//   height: 100vh;
//   background: #0e2a47;
//   color: #cfcfcf;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const Sidebar = styled.nav`
//   background: #0a1f35;
//   display: flex;
//   min-height: 100vh;
//   padding: 1rem;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 250px;
//   z-index: 10;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: 0;
//     transform: ${({ isOpen }) =>
//       isOpen ? "translateX(0)" : "translateX(-100%)"};
//   }
// `;
// export const PhotoContainer = styled.div`
//   margin-top: 3rem;
//   margin-bottom: 3rem;
//   width: 4rem;
//   height: 4rem;
//   border-radius: 30%;
//   overflow: hidden;
//   border: 2px solid #0ff;
// `;
// export const MenuButton = styled.button`
//   display: none;
//   position: fixed;
//   top: 1rem;
//   left: 1rem;
//   z-index: 20;
//   background: none;
//   border: none;
//   color: #0b3;
//   font-size: 2rem;
//   cursor: pointer;
//   &:hover {
//     color: #0f0;
//   }

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;
// export const Photo = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// export const NavItem = styled(motion.button)`
//   background: none;
//   border: none;
//   color: #0ff;
//   font-size: 1.2rem;
//   margin: 1rem 0;
//   cursor: pointer;
//   &:hover {
//     color: #0f0;
//   }
// `;
import styled from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
  background: #0e2a47;
  color: #cfcfcf;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.nav`
  background: #252526;
  display: flex;
  min-height: 100vh;
  padding-left: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 220px;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid #333;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const PhotoContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #569cd6;
`;

export const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 20;
  background: none;
  border: none;
  color: #569cd6;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #4ec9b0;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavItem = styled(motion.button)`
  background: none;
  border: none;
  color: #d4d4d4;
  font-size: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2d2d2d;
    color: #569cd6;
  }
`;

export const BackSea = styled(motion.section)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.8);
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
  width: 100%;
`;

export const SectionWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
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

export const Skill = styled(motion.span)`
  background: #0ff;
  color: #000;
  padding: 0.3rem 0.8rem;
  margin: 0.2rem;
  border-radius: 15px;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
`;
// export const SkillCategory = styled.div`
//   margin-bottom: 1rem;
// `;

// export const SkillCategoryTitle = styled.h3`
//   color: #0ff;
//   margin-bottom: 0.5rem;
// `;
