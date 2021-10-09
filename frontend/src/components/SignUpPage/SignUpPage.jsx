import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MainScreen } from "../";
import { signup } from "../../actions/userActions";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://cdn-icons-png.flaticon.com/512/709/709722.png"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const history = useHistory();

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords Do Not Match");
    } else {
      setMessage(null);
      dispatch(signup(name, email, password, pic));
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "quicknote");
      data.append("cloud_name", "dpsdexozw");
      fetch("https://api.cloudinary.com/v1_1/dpsdexozw/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log("upload error", err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <MainScreen title="SIGNUP">
      <div className="signupContainer">
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              onChange={(e) => postDetails(e.target.files[0])}
              custom
            />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-3">
            Signup
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account ?{" "}
            <Link to="/signin" style={{ textDecoration: "none" }}>
              Signin Here
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default SignUpPage;
