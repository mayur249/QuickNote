import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  //useEffect(() => {
  // const userInfo = localStorage.getItem("userInfo");
  // if (userInfo) {
  //   history.push("/mynotes");
  // }
  //}, [history]);
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
              <Link to="/signin">
                <Button size="lg" className="landingbutton" variant="success">
                  Signin
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-success"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
