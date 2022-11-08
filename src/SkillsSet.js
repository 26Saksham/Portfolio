import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faRightLeft
} from "@fortawesome/free-solid-svg-icons";
import { FaPython, FaReact, FaNodeJs,FaJs,FaHtml5,FaCss3,FaJsSquare, FaJava, FaBootstrap, FaNode, FaDesktop, FaDatabase, FaCode, FaCodeBranch } from "react-icons/fa";
import { FcAcceptDatabase } from 'react-icons/fc';
const SkillsSet = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        margin: "7px",
        padding: "10px",
      }}
    >
      <h2>Skills</h2>
      <Container>
        <Row>
          <Col>
            <div className={styles.SkillsMainDiv}>
              <h4>Frontend-Development</h4>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaHtml5 />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>HTML</div>
                    <div>Experience</div>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaCss3 />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>CSS</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaJs />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>JAVA SCRIPT</div>
                    <div>Experience</div>
                  </div>
                </Col>

                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaBootstrap />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>Bootstrap</div>
                    <div>Experience</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaDesktop />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>Tailwind</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaReact />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>React</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div className={styles.SkillsMainDiv}>
              <h4>Backend-Development</h4>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaNodeJs />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>NodeJs</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaDatabase />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>MongoDB</div>
                    <div>Working</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FcAcceptDatabase />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>MY SQL</div>
                    <div>Intermediate</div>
                  </div>
                </Col>

                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaDatabase />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>MariaDB</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaCode />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>Express</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaPython />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>DJango</div>
                    <div>BASIC</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.SkillsMainDiv}>
              <h4>Programming-Languages</h4>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaCode />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>C++</div>
                    <div>Experience</div>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaPython />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>Python</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div className={styles.SkillsMainDiv}>
              <h4>AI-ML</h4>
              <Row>
                <Col style={{ display: "flex" }}>
                  <div className={styles.SkillsSetIcon}>
                    <FaPython />
                  </div>
                  <div className={styles.SkillsSetDescription}>
                    <div>Python</div>
                    <div>Intermediate</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillsSet;