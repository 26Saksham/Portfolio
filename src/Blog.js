
import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook,FaCertificate,FaCode,FaCodepen,FaCss3, FaDownload, FaLayerGroup,FaPython, FaWindows} from "react-icons/fa";
import Button from '@mui/material/Button';
import Intenship from './File/intenship.pdf';
import Project from './File/project.pdf';
import WebD from './File/webD.pdf';
import Work from './Work.js';
const Blog=()=>{
    
    return (
      <div>
   
        <div style={{ background: "#394867" }}>
          <Experience />
        </div>
        <ToolUsed />
      </div>
    );
}
const Experience = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#D7C49EFF" }}>
        Experience and Work
      </h1>
      <Container>
        <Row style={{ color: "white" }}>
          <Col>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2022 - Nov 2022"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaCodepen />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  JMD Studio
                </h3>
                <p style={{ color: "#343148FF" }}>
                  I'm working as a backend team member, working on two major
                  projects , mainly working on build API and bug solving.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2022 - june 2022"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaPython />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  One Stop
                </h3>
                <h4 style={{ color: "#343148FF" }}>Intenship</h4>
                <p style={{ color: "#343148FF" }}>
                  In the Internship, I'm working on Fashion Design System to
                  predict, visualize, and lot's new things learned during the
                  Internship
                </p>
                <OneStopDownload />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="june 2021 - jan 2022"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaPython />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  One Stop
                </h3>

                <p style={{ color: "#343148FF" }}>
                  It is a training Period, Initially, I don't know about Machine
                  learning and Deep learning, during the training they teach me
                  a lot and make 3 Projects on Deep learning and Machine
                  Learning
                </p>
                <OneStopTraing />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="june 2021 - june 2021"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaCss3 />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  Two wait's
                </h3>
                <h3 style={{ color: "#343148FF" }}>
                  Intenship web Development
                </h3>
                <p style={{ color: "#343148FF" }}>
                  This is a one month internship, during this period we carry
                  out 4 tasks and learn more about web development.
                </p>
                <WebDevlopButton />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaBook />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  E-CELL Tech Club
                </h3>
                <p style={{ color: "#343148FF" }}>
                  Core-member of Event and PR Team
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: "#D7C49EFF", color: "#343148FF" }}
                icon={<FaLayerGroup />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "#343148FF" }}
                >
                  ACM
                </h3>
                <p style={{ color: "#343148FF" }}>Member of ACM Family</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const ToolUsed=()=>{
  return (
    <div
      style={{
        textAlign: "center",
        background: "#394867",
        color: "white",
        padding: "25px",
      }}
    >
      <h1 style={{ color: "#D7C49EFF" }}>Tool Used</h1>
      Operating system: Windows <FaWindows />
      <br></br>
      IDE: VsCode <FaCode /> for Web Development and Competitive Coding<br></br>
      ML and Deep learning: Juputer Notebook and Google colab<br></br>
    </div>
  );
}
const OneStopDownload=()=>{
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href={Intenship}
        download="Saksham "
        target="_blank"
      >
        <Button
          style={{
            border: "1px solid",
            color: "black",
            borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "2px",
            margin: "2px",
          }}
          title="Download One Stop Intenship Certificate"
        >
          Download
          <FaDownload style={{ color: "darkblue" }} />
        </Button>
      </a>
    </div>
  );
}
const OneStopTraing = () => {
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href={Project}
        download="Saksham "
        target="_blank"
      >
        <Button
          style={{
            border: "1px solid",
            color: "black",
            borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "2px",
            margin: "2px",
          }}
          title="Download One Stop Project Certificate"
        >
          Download <FaDownload style={{ color: "darkblue" }} />
        </Button>
      </a>
    </div>
  );
};
const WebDevlopButton = () => {
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href={WebD}
        download="Saksham "
        target="_blank"
      >
        <Button
          style={{
            border: "1px solid",
            color: "black",
            borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "2px",
            margin: "2px",
          }}
          title="WEb Development Certificate"
        >
          Download <FaDownload style={{ color: "darkblue" }} />
        </Button>
      </a>
    </div>
  );
};
export default Blog;
