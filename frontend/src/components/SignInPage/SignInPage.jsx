import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../";
import "./SignInPage.css";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";

const SignInPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);

  const { loading, error, userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
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
            Signin
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
