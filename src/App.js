import React from "react";
import About from './About'
import styles from './style.module.css';
import Blog from './Blog'
import Contact from './Contact'

import Education from './Education.js'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backg from "./background1.jpg";
import Resume from './File/saksham.pdf';
import { SocialMediaIconsReact } from "social-media-icons-react";

import "@coreui/coreui/dist/css/coreui.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faBook, faLaptopCode, faPhone, faPerson,faProjectDiagram, faArchive, faToolbox} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Work from "./Work";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltDown, FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";


function App() {
 

return (
  <div>
    <div style={{ background: "#14274E" }}>
      <BrowserRouter>
        <NavBarItem />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Education" element={<Education />} />

          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Work" element={<Work />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  </div>
);
}
const NavBarItem = () => {
  return (
    <div >
      <div 
       
        className={styles.NavbarDiv}
      >
        <Link className={styles.navbaritemHome} to="/">
          <FontAwesomeIcon icon={faHome} title="home" />
        </Link>
        <Link className={styles.navbaritemHome} to="/About">
          <FontAwesomeIcon icon={faPerson} title="About" />
        </Link>
        <Link className={styles.navbaritemHome} to="/Education">
          <FontAwesomeIcon icon={faBook} title="Education" />
        </Link>

        <Link className={styles.navbaritemHome} to="/Blog">
          <FontAwesomeIcon icon={faToolbox} title="Experience" />
        </Link>
        <Link className={styles.navbaritemHome} to="/Work">
          <FontAwesomeIcon icon={faLaptopCode} title="Project" />
        </Link>
        <Link className={styles.navbaritemHome} to="/Contact">
          <FontAwesomeIcon icon={faPhone} title="Contact" />
        </Link>
      </div>
    </div>
  );
};
const Footer=()=>{

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#9BA4B4",
        padding: "15px",
        color: "#14274E",
      }}
    >
      
      <div className={styles.FooterLinkDiv}></div>
      <h3 style={{ font: "bold" }}>Saksham Gupta</h3>
      <p style={{ fontSize: "12px", padding: "15px", textAlign: "bottom" }}>
        &copy;copyright by saksham gupta
      </p>
   
    </div>
  );
}
const Home=()=>{
return (
  <div
    style={{
      backgroundImage: `url(${backg})`,
      height: "700px",
      backgroundSize: "cover",
    }}
    className={styles.homeBackground}
  >
  
    <Container>
      <Row className={styles.HomeScreenIcon}>
        <Col
          // className={styles.HomeIcon}

          style={{
            height: "40rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            "flex-direction": "column",
            flex: "0 0 auto",
            width: "8.33333333%",
          }}
        >
          <span className={styles.socailMediaIcon}>
            <SocialMediaIconsReact
              className={styles.SocialIcons}
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="instagram"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(233,26,98,0.81)"
              iconSize="6"
              roundness="50%"
              url="https://www.instagram.com/sakshamgupta2002/"
              size="50
"
            />
          </span>
          <span className={styles.socailMediaIcon}>
            <SocialMediaIconsReact
              className={styles.SocialIcons}
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="4"
              borderStyle="solid"
              icon="linkedin"
              iconColor="white"
              backgroundColor="#0077b5"
              iconSize="2"
              roundness="50%"
              url="https://www.linkedin.com/in/sakshamgupta26/"
              size="50
"
            />
          </span>
          <span className={styles.socailMediaIcon}>
            <SocialMediaIconsReact
              className={styles.SocialIcons}
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="4"
              borderStyle="solid"
              icon="github"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(0,0,0,1)"
              iconSize="10"
              roundness="50%"
              url="https://github.com/26Saksham"
              size="50
"
            />
          </span>
          <span className={styles.socailMediaIcon}>
            <SocialMediaIconsReact
              className={styles.SocialIcons}
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="4"
              borderStyle="solid"
              icon="phone"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(51,175,198,0.97)"
              iconSize="3"
              roundness="50%"
              href="tel:9755478801"
              size="50
"
            />
          </span>
        </Col>
        <Col className={styles.ResumeButtonDiv}>
          <ResumeButton />
        </Col>
      </Row>
    </Container>
  </div>
);
}
const ResumeButton=()=>{
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
            padding: "15px",
          }}
          className={styles.resumeButton}
        >
          Download CV
        </Button>
      </a>

      <Link className={styles.navbaritemHome} to="/Contact">
        <Button
          style={{
            border: "1px solid",
            color: "white",
            // borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "15px",
            backgroundColor: "rgb(155 164 180)",
          }}
          className={styles.letsTalkButton}
        >
          Let's Talk
        </Button>
      </Link>
      <span className={styles.scrollText}>
        <Link className={styles.navbaritemHome} to="/Contact">
          <FaLongArrowAltUp />
        </Link>
      </span>
    </div>
  );
}

export default App;
