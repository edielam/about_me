// src/components/RecentBlogPost.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background: #f0f0f0;
  color: #333;
`;

const BlogTitle = styled.h3`
  font-size: 2rem;
  color: #0070f3;
`;

const BlogExcerpt = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const BlogLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5em 1em;
  margin-top: 1em;
  font-size: 1rem;
  color: #fff;
  background: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #005bb5;
  }
`;

const RecentBlogPost = () => {
  return (
    <BlogSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BlogTitle>Recent Blog Post: Concurrency Programming with Rust</BlogTitle>
      <BlogExcerpt>
        Learn about advanced concurrency programming techniques in Rust to build efficient and safe applications.
      </BlogExcerpt>
      <BlogLink
        href="#blog"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Read More
      </BlogLink>
    </BlogSection>
  );
};

export default RecentBlogPost;
