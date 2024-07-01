// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getBlogPosts } from '../utils/notion';

const BlogSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const BlogTitle = styled.h2`
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const BlogCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid #0ff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogPostTitle = styled.h3`
  font-size: 1.5rem;
  color: #0f0;
  margin-bottom: 1rem;
`;

const BlogPostSnippet = styled.p`
  font-size: 1rem;
  color: #cfcfcf;
`;

const BlogPostDate = styled.span`
  font-size: 0.9rem;
  color: #0ff;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: #ff4136;
  font-size: 1.2rem;
`;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (err) {
        setError("Failed to fetch blog posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return (
      <BlogSection>
        <BlogTitle>Blog Posts</BlogTitle>
        <ErrorMessage>{error}</ErrorMessage>
      </BlogSection>
    );
  }

  return (
    <BlogSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlogTitle>Blog Posts</BlogTitle>
      {posts.length === 0 ? (
        <p>Loading blog posts...</p>
      ) : (
        <BlogGrid>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BlogPostTitle>{post.title}</BlogPostTitle>
              <BlogPostSnippet>{post.snippet}</BlogPostSnippet>
              <BlogPostDate>{new Date(post.date).toLocaleDateString()}</BlogPostDate>
            </BlogCard>
          ))}
        </BlogGrid>
      )}
    </BlogSection>
  );
};

export default BlogList;
