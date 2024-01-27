import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailValidator, passwordValidator } from "../components/Validator";
import { Button } from "@mui/material";
import "../css/login.css";
const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    grant_type: "password",
  });

  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );
    // setsuccessMessage('Successfully Validated');
    if (input.email !== "test45@yopmail.com" || input.password !== "Test@123")
      return seterrorMessage("Invalid email or password");
    navigate("./products");
    localStorage.setItem("auth", true);
  };

  // const loginCall = (e)=>{
  // 	e.preventDefault()
  // 	const formData = new FormData();
  //   formData.append("email", input.email);
  //   formData.append("password", input.password);
  // //   formData.append("grant_type", "password");

  // 	fetch("http://apiv2stg.promilo.com/user/oauth/token", {
  //     method: "POST",
  //     body: formData,
  // 	headers:{
  // 		authorization:'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==',
  // 		grant_type:'password',
  // 		'Access-Control-Allow-Credentials' :'true'

  // 	}
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));

  // }

  return (
    <>
      <div className="login-container container">
        <form className="login-form validate-form" onSubmit={formSubmitter}>
          <span className="login-form-title h3">Login</span>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "green" }}>
              {successMessage}
            </div>
          )}
          <div
            className="wrap-input100 validate-input m-b-23"
            data-validate="email is required"
          >
            <input
              className="input  "
              type="text"
              name="email"
              placeholder="Type your username"
              onChange={handleChange}
            />
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className=" validate-input" data-validate="Password is required">
            <input
              className="input "
              type="password"
              name="password"
              placeholder="Type your password"
              onChange={handleChange}
            />
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className="btn-container">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <Button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px 30px",
                }}
                variant="filled"
                className="btn"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
