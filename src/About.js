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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Button } from "@mui/material";
import {FcDownload} from  "react-icons/fc";
const About=()=>{
return (
  <div style={{ background: "rgb(92 134 138)", padding: "50px" }}>
    <h2 style={{textAlign:"center",color:"white"}}>About</h2>
    <Container>
      <Row>
        <Col>
          <AboutPhoto />
        </Col>
        <Col className={styles.AboutSkillsDiv}>
          <AboutSkills />
        </Col>
      </Row>
    </Container>
  </div>
);
}
const AboutSkills=()=>{
    return (
      <div>
      
        
        <h1>Saksham Gupta</h1>
        <p>
          Hello I'm Saksham Gupta , web Development , AI - ML , Data Anlaysis
          and one more skills i have that is Competitive Programming
        </p>
        <ResumeButton/>
        <div className="skills">
          <h1>Skills</h1>
          <Container>
            <Row>
              
                <Col className={styles.skillset}>C++</Col>
              

              <Col className={styles.skillset}>DSA</Col>
              <Col className={styles.skillset}>Python</Col>
            </Row>
            <Row>
              <Col className={styles.skillset}>React JS</Col>
              <Col className={styles.skillset}>Node JS</Col>
              <Col className={styles.skillset}>JQuery</Col>
            </Row>
            <Row>
              <Col className={styles.skillset}>HTML</Col>
              <Col className={styles.skillset}>CSS</Col>
              <Col className={styles.skillset}>JAVASCRIPT</Col>
            </Row>
            <Row>
              <Col className={styles.skillset}>Deep leaning</Col>
              <Col className={styles.skillset}> Machine Learning</Col>
              <Col className={styles.skillset}>DataBase</Col>
            </Row>
          </Container>
        </div>
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
            borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "4px",
          }}
        >
          Download Resume <FcDownload size="20px"/>
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