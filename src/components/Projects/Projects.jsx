import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
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
      <Container>
        <div className="project-wrapper">
          <div className="section-title-container">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px"><div className="section-title-hr"></div></Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1200} distance="30px"><Title title="Selected projects" className="section-title"/></Fade>
          </div>
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
                <Row key={id}>
                    <Col lg={12} sm={12}>
                    <Fade
                      top={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 20,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                        </a>
                      </div>
                      </Tilt>
                    </Fade>
                  </Col>
                  <Col lg={12} sm={12}>
                    <Fade
                      top={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
