//imports
import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "./movie-view";
import { NavBar } from "./navbar";
import { LoginView } from "./login-view";
import { SignupView } from "./sign-up-view";
//constants

const API_URL= "https://movie-api-d90y.onrender.com"

export const MainView = () => {
  //state mgmt
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [movies,setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  //apis / side effects (business logic)
  async function fetchMovies(){
    let t = retrieveToken()
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

  //pull token from ls to keep in component state so we don't have to constantly read from browser storage
  function retrieveToken(){
    let t = localStorage.getItem('user-token')
    setToken(t)

    //TODO: extract user and store
    setUser({Username: 'test-user'})
    return t
  }

  //store in ls and your component state
  function storeToken(t){
    localStorage.setItem('user-token', t)
    setToken(t)
  }

  function createMovie(){}
  function downloadMovie(){}

  //lifecycle method when it first rendered
  useEffect(()=>{
    fetchMovies()
  },[])

  //when not a user (not logged in) display login and signup
  if (!user) {
    return (
      <div>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            storeToken(token);
          }}
        />
        <SignupView
          onSignUp={(user) => {setUser(user)}}
        />
      </div>
    );
  }

  //if have selected movie diplay card
  if (selectedMovie) {
    
    return (
      <MovieView 
        {...selectedMovie} 
        onClose={() => setSelectedMovie(null)}
      />
    );
  }
  return (
      <div className="my-flix">
        <NavBar 
          user={user} 
          onLogout={() => setUser(null)}
        />
        {movies.map((movie,index) => (
          <MovieCard
            key={index} 
            {...movie} 
            onMovieClicked={() => setSelectedMovie(movie)} 
          />
        ))}
        
      </div>
    );
  };