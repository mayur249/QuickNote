import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Quick Note</h1>
              <p className="subtitle">Save all your notes here.</p>
            </div>
            <div className="buttonContainer">
              <a href="/signin">
                <Button size="lg" className="landingbutton" variant="success">
                  Signin
                </Button>
              </a>
              <a href="/signup">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-success"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
