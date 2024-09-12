import { Box } from "@mui/material"
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import * as React from "react"

function Navbar(){


    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.clear()
        
    };

    return(
        <Box className="navbar-container">
            <Box className="navbar-title">
                <button className="navbar-link-button" onClick={handleSignOut}>
                <Link to="/" className="navbar-link" style={{fontSize:'1.5rem', fontWeight:'bold'}}> My Note App.</Link>
                </button>

            </Box>
            <Box className="navbar-links">

        <button onClick={handleSignOut}  className="navbar-link-button"><Link className="navbar-link" to="/login">Login</Link></button>
        <button onClick={handleSignOut}  className="navbar-link-button"><Link className="navbar-link" to="/signup">Signup</Link></button>
        <button onClick={handleSignOut}  className="navbar-link-button"><Link className="navbar-link" to="/options">SignOut</Link></button>

      </Box>
        </Box>
    )
}

export default Navbar