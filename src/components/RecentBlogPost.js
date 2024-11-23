// src/components/RecentBlogPost.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogCard = styled(motion.div)`
  background: #1e1e1e;
  border: 1px solid #0ff;
  border-radius: 10px;
  margin: 1em;
  padding: 2em;
  width: 45%;
  text-align: left;
  &:hover {
    border-color: #0f0;
  }
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #0f0;
`;

const BlogDescription = styled.p`
  font-size: 1.2rem;
  color: #cfcfcf;
`;

const BlogLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5em 1em;
  margin-top: 1em;
  font-size: 1rem;
  color: #000;
  background: #0ff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #0f0;
  }
`;

const RecentBlogPost = () => {
  return (
    <BlogCard
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <BlogTitle>Recent Blog: Debugging React Applications</BlogTitle>
      <BlogDescription>
        Learn about common but troublesome challenges in React applications and how to effectively debug them.
      </BlogDescription>
      <BlogLink
        href="#blog"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Read More
      </BlogLink>
    </BlogCard>
  );
};

export default RecentBlogPost;
