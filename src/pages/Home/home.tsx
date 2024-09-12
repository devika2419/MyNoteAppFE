import { Box, Typography } from "@mui/material"
import "./home.css"
import { useNavigate } from "react-router-dom"
// import { Login } from "@mui/icons-material";
import * as React from 'react';

export default function Home(){

    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/options")

    }


    return(
        <>
            <Box className="title-page-box" onClick={handleClick} style={{ cursor: 'pointer' }}>
                 <Typography className="title-box" style={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Quicksand'}}>
                      MY NOTE APP.
               </Typography>
            </Box>
    
         </>
    )
}