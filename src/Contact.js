import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./style.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { SocialMediaIconsReact } from "social-media-icons-react";
const sendDetail = (data) => {
  const datastring = `data=${encodeURIComponent(
    data.Name
  )},Email=${encodeURIComponent(data.Email)},Message=${encodeURIComponent(
    data.Message
  )}`;
  const promise = new Promise((resolve, reject) => {
    fetch("/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: datastring,
    })
      .then((response) => {
        if (!response.ok) throw Error("Internal Server Error");
        return response.json;
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
  return promise;
};
const Contact =()=>{
  const [messageSend,setMessageSend]=React.useState('');
  function handleData(data){
    sendDetail(data).then(
      (resolve) => {
setMessageSend(true);
      },
      (reject) => {
        setMessageSend(false);
      }
    );
  }
    return (
      <div style={{ background: "#394867", color: "white", padding: "50px" }}>
        {/* <Work/> */}
        <h2
          style={{
            textAlign: "center",
            margin: "10px",
            marginTop: "0px",
            color: "#D7C49EFF",
          }}
        >
          Contact
        </h2>
        <Container>
          <Row>
            <Col className={styles.colLetsTalk}>
              <LetsTalk />
            </Col>
            <Col className={styles.colContact}>
              <ContactDetail handleData={handleData} messageSend ={messageSend}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
const ContactDetail = ({handleData,messageSend}) => {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Message, setMessage] = React.useState("");
  const [ErrorMessage,setErrorMessage]=React.useState('')
  const clickSubmitHandle = () => {
    var data = {
      Name: Name,
      Email: Email,
      Message: Message,
    };
    if(Name==='' || Email==='' || Message===''){
      setErrorMessage("Please fill all input");
return ;
    }
    handleData(data);
    setErrorMessage('');
    setEmail('')
    setName('')
    setMessage('')
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            type="text"
            value={Name}
            placeholder="Please, Enter your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            value={Email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Type Here">
            <Form.Control
              as="textarea"
              onChange={(ev) => {
                setMessage(ev.target.value);
              }}
              value={Message}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>
        <br></br>
        <Button
          variant="primary"
          type="button"
          style={{
            background: "#D7C49EFF",
            color: "black",
            alignText: "center",
          }}
          onClick={clickSubmitHandle}
        >
          Send Message
        </Button>
        {messageSend && (
          <p className={styles.messageSend}>{"Message SendSuccessfully"}</p>
        )}
        {<p className={styles.messageError}>{ErrorMessage}</p>}
      </Form>
    </div>
  );
};
const LetsTalk=()=>{
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#D7C49EFF" }}>
          Let's Talk
        </h2>
        <p>Hello Everyone 👋</p>
        <p>
          I'm here to help and answer any question you might have.We look
          forwork to hearing from you !<br></br>
          <b>I will answer within 24 hours of your question 🤝</b>
        </p>
        <p>
          Use the form to drop an Email 📧, Old-Fashioned Phone Calls Work Too
          &nbsp;&nbsp;
          <a href="tel:+919755478801">📱</a>
          <br></br>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="tel:+919755478801"
          >
            9755478801
          </a>
        </p>
        <div className={styles.socialMediaDiv}>
          <span className={styles.socailMediaIcon}>
            <SocialMediaIconsReact
              style={{ margin: "10px" }}
              className={styles.SocialIcons}
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="twitter"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(26,166,233,1)"
              iconSize="6"
              roundness="50%"
              url="https://twitter.com"
              size="65"
            />
          </span>
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
              size="65"
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
              size="65"
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
              size="65"
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
              url="tel:+919755478801"
              size="65"
            />
          </span>
        </div>
      </div>
    );
}
export default Contact;