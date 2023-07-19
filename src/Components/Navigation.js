import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { searchAction } from "../redux/actions/searchAction";

const Navigation = ({ authenticate, setAuthenticate }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (e) => {
    if (e.key == "Enter") {
      navigate("/movies");
      dispatch(searchAction.search(keyword.toLowerCase()));
      console.log(keyword);
    }
    navigate("/movies");
    dispatch(searchAction.search(keyword.toLowerCase()));
    console.log(keyword);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Nav className="login">
              {authenticate ? (
                <Link onClick={() => setAuthenticate(false)} to={"/"}>
                  Logout
                </Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav>
            <Form.Control
              onKeyPress={onSearch}
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={() => onSearch()} variant="outline-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
