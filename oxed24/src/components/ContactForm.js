
// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const userID = process.env.REACT_APP_USER_ID;
const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;

const ContactSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: #0ff;
  font-size: 2rem;
  margin: 0 1rem;
  &:hover {
    color: #0f0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #0ff;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #cfcfcf;
  &:focus {
    outline: none;
    border-color: #0f0;
  }
`;

const TextArea = styled.textarea`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #0ff;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #cfcfcf;
  resize: vertical;
  min-height: 100px;
  &:focus {
    outline: none;
    border-color: #0f0;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #0ff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, userID)
      .then((result) => {
        console.log(result.text);
        // Handle success (e.g., show a success message)
      }, (error) => {
        console.log(error.text);
        // Handle error (e.g., show an error message)
      });

    // Reset form after sending
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactTitle>Get in Touch</ContactTitle>
      <SocialLinks>
        <SocialIcon href="https://github.com/edielam" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/edward-lampoh-a91338b0/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://x.com/edie_I_AM" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
          <FaXTwitter />
        </SocialIcon>
      </SocialLinks>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
        <Input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
        <TextArea name="message" placeholder="Message" required onChange={handleChange} value={formData.message} />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;

// // src/components/ContactForm.js
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const ContactSection = styled(motion.section)`
//   grid-area: contact;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 4em 2em;
//   background: #1e1e1e;
//   color: #cfcfcf;
// `;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   color: #0ff;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 80%;
//   max-width: 600px;
//   background: rgba(0, 0, 0, 0.7);
//   padding: 2em;
//   border: 2px solid #0ff;
//   border-radius: 10px;
//   box-shadow: 0 0 20px #0ff;
// `;

// const Input = styled.input`
//   margin-bottom: 1em;
//   padding: 0.5em;
//   font-size: 1rem;
//   color: #cfcfcf;
//   background: #121212;
//   border: none;
//   border-bottom: 2px solid #0ff;
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid #0f0;
//   }
// `;

// const Textarea = styled.textarea`
//   margin-bottom: 1em;
//   padding: 0.5em;
//   font-size: 1rem;
//   color: #cfcfcf;
//   background: #121212;
//   border: none;
//   border-bottom: 2px solid #0ff;
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid #0f0;
//   }
// `;

// const SubmitButton = styled.button`
//   padding: 0.5em;
//   font-size: 1rem;
//   color: #0ff;
//   background: #121212;
//   border: 2px solid #0ff;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background: #0ff;
//     color: #121212;
//   }
// `;

// const ContactForm = () => {
//   return (
//     <ContactSection
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <ContactTitle>Contact Me</ContactTitle>
//       <Form>
//         <Input type="text" placeholder="Name" />
//         <Input type="email" placeholder="Email" />
//         <Textarea rows="5" placeholder="Message" />
//         <SubmitButton type="submit">Send</SubmitButton>
//       </Form>
//     </ContactSection>
//   );
// };

// export default ContactForm;
