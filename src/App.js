import React from "react";
import About from './About'
import styles from './style.module.css';
import Blog from './Blog'
import Contact from './Contact'
import Work from './Work.js'
import Education from './Education.js'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backg from "./background.jpg";
import Resume from './File/saksham.pdf';
import { SocialMediaIconsReact } from "social-media-icons-react";

import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdownMenu,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownDivider,
 
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";


function App() {
 
   const [visible, setVisible] = React.useState(false)
return (
  <div style={{ background: "#14274E" }}>
    <CNavbar
      colorScheme="light"
      className="bg-light"
      expand="xxl"
      style={{ padding: "0px" }}
    >
      <CContainer
        fluid
        style={{
          background: "#14274e",
          padding: "5px",
          color: "rgb(155 199 192)",
        }}
      >
        <log>Saksham Gupta</log>
        <CNavbarToggler
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
          style={{
        background: "#ffffff",
    border: "1px solid #2322b7",
    "borderRadius": "20px",
    color: "whitesmoke",
          }}
        />
        <COffcanvas
          id="offcanvasNavbar2"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Saksham Gupta</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" to={Contact} active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink to="/About"></CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Work</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Web - Development</CDropdownItem>
                  <CDropdownItem href="#">AI-ML</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Competitive Coding</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#">Contact</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
    <Home styles={styles} />
    <About />
    <Education />
    <Work />
    <Blog />
    <Contact />
    <Footer />
  </div>
);
}
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
      <div className={styles.FooterLinkDiv}>
        <a>Home</a>
        <a>About</a>
        <a>Work</a>
        <a>Contact</a>
      </div>
      <h3 style={{ font: "bold" }}>Saksham Gupta</h3>
      <p style={{ fontSize: "12px", padding: "15px", textAlign: "bottom" }}>
        &copy;copyright by saksham gupta
      </p>
    </div>
  );
}
const Home=({styles})=>{
return (
  <div
    style={{
      backgroundImage: `url(${backg})`,
      height: "700px",
      backgroundSize: "cover",
      
    }}
    className={styles.homeBackground}
  >
    <Container >
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
        <Col>
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
            // borderBottomLeftRadius: "11px",
            borderBottomStyle: "groove",
            padding: "15px",
            backgroundColor: "rgb(20 39 78)",
          }}
          className={styles.letsTalkButton}
        >
          Let's Talk
        </Button>
      </a>
      <span className={styles.scrollText}>
        SCROLL TO DOWN <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
}

export default App;
