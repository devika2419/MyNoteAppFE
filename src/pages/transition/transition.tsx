import { Box } from "@mui/material";
import * as React from 'react';
import "./transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function transitionPage(){

  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout for 3 seconds before navigating to the upload page
    const timer = setTimeout(() => {
      navigate("/upload");
    }, 3000); // 3000ms = 3 seconds

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  

    return(

        <Box className="snippet" data-title="dot-elastic">
          <Box className="stage">
            <Box className="dot-elastic"></Box>
          </Box>
       </Box>
)

}