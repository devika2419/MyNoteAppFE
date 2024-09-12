import { Box, Typography } from "@mui/material"
import "./DisplayName.css"
import React from "react"

interface Props{
    name:string;
}

const DisplayName : React.FC<Props> = ({name}:Props)=>{

    return(
        <Box className="display-main-box">
            <Typography  sx={{ 
    fontWeight: "bold", 
    fontSize: "1.5rem", 
    color: "black", 
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
    letterSpacing: "0.05em", 
    fontFamily: "Quicksand"
  }}>Please Upload your Documents {name}!</Typography>
        </Box>
    )
}

export default DisplayName;
