import * as React from "react";
import "./login.css";
import TwoColumnLayout from "../../components/TwoColumnLayout/twoColumnLayout";
import { Alert, Box } from "@mui/material";
import Navbar from "../../components/Navbar/navbar";
import api from "../api/posts";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "../../../public/img1.png";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, seterrorMessage] = useState("");

  const handleSubmit = async (
    username: string,
    password1: string,
    password2?: string
  ) => {
    try {
      const data = password2
        ? { username, password: password1 }
        : { username, password: password1, confirmPassword: password2 };

      const response = await api.post("/check-user", data);

      localStorage.removeItem("token");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        navigate(`/transitions`);

        console.log("verified", response.data);
      } else {
        console.log("User Not verified");
      }
    } catch (error) {
      seterrorMessage("Incorrect Password, Try again!");
      console.error("Error submitting form", error);
    }
  };

  return (
    <Box className="login-main-box">
      <Navbar />
      <Box className="login-section">
        <TwoColumnLayout
          Image={
            <img
              src={img1}
              alt="Login-img"
              style={{ width: "100%", borderRadius: "8px", height: "100%" }}
            />
          }
          title="Login"
          buttonText="login"
          onSubmit={handleSubmit}
          passwordFields={1}
        />
        {errorMessage && (
          <Box className="error-message" sx={{ color: "red", margin: "10px" }}>
            <Alert severity="error" variant="outlined">
              {errorMessage}
            </Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Login;
