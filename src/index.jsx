import { createRoot } from 'react-dom/client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Correctly import Container and Row
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { MainView } from './pages/main-view';
import { LoginView } from './pages/login-view';
import { SignupView } from './pages/sign-up-view';
import { MovieView } from './pages/movie-view';
import { ProfileView } from './pages/profile-view';
import { retrieveToken, retrieveUser } from './api/flixApi';
// Main component (will eventually use all the others)
const API_URL= "https://movie-api-d90y.onrender.com"
const MyFlixApplication = () => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [movies,setMovies] = useState([])

  //apis / side effects (business logic)
  async function fetchMovies(){
    let t = retrieveToken();
    setToken(t)
    let u = retrieveUser()
    setUser(u)
    if(!t){
      return
    }
    try {
      let response = await fetch(`${API_URL}/movies`,{
        headers: {Authorization: `Bearer ${t}`}
      })
      let data = await response.json()
      setMovies(data)
    } catch (error) {
      console.error(error)
      window.alert("Error fetching movies")
    }
  }

  //lifecycle method when it first rendered
  
  useEffect(() => {
    
    fetchMovies()
  },[])

  return(
    <BrowserRouter>
      <NavBar 
        user={user} 
      />

      <Routes>
        <Route path="/" element={user ? <MainView movies={movies}/> : <LoginView/>}/>
        <Route path="/movies/:movieId" element={user ? <MovieView movies={movies}/> : <LoginView/>}/>
        <Route path="/profile/:userId" element={user ? <ProfileView/> : <LoginView/>}/>
        
        <Route path="/login" element={user ? <Navigate to="/"/> : <LoginView />}/>
        <Route path="/signup" element={user ? <Navigate to="/"/> : <SignupView/> }/>
      </Routes>
    </BrowserRouter>
  )
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
