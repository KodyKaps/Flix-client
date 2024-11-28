//imports
import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "./movie-view";
import { NavBar } from "./navbar";

//constants

const userData = {
  name: "Kody",
}

const API_URL= "https://movie-api-d90y.onrender.com"

export const MainView = () => {
  //state mgmt
  const [user, setUser] = useState(userData)
  const [movies,setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  //apis / side effects (business logic)
  async function fetchMovies(){
    try {
      let response = await fetch(`${API_URL}/movies`)
      let data = await response.json()
      setMovies(data)
    } catch (error) {
      console.error(error)
      window.alert("Error fetching movies")
    }
  }

  function createMovie(){}
  function downloadMovie(){}

  //lifecycle method when it first rendered
  useEffect(()=>{
    fetchMovies()
  },[])

  //render part of compnent
  if (selectedMovie) {
    //TODO: set the selectedMovie back to null somehow... (hint line 150...)
    return <MovieView {...selectedMovie} onClose={() => setSelectedMovie(null)}/>;
  }
  return (
      <div className="my-flix">
        <NavBar user={user}/>
        {movies.map(movie => (
          <MovieCard {...movie} 
          onMovieClicked={() => setSelectedMovie(movie)} 
        />
        
        ))}
        
      </div>
    );
  };