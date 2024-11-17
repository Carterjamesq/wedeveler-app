import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaReact,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { FaWebflow } from "react-icons/fa6";
import { SiWebflow } from "react-icons/si";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountWithAnimation = ({ end, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <span ref={ref} className="display-6">
      <CountUp end={inView ? end : 0} duration={duration} />
      {end === 90 && "%"}
      {end === 92 && "%"}
      {end === 95 && "%"}
      {end === 96 && "%"}
      {end === 99 && "%"}
      {end === 100 && "%"}
    </span>
  );
};

const Skills = () => {
  const boxRef = useRef();

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 800,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, []);
  return (
    <div className="section-padding" ref={boxRef}>
      <div className="col d-flex icon">
        <div className="border rounded-5 px-4 py-2 mb-5">
          <IoCodeSlash />
          <p>Stack / Skills</p>
        </div>
      </div>
      <Container>
        <Row className="gap-4 mb-4">
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaHtml5 />
            </div>
            <div className="col">
              <p>HTML</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={98} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaCss3 />
            </div>
            <div className="col">
              <p>CSS</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={99} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <DiJavascript1 />
            </div>
            <div className="col">
              <p>Java Script</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={90} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaSass />
            </div>
            <div className="col">
              <p>SaaS</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={92} duration={5} />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="gap-4 mb-4">
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaBootstrap />
            </div>
            <div className="col">
              <p>Bootstrap</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={99} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <BiLogoTailwindCss />
            </div>
            <div className="col">
              <p>Tailwind</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={93} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaPhp />
            </div>
            <div className="col">
              <p>PHP</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={90} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaReact />
            </div>
            <div className="col">
              <p>React</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={92} duration={5} />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="gap-4">
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <SiWebpack />
            </div>
            <div className="col">
              <p>Webpack</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={96} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaGithub />
            </div>
            <div className="col">
              <p>Git</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={99} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <FaWordpress />
            </div>
            <div className="col">
              <p>Wordpress</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={99} duration={5} />
              </span>
            </div>
          </Col>
          <Col className="border rounded-5 text-center p-3">
            <div className="col">
              <SiWebflow />
            </div>
            <div className="col">
              <p>Webflow</p>
              <span className="display-6">
                <CountWithAnimation suffix="%" end={100} duration={5} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
