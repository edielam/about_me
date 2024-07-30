// src/components/ContactForm.js
// import React, { useState } from "react";
// import styled from "styled-components";
// import emailjs from "emailjs-com";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const userID = process.env.REACT_APP_USER_ID;
// const serviceID = process.env.REACT_APP_SERVICE_ID;
// const templateID = process.env.REACT_APP_TEMPLATE_ID;

// const ContactSection = styled(motion.section)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   padding: 2rem 2rem;
//   text-align: center;
//   background: rgba(0, 0, 20, 0.85);
//   left: 0;
// `;
// const ContactContaner = styled(motion.section)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: rgba(0, 100, 100, 0.3);
//   padding: 2rem 2rem;
//   width: 50%;
//   margin-top: 3rem;
//   border-radius: 20px;
// `;
// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   color: #0ff;
//   margin-bottom: 2rem;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 2rem;
// `;

// const SocialIcon = styled(motion.a)`
//   color: #0b3;
//   font-size: 2rem;
//   margin: 0 1rem;
//   &:hover {
//     color: #0f0;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 500px;
// `;

// const Input = styled.input`
//   background: rgba(0, 200, 200, 0.3);
//   border: 1px solid #0ff;
//   border-radius: 5px;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   color: #cfcfcf;
//   font-weight: 600;
//   &:focus {
//     outline: none;
//     border-color: #0f0;
//   }
//   &::placeholder {
//     color: rgba(207, 207, 207, 0.7);
//   }
// `;

// const TextArea = styled.textarea`
//   background: rgba(0, 200, 200, 0.3);
//   border: 1px solid #0ff;
//   border-radius: 5px;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   color: #cfcfcf;
//   resize: vertical;
//   min-height: 100px;
//   font-weight: 600;
//   &:focus {
//     outline: none;
//     border-color: #0f0;
//   }
//   &::placeholder {
//     color: rgba(207, 207, 207, 0.7);
//   }
// `;

// const SubmitButton = styled(motion.button)`
//   background: #0ff;
//   color: #000;
//   border: none;
//   padding: 0.5rem 1rem;
//   font-size: 1rem;
//   cursor: pointer;
//   align-self: flex-start;
// `;

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         serviceID,
//         templateID,
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//         userID,
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Handle success (e.g., show a success message)
//         },
//         (error) => {
//           console.log(error.text);
//           // Handle error (e.g., show an error message)
//         },
//       );

//     // Reset form after sending
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <ContactSection
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <ContactTitle>Get in Touch</ContactTitle>
//       <ContactContaner>
//         <SocialLinks>
//           <SocialIcon
//             href="https://github.com/edielam"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -5 }}
//           >
//             <FaGithub />
//           </SocialIcon>
//           <SocialIcon
//             href="https://www.linkedin.com/in/edward-lampoh-a91338b0/"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -5 }}
//           >
//             <FaLinkedin />
//           </SocialIcon>
//           <SocialIcon
//             href="https://x.com/edie_I_AM"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -5 }}
//           >
//             <FaXTwitter />
//           </SocialIcon>
//         </SocialLinks>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             onChange={handleChange}
//             value={formData.name}
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             onChange={handleChange}
//             value={formData.email}
//           />
//           <TextArea
//             name="message"
//             placeholder="Message"
//             required
//             onChange={handleChange}
//             value={formData.message}
//           />
//           <SubmitButton
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Send Message
//           </SubmitButton>
//         </Form>
//       </ContactContaner>
//     </ContactSection>
//   );
// };

// export default ContactForm;
import React, { useState, useContext } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggler";

const userID = process.env.REACT_APP_USER_ID;
const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;

const FullContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
`;

const ContactSection = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.secondary};
  font-family: "Consolas", "Monaco", monospace;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.secondary};
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const TextArea = styled.textarea`
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s;
  &:hover {
    background: ${(props) => props.theme.primaryHover};
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userID,
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success (e.g., show a success message)
        },
        (error) => {
          console.log(error.text);
          // Handle error (e.g., show an error message)
        },
      );

    // Reset form after sending
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FullContainer theme={theme}>
      <ContactSection theme={theme}>
        <ThemeToggle />
        <ContactTitle>{"// Contact"}</ContactTitle>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/edielam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/edward-lampoh-a91338b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://x.com/edie_I_AM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </SocialIcon>
        </SocialLinks>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <TextArea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
            value={formData.message}
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ContactSection>
    </FullContainer>
  );
};

export default ContactForm;
