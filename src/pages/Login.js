import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleOnLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      emailRef.current.focus();
      return;
    } else if (password === "") {
      passwordRef.current.focus();
      return;
    } else {
      setAuthenticate(true);
      navigate("/");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: "url(https://mebincdn.themebin.com/1664271579476.jpg)",
      }}
    >
      <div className="formBox">
        <img
          width={200}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <h1>로그인</h1>
        <Form onSubmit={(e) => handleOnLogin(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="emailInput"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="pwInput"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
