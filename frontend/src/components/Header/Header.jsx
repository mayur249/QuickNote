import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userActions";

const Header = ({ setSearch }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
    history.push("/");
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            QuickNote
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link
                to={userInfo ? "/mynotes" : "/signin"}
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                My Notes
              </Link>
            </Nav.Link>
            {userInfo && (
              <NavDropdown
                title={
                  <span style={{ color: "#ffffff" }}>{`${userInfo.name}`}</span>
                }
                id="navbarScrollingDropdown"
                style={{ color: "#ffffff" }}
              >
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signoutHandler}>
                  Signout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
