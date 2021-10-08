import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../";
import "./SignInPage.css";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const SignInPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      setError(false);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signin",
        {
          email,
          password,
        },
        config
      );
      console.log("Data after signin", data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <MainScreen title="SIGNIN">
      <div className="signinContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New User ?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup Here
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default SignInPage;
