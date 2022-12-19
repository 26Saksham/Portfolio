import React from 'react';
import styles from './style.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { style, width } from '@mui/system';
import img from './about.png';
import Title from "react-vanilla-tilt";
import Tilt from 'react-vanilla-tilt'
import Resume from "./File/saksham.pdf";

import { Button } from "@mui/material";
import SkillsSet from './SkillsSet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {FcDownload} from  "react-icons/fc";
import { FaPython, FaReact, FaNodeJs,FaJs,FaHtml5,FaCss3,FaJsSquare, FaAlignLeft, FaArrowLeft, FaArrowRight, FaArrowDown } from "react-icons/fa";
import {

  faMedal,
  faLaptop,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
const About=()=>{
return (
  <div style={{ background: "#14274E", padding: "50px" }}>
    <h2 style={{ textAlign: "center", color: "white" }}>About <FaArrowDown/> </h2>
  
    <Container>
      <Row>
        <Col>
          <AboutPhoto />
        </Col>
        <Col className={styles.AboutSkillsDiv}>
          <AboutSkills />
        </Col>
      </Row>
      <Row>
        <SkillsSet />
      </Row>
    </Container>
  </div>
);
}
const AboutSkills=()=>{
    return (
      <div>
        <p className={styles.AboutLine}>
          Hello I'm Saksham Gupta , Want to pursue my career in Software
          Development by learning from different phases that I encounter in my
          life and apply this learning in my coming unforeseen future. Ready to
          accept challenges and hone my skills every day.Thankyou Everyone!
        </p>
        <ResumeButton />
        <Container>
          <Row>
            <Col>
              <div className={styles.aboutDiv} id={styles.experience}>
                <div className={styles.aboutIcon}>
                  <FontAwesomeIcon icon={faMedal} />
                </div>
                <div className={styles.aboutHeading}>Experience</div>
                <div className={styles.aboutBottomLine}>3 Month+</div>
              </div>
            </Col>
            <Col>
              <div className={styles.aboutDiv}>
                <div className={styles.aboutIcon}>
                  <FontAwesomeIcon icon={faLaptop} />
                </div>
                <div className={styles.aboutHeading}>Project</div>
                <div className={styles.aboutBottomLine}>6+ completed</div>
              </div>
            </Col>
            <Col>
              <div className={styles.aboutDiv} id={styles.computer}>
                <div className={styles.aboutIcon}>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className={styles.aboutHeading}>CP</div>
                <div className={styles.aboutBottomLine}>2 Year+</div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="skills"></div>
      </div>
    );
}
const ResumeButton = () => {
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href={Resume}
        download="Saksham Resume"
        target="_blank"
      >
        <Button
          style={{
            border: "1px solid",
            color: "white",
            borderBottomStyle: "groove",
            margin: "10px",
            left:"10px",
            padding: "10px",
          }}
        >
          Download CV <FcDownload size="20px" />
        </Button>
      </a>
    </div>
  );
};
const AboutPhoto=()=>{
    return (
      <div style={{ marginTop: "10%" }} className={styles.AboutBox}>
        <div className={styles.outerBox}>
          <Tilt style={{background:"none"}}>
            <div className={styles.innerBox}></div>
          </Tilt>
        </div>
      </div>
    );
}

export default About;