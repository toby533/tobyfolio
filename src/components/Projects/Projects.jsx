import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <div className="project-wrapper">
        <div className="section-title-container">
          <Title title="Selected projects" className="section-title"/>
          <div className="section-title-hr"></div>
        </div>
        {projects.map((project) => {
          const { title, info, url, img, id } = project;

          return (
            <Row key={id}>
                <Col lg={12} sm={12}>
                  <div className="project-wrapper__image">
                    <a
                      href={url}
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                    </a>
                  </div>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={500}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <div className="project-wrapper__verticalAlign">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <p>
                        {info}
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--project"
                        href={url}
                      >
                        See project
                      </a>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
