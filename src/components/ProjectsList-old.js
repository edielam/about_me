// src/components/ProjectsList.js
import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import fontJson from "../assets/helvetiker_regular.typeface.json"; // Make sure to have a font JSON file
import "../extend";
extend({ TextGeometry });

const ProjectsSection = styled.section`
  grid-area: projects;
  height: 500px;
  padding: 4em 2em;
  background: #121212;
  color: #cfcfcf;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  text-align: center;
`;

const ProjectsList2 = () => {
  const font = new FontLoader().parse(fontJson);
  const projects = [
    {
      title: "Lever",
      description:
        "A real-time p2p collaborative code editor with an embedded terminal and compute sharing using an isolated runtime environment. Technologies: Tauri, Rust, React, WebSocket, libp2p, Docker Swarm.",
    },
    {
      title: "Oxterm",
      description:
        "A basic terminal emulator built from scratch using Rust. Technologies: Rust.",
    },
    {
      title: "Jeflix",
      description:
        "A MERN stack clone of Netflix. Technologies: MongoDB, Express, React, Node.js.",
    },
    {
      title: "TCP from Scratch",
      description: "Implemented TCP from scratch in Rust. Technologies: Rust.",
    },
  ];

  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <OrbitControls />
        <Stars />
        {projects.map((project, index) => (
          <mesh key={index} position={[index * 2 - projects.length, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0ff" />
            <textGeometry
              attach="geometry"
              args={[project.title, { font, size: 0.2, height: 0.05 }]}
            />
            <meshStandardMaterial attach="material" color="#0ff" />
          </mesh>
        ))}
      </Canvas>
    </ProjectsSection>
  );
};

export default ProjectsList2;
