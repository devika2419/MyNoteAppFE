import * as React from 'react';
import "./signup.css";
import TwoColumnLayout from "../../components/TwoColumnLayout/twoColumnLayout";
import { Box } from '@mui/material';
import Navbar from '../../components/Navbar/navbar';
import api from "../api/posts"
import img2 from "../../../public/img2.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Signup() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (username: string, password1: string, password2?: string) => {
    try {
        const data = password2 
            ? { username, password: password1, confirmPassword: password2 }
            : { username, password: password1 };

        const response = await api.post('/register', data);

        if (response.data.error) {
            setErrorMessage(response.data.error); // Display error message
        } else {
            console.log('verified', response.data);
            const { userId, token } = response.data;

            // Save JWT to local storage
            localStorage.setItem('token', token);

            navigate("/transitions");

            setTimeout(() => {
                navigate(`/upload`);
            }, 3000);
        }
    } catch (error) {
        console.error('Error submitting form', error);
        setErrorMessage('An error occurred while signing up. Please try again.');
    }
}

  
    return (
      <Box className="signup-main-box">
        <Navbar />
        <Box className="sign-up-section">
        {errorMessage && <Box style={{ color: 'red' }}>{errorMessage}</Box>}
        <TwoColumnLayout 
          Image={<img src = {img2} alt="Signup-image" style={{ width: '100%', borderRadius: '8px', height: '100%', marginRight:"1rem" }}/>} // Replace with the actual image URL
          title="Sign Up"
          buttonText="Submit"
          onSubmit={handleSubmit}
          passwordFields={2} // Two password fields
          passwordLabels={["Password", "Confirm Password"]} // Labels for the two password fields
        />
        </Box>
      </Box>
    );
  }

export default Signup
