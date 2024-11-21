import { MovieCard } from "./movie-card";

export const MainView = () => {
    return (
      <div className="my-flix">
        <div>Main View</div>
        <MovieCard title = "The Matrix"/>
        <MovieCard title = "IT"/>
      </div>
    );
  };