import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBatteryEmpty, FaBicycle, FaBook,FaLanguage,FaMountain,FaPen ,FaPlane,FaSchool, FaTv} from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgress } from '@mui/material';
import styles from './style.module.css';
import { GiTennisRacket, GiConsoleController   } from "react-icons/gi";
const Education=()=>{
    return (
      <div>
        <div style={{ background: "#165155", color: "black" }}>
          <h1 style={{ textAlign: "center" }}>Education</h1>
          <Container>
            <Row>
              <Col style={{ color: "black" }}>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - present"
                    iconStyle={{
                      background: "rgb(12 141 155)",
                      color: "white",
                    }}
                    icon={<FaBook />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      BE, Institute of technology in Indore, Madhya Pradesh
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Currently in 3rd Year
                    </h4>
                    <p>
                      1st year Score - 86% <br></br>2nd Year Score - 84%
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                    icon={<FaSchool />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      High secondary, Ideal Cambridge Higher Secondary School
                    </h3>
                    <p>Score - 78%</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2017"
                    iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                    icon={<FaPen />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Secondary School, The Prime Academy
                    </h3>

                    <p>
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
        <Interset/>
      </div>
    );
}
const Language = () => {
  return (
    <div style={{ background: "#557b7f", color: "black" }}>
      <h1
        style={{ textAlign: "center", background: "#557b7f", color: "black" }}
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
                completed="80"
                bgColor="#3a888d"
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
                completed="65"
                bgColor="#3a888d"
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
                completed="80"
                bgColor="#3a888d"
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
          background: "#165155",
          color: "black",
          padding: "4px",
        }}
      >
        <h1>Interests</h1>
        <span>What I Like</span>
        <Container
          style={{ padding: "15px", textAlign: "center" }}
        >
          <Row>
            <Col>
              <div className={styles.IntersetCard}>
                <FaMountain size="8rem" />
                <h5>Mountain Climbing</h5>
              </div>
            </Col>
            <Col>
              <div className={styles.IntersetCard}>
                <FaPlane size="8rem" />
                <h5>Travel</h5>
              </div>
            </Col>
            <Col>
              <div className={styles.IntersetCard}>
                <FaBicycle size="8rem" />
                <h5>Biking</h5>
              </div>
            </Col>
            <Col>
              <div className={styles.IntersetCard}>
                <FaTv size="8rem" />
                <h5>
                  Movies <br></br> and Web-series
                </h5>
              </div>
            </Col>
            <Col>
              <div className={styles.IntersetCard}>
                <GiTennisRacket size="8rem" />
                <h5>Badminton </h5>
              </div>
            </Col>
            <Col>
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