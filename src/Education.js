import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBicycle, FaBook,FaLanguage,FaMountain,FaPen ,FaPlane,FaSchool, FaTv} from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from './style.module.css';
import { GiTennisRacket, GiConsoleController   } from "react-icons/gi";
const Education=()=>{
    return (
      <div>
        <div
          style={{
            background: "#14274E",
            color: "white",
          
          }}
        
        >
          <h1 style={{ textAlign: "center" }}>Education</h1>
          <Container>
            <Row>
              <Col style={{ color: "white" }}>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - present"
                    iconStyle={{
                      background: "rgb(17 45 78)",
                      color: "white",
                    }}
                    icon={<FaBook />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{ color: "#112d4e" }}
                    >
                      BE, Institute of technology in Indore, Madhya Pradesh
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{ color: "#112d4e" }}
                    >
                      Currently in 3rd Year
                    </h4>
                    <p style={{ color: "#112d4e" }}>Current CGPA - 8.5</p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: "rgb(17 45 78)", color: "#fff" }}
                    icon={<FaSchool />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{ color: "#112d4e" }}
                    >
                      High secondary, Ideal Cambridge Higher Secondary School
                    </h3>
                    <p style={{ color: "#112d4e" }}>Score - 78%</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2017"
                    iconStyle={{ background: "rgb(17 45 78)", color: "#fff" }}
                    icon={<FaPen />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{ color: "#112d4e" }}
                    >
                      Secondary School, The Prime Academy
                    </h3>

                    <p style={{ color: "#112d4e" }}>
                      Head of Class<br></br>
                      Score - 81.3%
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </Col>
            </Row>
          </Container>
        </div>
        <Language />
        <Interset />
      </div>
    );
}
const Language = () => {
  return (
    <div style={{ background: "rgb(20, 39, 78)", color: "white" }}>
      <h1
        style={{ textAlign: "center" }}
      >
        Language <FaLanguage />
      </h1>
      <div>
        <Container>
          <Row>
            <Col md={2}>
              <h4>Hindi</h4>
              <p>Native</p>
            </Col>
            <Col>
              <ProgressBar
                customLabel="HINDI"
                completed="90"
                bgColor="rgb(57 72 103)"
                labelAlignment="center"
                animateOnRender="true"
                initCompletedOnAnimation="0"
                transitionDuration="3s"
              />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h4>English</h4>
              <p>Professional</p>
            </Col>
            <Col>
              <ProgressBar
                customLabel="English"
                completed="75"
                bgColor="rgb(57 72 103)"
                labelAlignment="center"
                animateOnRender="true"
                initCompletedOnAnimation="0"
                transitionDuration="3s"
              />
            </Col>
          </Row>
          <Row>
            <Col md={2} style={{ padding: "2px" }}>
              <h4>Bundelkhandi</h4>
              <p>Native</p>
            </Col>
            <Col>
              <ProgressBar
                customLabel="Bundelkhandi"
                completed="90"
                bgColor="rgb(57 72 103)"
                labelAlignment="center"
                animateOnRender="true"
                initCompletedOnAnimation="0"
                transitionDuration="3s"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
const Interset=()=>{
    return (
      <div
        style={{
          textAlign: "center",
          background: "rgb(20, 39, 78)",
          color: "white",
          padding: "4px",
        }}
      >
        <h1>Interests</h1>
        <span>What I Like</span>
        <Container style={{ padding: "15px", textAlign: "center" }}>
          <Row>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <FaMountain size="8rem" />
                <h5>Mountain Climbing</h5>
              </div>
            </Col>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <FaPlane size="8rem" />
                <h5>Travel</h5>
              </div>
            </Col>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <FaBicycle size="8rem" />
                <h5>Biking</h5>
              </div>
            </Col>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <FaTv size="8rem" />
                <h5>
                  Movies <br></br> and Web-series
                </h5>
              </div>
            </Col>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <GiTennisRacket size="8rem" />
                <h5>Badminton </h5>
              </div>
            </Col>
            <Col className={styles.IntersetDiv}>
              <div className={styles.IntersetCard}>
                <GiConsoleController size="8rem" />
                <h5>Gaming </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Education;