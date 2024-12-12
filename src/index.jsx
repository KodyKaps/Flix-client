import { createRoot } from 'react-dom/client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Correctly import Container and Row
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { useEffect, useState } from "react";
import { MainView } from './components/main-view';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { LoginView } from './components/login-view';
import { SignupView } from './components/sign-up-view';
import { MovieView } from './components/movie-view';
// Main component (will eventually use all the others)
const API_URL= "https://movie-api-d90y.onrender.com"
const MyFlixApplication = () => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  //pull token from ls to keep in component state so we don't have to constantly read from browser storage
  function retrieveToken(){
    let t = localStorage.getItem('user-token')
    setToken(t)

    //TODO: extract user and store
    //setUser({Username: 'test-user'})
    return t
  }

  //store in ls and your component state
  function storeToken(t){
    localStorage.setItem('user-token', t)
    setToken(t)
  }
  const [movies,setMovies] = useState([])

  //apis / side effects (business logic)
  async function fetchMovies(){
    let t = retrieveToken();
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
      {user &&
        <NavBar 
          user={user} 
        />
      }
      
      <Routes>
        <Route path="/" element={<MainView movies={movies}/>}/>
        <Route path="/movies/:movieId" element={<MovieView movies={movies}/>}/>
        <Route path="/login" element={
          user ? 
          <Navigate to="/"/> 
          : 
          <LoginView 
            onLoggedIn={(user, token) => {setUser(user); storeToken(token)}}
          />

          }

        />
        <Route path="/signup" element={
          user ? 
          <Navigate to="/"/> 
          : 
          <SignupView/>
          
        }/>
      </Routes>
    </BrowserRouter>
  )
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
