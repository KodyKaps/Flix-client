//imports

import { MovieCard } from "./movie-card";
//constants

export const MainView = (props) => {

  return (
    <div className="my-flix">
      
      {props.movies.map((movie,index) => (
        <MovieCard
          key={index} 
          {...movie} 
        />
      ))}
      
    </div>
    );
  };