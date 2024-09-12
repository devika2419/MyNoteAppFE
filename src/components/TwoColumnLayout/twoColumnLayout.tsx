import * as React from 'react';
import { Grid, Typography, Box, TextField, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Button } from '@mui/material';
import './twoColumnLayout.css'; // Import the CSS file
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useState } from 'react';

interface Props {
  // imageSrc: string;
  Image: JSX.Element;
  title: string;
  buttonText: string;
  onSubmit: (username: string, password1: string, password2? : string) => void;
  passwordFields?: number; 
  passwordLabels?: string[];
}

const TwoColumnLayout: React.FC<Props> = ({ 
  // imageSrc, 
  Image,
  title, 
  buttonText, 
  onSubmit, 
  passwordFields = 1, 
  passwordLabels = ["Password", "Confirm Password"] // Default labels
}: Props) => {

  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((prev) => !prev);
  const handleClickShowPassword2 = () => setShowPassword2((prev) => !prev);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {

    if(password2){
      onSubmit(username, password1, password2)
    }
    else{
      onSubmit(username, password1)
    }

    
    // if (password2) {
    //   onSubmit(username, password1, password2);
    // } else {
    //   onSubmit(username, password1);
    // }
  };



  return (
    <Box p={4} className="input-boxes">
      <Grid container spacing={4} >
        {/* Image Column */}
        <Grid item xs={12} md={6} className="image-column">
          {Image}
        </Grid>

        {/* Content Column */}
        <Grid item xs={12} md={6} className="input-column">
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Quicksand', width: '100%' }}>
                {title}
              </Typography>
            </Grid>

            <Grid item>
              <TextField id="outlined-basic" label="Enter Name" variant="outlined" style={{ width: '100%' }} value={username} onChange={(e)=> setUsername(e.target.value)} />
            </Grid>

            {/* Conditionally Render Password Fields */}
            {passwordFields >= 1 && (
              <Grid item>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password1">{passwordLabels[0]}</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password1"
                    type={showPassword1 ? 'text' : 'password'}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={passwordLabels[0]}
                  />
                </FormControl>
              </Grid>
            )}

            {passwordFields >= 2 && (
              <Grid item>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password2">{passwordLabels[1]}</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password2"
                    type={showPassword2 ? 'text' : 'password'}
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={passwordLabels[1]}
                  />
                </FormControl>
              </Grid>
            )}

            <Grid item className="submit-btn-box">
              <Button 
                variant="contained" 
                style={{ width: '50%', backgroundColor: 'black' }} 
                onClick={handleSubmit}
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};



export default TwoColumnLayout;
