import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate function to go to a specific route
    navigate("/");
  };
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Project Structure</h2>
      </div>
      <div className="container">
        <div className="component">
          <p>
            src/
            <br />
            ├── components/
            <br />
            ├──Validator.jsx
            <br />
          </p>
          <p>
            src/
            <br />
            ├── pages/
            <br />
            ├──About.jsx
            <br />
            ├──Login.jsx
            <br />
            ├── Products.jsx
            <br />
          </p>
        </div>
      </div>
      <div>
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          onClick={handleButtonClick}
        >
          {" "}
          Back to Log In
        </Button>
      </div>
    </>
  );
};

export default About;
