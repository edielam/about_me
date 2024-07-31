import React, { useContext } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggler";
import { ThemeContext } from "./ThemeContext";

const AboutSection = styled.section`
  margin: 0rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: "Consolas", "Monaco", monospace;
  height: 120%;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

const PullQuote = styled.blockquote`
  font-size: 1rem;
  color: ${(props) => props.theme.accent};
  border-left: 3px solid ${(props) => props.theme.primary};
  padding-left: 1rem;
  margin: 1rem 0;
`;

const CodeSnippet = styled.pre`
  background: ${(props) => props.theme.codeBackground};
  color: ${(props) => props.theme.codeText};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
`;

const About2 = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutSection theme={theme}>
      <ThemeToggle />
      <AboutTitle theme={theme}>About Me</AboutTitle>
      <Section>
        <SectionTitle theme={theme}>{"// Background"}</SectionTitle>
        <AboutText theme={theme}>
          Biomedical Engineer turned Software Developer. Six years of experience
          in tech, with a focus on AI and cross-disciplinary applications.
        </AboutText>
      </Section>
      <Section>
        <SectionTitle theme={theme}>{"// Philosophy"}</SectionTitle>
        <PullQuote theme={theme}>
          "The art of programming is the art of organizing complexity." ~ Edsger
          W. Dijkstra
        </PullQuote>
        <AboutText theme={theme}>
          I've always been captivated by Edsger W. Dijkstra's idea that "The art
          of programming is the art of organizing complexity." To me, this quote
          underlines the beauty of coding: transforming chaos into order. It's
          what motivates me to keep refining my skills and embrace new and often
          tougher challenges. By embracing this philosophy, I strive to push my
          boundaries and develop innovative solutions that not only streamline
          my work but also fuel my passion for programming.
        </AboutText>
      </Section>
      {/* <Section>
        <SectionTitle theme={theme}>
          {"// Recent Project: CortexCode"}
        </SectionTitle>
        <AboutText theme={theme}>
          A peer-to-peer collaborative code editor with runtime environment for
          compute sharing. Built with Rust and Tauri for optimal performance and
          resource efficiency.
        </AboutText>
        <CodeSnippet theme={theme}>
          {`
// WebRTC DTLS Handshake certificate
async fn read_or_create_certificate(path: &Path) -> Result<Certificate> {
    if path.exists() {
        let pem = fs::read_to_string(&path).await?;

        info!("Using existing certificate from {}", path.display());

        return Ok(Certificate::from_pem(&pem)?);
    }

    let cert = Certificate::generate(&mut rand::thread_rng())?;
    fs::write(&path, &cert.serialize_pem().as_bytes()).await?;

    info!(
        "Generated new certificate and wrote it to {}",
        path.display()
    );

    Ok(cert)
}
          `}
        </CodeSnippet>
      </Section> */}
      <Section>
        <SectionTitle theme={theme}>{"// Skills"}</SectionTitle>
        <CodeSnippet theme={theme}>
          {`
const skills = [
  "Rust", "Python", "JavaScript",
  "AI/Machine Learning",
  "Distributed Systems",
  "Full-Stack Development",
  "System Design",
  "Performance Optimization"
];
          `}
        </CodeSnippet>
      </Section>
      <Section>
        <SectionTitle theme={theme}>{"// Current Focus"}</SectionTitle>
        <AboutText theme={theme}>
          Exploring concurrency patterns in Rust, diving deeper into distributed
          systems, and contributing to open-source projects in the AI and
          developer tools space.
        </AboutText>
      </Section>
    </AboutSection>
  );
};

export default About2;
