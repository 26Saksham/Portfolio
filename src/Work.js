import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
  CCard,
  CCardHeader,
  CCardImage,
  CCardBody,
  CCardText,
  CCardFooter,
  CButton
} from "@coreui/react";
const AboutImages = require.context("../src/image");
// const i = AboutImages("./t.jpg");
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Work =()=> {

  return (
    <div
      style={{ background: "rgb(57 72 103)", color: "white", padding: "50px" }}
    >
      <h1 style={{ textAlign: "center" }}>Project Exhibition </h1>

      <WebDevelopment />
      <AlML />
      <h1 style={{ textAlign: "center" }}>Achievement </h1>

      <CPDSA />
    </div>
  );
  }


const WebDevelopment = () => {
  return (
    <div>

      <h3 className={styles.navItemHeadings}>Web Development</h3>
      <div>
        <Carousel responsive={responsive} style={{ margin: "2px" }}>
          <div style={{ marginLeft: "10px" }}>
            <CCard
              style={{
                width: "18rem",
                border: "1px solid yellow",
                height: "1000%",
              }}
            >
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                Club Management
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  orientation="top"
                  alt="img"
                  src={AboutImages("./clubo.png")}
                />
                <CCardText style={{ color: "black" }}>
                  <b> Club Management System</b>
                  <p>This will help to manage all the event and teams</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://github.com/sonejamohit/cluboCMS"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                Criminal Face Recognition
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="120px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./facedet.png")}
                />
                <CCardText>
                  <b> Criminal Face Recognition using Face Api</b>
                  <p>This will search the photo in our Database</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://github.com/26Saksham/microsoft"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
      
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                Blog App
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="130px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./blog.png")}
                />
                <CCardText>
                  <b> Blog App </b>
                  <p>
                    For Update/notice of university and you can ask question also.
                  </p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://github.com/hemang5902/Sports_club-management"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};
const AlML = () => {
  return (
    <div>
      {/* <NavBarItem /> */}

      <h3 className={styles.navItemHeadings}>AI-ML</h3>
      <div>
        <Carousel responsive={responsive} style={{ margin: "2px" }}>
          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                Real Estate House Price Prediction
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="105px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./realState.jpg")}
                />
                <CCardText>
                  <b> Real Estate House Price Prediction </b>
                  <p>
                    Enter the detail , and Predict the house Pricing with great
                    accuracy
                  </p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://github.com/26Saksham/MACHINE-LEARNIG/blob/main/House%20%20price%20prediction.ipynb"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                Celebrity Face Recognition Model
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="130px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./CELE.jpg")}
                />
                <CCardText>
                  <b>Celebrity Face Recognition Model </b>
                  <p>Find the Celebrity using inserting the Image</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="#"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
const CPDSA = () => {
  return (
    <div>
      {/* <NavBarItem /> */}
      <h3 className={styles.navItemHeadings}>Competitive Programming</h3>
      <div>
        <Carousel responsive={responsive} style={{ margin: "2px" }}>
          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                LEETCODE
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="105px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./leetcode.jpg")}
                />
                <CCardText>
                  <b> 1600+ rating </b>
                  <p>You can check Now.</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://leetcode.com/Shaksham26/"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                HACKERRANK
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="105px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./hackerrank.jpg")}
                />
                <CCardText>
                  <b> 5⭐ in Cpp,Problem Solving,SQL</b>
                  <p>You can check Now.</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://www.hackerrank.com/shakshamneekhra1?hr_r=1"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <CCard style={{ width: "18rem", color: "black" }}>
              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
              <CCardHeader
                style={{
                  textAlign: "center",
                  color: "rgb(20 39 78)",
                  fontWeight: "bold",
                }}
              >
                CODECHEF
              </CCardHeader>
              <CCardBody style={{ height: "250px" }}>
                <CCardImage
                  height="105px"
                  orientation="top"
                  alt="image"
                  src={AboutImages("./codechef.jpg")}
                />
                <CCardText>
                  <b> 3⭐|| 1650 rating </b>
                  <p>You can check Now.</p>
                </CCardText>
              </CCardBody>
              <CCardFooter style={{ textAlign: "center" }}>
                <CButton
                  style={{ backgroundColor: "rgb(20 39 78)", border: "#FFB800" }}
                  href="https://www.codechef.com/users/shaksham26"
                >
                  View Project
                </CButton>
              </CCardFooter>
            </CCard>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Work;
