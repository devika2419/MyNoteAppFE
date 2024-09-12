// import { useState } from 'react'
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/home";
import SignUp from "./pages/signup/signup"
import Login from './pages/login/login';
import Notes from './pages/Notes/notes';
import Options from './pages/Options/options';
import Transition from "./pages/transition/transition"
import Upload from "./pages/upload/upload"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {
 

return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Home />} />
    <Route path='/signup' element={<SignUp/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/notes" element={<Notes/>} />
    <Route path="/options" element={<Options />} />
    <Route path= "/transitions" element={<Transition />}/>
    <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />    <Route path="*" element={<Home />} />
  </Routes>
  </BrowserRouter>


 
  )
}

export default App
