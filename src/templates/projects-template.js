import React, { useContext, useEffect, useState } from 'react';
import { graphql } from "gatsby";
import Fade from 'react-reveal/Fade';
import {Row, Col } from 'react-bootstrap';
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
    <div>
      <Row>
        <Col lg={8} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="Projects-template-img">
            <ProjectImg alt={post.frontmatter.title} filename={post.frontmatter.title} />
          </div>
        </Fade>
        </Col>
        <Col lg={4} sm={12}>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          <p className="project-text_en">{post.frontmatter.text_en}</p>
          <p className="project-text_fr">{post.frontmatter.text_fr}</p>
        </Col>
      </Row>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        text_en
        text_fr
      }
    }
  }
`