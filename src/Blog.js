
import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook,FaCertificate,FaCode,FaCss3, FaLayerGroup,FaPython, FaWindows} from "react-icons/fa";
import Button from '@mui/material/Button';
import Intenship from './File/intenship.pdf';
import Project from './File/project.pdf';
import WebD from './File/webD.pdf';
const Blog=()=>{
    
    return (
      <div>
        <div style={{ background: "rgb(22 81 85)" }}>
          <Work />
        </div>
        <ToolUsed />
      </div>
    );
}
const Work=()=>{
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "aliceblue" }}>
        Experience and Work
      </h1>
      <Container>
        <Row style={{ color: "black" }}>
          <Col>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: "rgb(12 141 155)", color: "white" }}
                icon={<FaBook />}
              >
                <h3 className="vertical-timeline-element-title">
                  E-CELL Tech Club
                </h3>
                <p>Core-member of Event and PR Team</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                icon={<FaLayerGroup />}
              >
                <h3 className="vertical-timeline-element-title">ACM</h3>
                <p>Member of ACM Family</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2022 - june 2022"
                iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                icon={<FaPython />}
              >
                <h3 className="vertical-timeline-element-title">One Stop</h3>
                <h4>Intenship</h4>
                <p>
                  In the Internship, I'm working on Fashion Design System to
                  predict, visualize, and lot's new things learned during the
                  Internship
                </p>
                <OneStopDownload />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="june 2021 - jan 2022"
                iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                icon={<FaPython />}
              >
                <h3 className="vertical-timeline-element-title">One Stop</h3>

                <p>
                  It is a training Period, Initially, I don't know about Machine
                  learning and Deep learning, during the training they teach me
                  a lot and make 3 Projects on Deep learning and Machine
                  Learning
                </p>
                <OneStopTraing />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="june 2021 - jan 2022"
                iconStyle={{ background: "rgb(12 141 155)", color: "#fff" }}
                icon={<FaCss3 />}
              >
                <h3 className="vertical-timeline-element-title">Two wait's</h3>
                <h3>Intenship web Development</h3>
                <p>
                  This is a one month internship, during this period we carry
                  out 4 tasks and learn more about web development.
                </p>
                <WebDevlopButton />
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const ToolUsed=()=>{
  return (
    <div style={{ textAlign: "center", background: "#5c8589",color:"black",padding:"25px" }}>
      <h1>Tool Used</h1>
      Operating system: Windows <FaWindows/><br></br>
      IDE: VsCode <FaCode/> for Web Development and Competitive Coding<br></br>
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
          <FaCertificate style={{ color: "yellow" }} />
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
          Download <FaCertificate style={{ color: "yellow" }} />
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
          Download <FaCertificate style={{ color: "yellow" }} />
        </Button>
      </a>
    </div>
  );
};
export default Blog;
