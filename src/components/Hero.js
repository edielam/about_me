import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

const HeroSection = styled(motion.section)`
  height: 100%;
  background: #1e1e1e;
  color: #cfcfcf;
  overflow: hidden;
  position: relative;
`;

const TerminalWindow = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #0ff;
  border-radius: 10px;
  padding: 20px;
  font-family: "Courier New", monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
`;

const TerminalPrompt = styled.div`
  color: #0ff;
  &::before {
    content: "${(props) => props.prompt || "(0xed24):~$ "}";
  }
`;

const TerminalOutput = styled.div`
  color: #0f0;
  margin-top: 10px;
`;
const MenuOption = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 10px 10px;
  &:focus {
    outline: none;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: block;
    margin: 10px 10px;
  }
`;

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const options = ["About Me", "Projects", "Say Hi"];

  useEffect(() => {
    // Set up Three.js scene for particle background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: "#0ff",
      size: 0.05,
    });

    const particlesPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPositions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPositions, 3),
    );
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up Three.js scene
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setSelectedOption((prev) =>
            prev > 0 ? prev - 1 : options.length - 1,
          );
          break;
        case "ArrowDown":
          setSelectedOption((prev) =>
            prev < options.length - 1 ? prev + 1 : 0,
          );
          break;
        case "Enter":
          handleOptionSelect(options[selectedOption]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleOptionSelect = (option) => {
    switch (option.toLowerCase()) {
      case "about me":
        navigate("/0x1");
        break;
      case "projects":
        navigate("/0x2");
        break;
      case "say hi":
        navigate("/0x3");
        break;
      default:
        break;
    }
  };

  return (
    <HeroSection>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <TerminalWindow>
        <TerminalPrompt>cargo new eddy_universe</TerminalPrompt>
        <TerminalOutput>
          Created binary (application) `eddy_universe` package
        </TerminalOutput>
        <TerminalPrompt>cd eddy_universe</TerminalPrompt>
        <TerminalPrompt prompt="(0xed24):~/eddy_universe$ "></TerminalPrompt>
        <TerminalPrompt prompt="(0xed24):~/eddy_universe$ ">
          cargo run
        </TerminalPrompt>
        <TerminalOutput>
          Compiling eddy_universe v0.1.0 (/path/to/eddy_universe) Finished dev
          [unoptimized + debuginfo] target(s) in 0.88s Running
          `target/debug/eddy_universe`
          <br />
          <br />
          Hello, Welcome to My Space!
        </TerminalOutput>
        <TerminalPrompt prompt="(0xed24):~/eddy_universe$ ">
          explore
        </TerminalPrompt>
        <TerminalOutput>Select an option:</TerminalOutput>
        {options.map((option, index) => (
          <MenuOption
            key={option}
            onClick={() => handleOptionSelect(option)}
            onKeyDown={(e) => e.key === "Enter" && handleOptionSelect(option)}
            tabIndex={0}
          >
            {index === selectedOption ? "[x]" : "[ ]"} {option}
          </MenuOption>
        ))}
      </TerminalWindow>
    </HeroSection>
  );
};

export default Hero;
