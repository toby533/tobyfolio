import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
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
        {projects.map((project) => {
          const { title, info, tag, url, img, id } = project;

          return (
            <Row key={id}>
              <Col lg={12} sm={12}>
                  <div className="project-wrapper__image">
                    <a
                      href={url}
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                    <Fade bottom={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="50px">
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                    </Fade>
                    </a>
                  </div>
              </Col>
              <Col lg={12} sm={12}>
                <Fade bottom={isDesktop} bottom={isMobile} duration={1000} delay={700} distance="50px">
                  <div className="project-wrapper__text">
                    <div className="project-wrapper__verticalAlign">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <p>
                        {info}
                      </p>
                      <p className="tag">
                        {tag}
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cool-link"
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
