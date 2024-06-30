// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled(motion.section)`
  grid-area: contact;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  border: 2px solid #0ff;
  border-radius: 10px;
  box-shadow: 0 0 20px #0ff;
`;

const Input = styled.input`
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 1rem;
  color: #cfcfcf;
  background: #121212;
  border: none;
  border-bottom: 2px solid #0ff;
  &:focus {
    outline: none;
    border-bottom: 2px solid #0f0;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 1rem;
  color: #cfcfcf;
  background: #121212;
  border: none;
  border-bottom: 2px solid #0ff;
  &:focus {
    outline: none;
    border-bottom: 2px solid #0f0;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5em;
  font-size: 1rem;
  color: #0ff;
  background: #121212;
  border: 2px solid #0ff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0ff;
    color: #121212;
  }
`;

const ContactForm = () => {
  return (
    <ContactSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContactTitle>Contact Me</ContactTitle>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea rows="5" placeholder="Message" />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;
