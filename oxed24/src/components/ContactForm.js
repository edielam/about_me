// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
  background: #1e1e1e;
  color: #cfcfcf;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid #0ff;
  border-radius: 5px;
  background: #121212;
  color: #cfcfcf;
  &:focus {
    border-color: #0f0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid #0ff;
  border-radius: 5px;
  background: #121212;
  color: #cfcfcf;
  &:focus {
    border-color: #0f0;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1em 2em;
  margin-top: 1em;
  font-size: 1.2rem;
  color: #fff;
  background: #0ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0f0;
  }
`;

const Contact = () => {
  return (
    <ContactSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea rows="5" placeholder="Message" required />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
