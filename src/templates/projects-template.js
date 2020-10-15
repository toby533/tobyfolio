import React, { useEffect, useState } from 'react';
import { graphql } from "gatsby";
import ProjectImg from '../components/Image/ProjectImg';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  
  return (
    <div className="projects-container">
      <div className="projects-template-img">
          <ProjectImg alt={post.frontmatter.img} filename={post.frontmatter.img} />
      </div>
      <div className="projects-template-text">
        <div className="back-button"><a href="/" alt="back button"><i class="fa fa-long-arrow-left"></i></a></div>
        <h2>{post.frontmatter.keywords}</h2>
        <h1>{post.frontmatter.title}</h1>
        <p className="project-text en">{post.frontmatter.text_en}</p>
        <p className="project-text fr">{post.frontmatter.text_fr}</p>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        img
        text_en
        text_fr
      }
    }
  }
`