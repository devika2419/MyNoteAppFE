import { Box, Typography } from "@mui/material"
import "./options.css"
import * as React from 'react';

import { Link, useNavigate } from "react-router-dom"
export default function Options(){


   


    return(
        <>
            <Box className="option-page-box"  style={{ cursor: 'pointer' }}>
                 <Link className="options" style={{ color: '#263957', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Quicksand' }} to={"/signup"}>
                      I'm New.
               </Link>
               <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Quicksand' }}>Or</Typography>
               <Link className="options2" style={{color: '#263957', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Quicksand' }} to={"/login"}>
                      Already a Memeber.
               </Link>
            </Box>
    
         </>
    )
}