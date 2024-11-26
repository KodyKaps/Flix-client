import { useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "./movie-view";
import { NavBar } from "./navbar";
const moviesData = [
  {title:"the Matrix"}, 
  {title:"Jaws"}, 
  {title:"Lord of the Rings"}
]
const moviesFromApi = [
  {
    "Title": "Inception",
    "CoverImageUrl": "https://imgs.search.brave.com/W_8f6LhWWL16jBt-vYvhD9GO3rTtu8Hu7jd_QIVv_ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTEv/aW5jZXB0aW9uLW1v/dmllLXBvc3Rlci5q/cGc",
    "Description": "A skilled thief is offered a chance to have his past crimes forgiven if he implants an idea into a target's subconscious.",
    "Genre": {
      "Name": "Science Fiction",
      "Description": "A genre dealing with futuristic concepts, advanced science, and technology."
    },
    "Director": {
      "Name": "Christopher Nolan",
      "Bio": "British-American director known for his cerebral, often nonlinear storytelling."
    }
  },
  {
    "Title": "Interstellar",
    "Description": "A team of astronauts travels through a wormhole in search of a new habitable planet as Earth faces severe drought and famine.",
    "Genre": {
      "Name": "Science Fiction",
      "Description": "A genre dealing with futuristic concepts, advanced science, and technology."
    },
    "Director": {
      "Name": "Christopher Nolan",
      "Bio": "British-American director known for his cerebral, often nonlinear storytelling."
    }
  },
  {
    "Title": "The Grand Budapest Hotel",
    "Description": "The adventures of a hotel concierge who befriends a lobby boy and gets embroiled in a murder investigation.",
    "Genre": {
      "Name": "Comedy",
      "Description": "A genre intended to entertain and amuse the audience, often involving humorous characters or situations."
    },
    "Director": {
      "Name": "Wes Anderson",
      "Bio": "American filmmaker known for his eccentric and stylistic visual storytelling."
    }
  },
  {
    "Title": "The Royal Tenenbaums",
    "Description": "An estranged family of former child prodigies reunites after learning of their father’s terminal illness.",
    "Genre": {
      "Name": "Comedy",
      "Description": "A genre intended to entertain and amuse the audience, often involving humorous characters or situations."
    },
    "Director": {
      "Name": "Wes Anderson",
      "Bio": "American filmmaker known for his eccentric and stylistic visual storytelling."
    }
  },
  {
    "Title": "Pulp Fiction",
    "Description": "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "Genre": {
      "Name": "Crime",
      "Description": "A genre centered on illegal activities, often with suspenseful or morally complex characters."
    },
    "Director": {
      "Name": "Quentin Tarantino",
      "Bio": "American filmmaker known for his stylized violence, dark humor, and nonlinear storylines."
    }
  },
  {
    "Title": "Kill Bill: Vol. 1",
    "Description": "A former assassin, betrayed by her own squad, embarks on a journey to seek revenge.",
    "Genre": {
      "Name": "Action",
      "Description": "A genre featuring high-energy scenes, often involving physical feats, battles, and fast-paced movement."
    },
    "Director": {
      "Name": "Quentin Tarantino",
      "Bio": "American filmmaker known for his stylized violence, dark humor, and nonlinear storylines."
    }
  },
  {
    "Title": "The Shawshank Redemption",
    "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Genre": {
      "Name": "Drama",
      "Description": "A genre focusing on character development and an exploration of emotional themes."
    },
    "Director": {
      "Name": "Frank Darabont",
      "Bio": "American director known for adapting Stephen King novels into acclaimed films."
    }
  },
  {
    "Title": "The Green Mile",
    "Description": "A death row corrections officer meets a mysterious inmate who possesses an unusual healing gift.",
    "Genre": {
      "Name": "Drama",
      "Description": "A genre focusing on character development and an exploration of emotional themes."
    },
    "Director": {
      "Name": "Frank Darabont",
      "Bio": "American director known for adapting Stephen King novels into acclaimed films."
    }
  },
  {
    "Title": "The Matrix",
    "Description": "A computer hacker discovers that reality is a simulation and joins a rebellion to free humanity.",
    "Genre": {
      "Name": "Science Fiction",
      "Description": "A genre dealing with futuristic concepts, advanced science, and technology."
    },
    "Director": {
      "Name": "The Wachowskis",
      "Bio": "American sibling directors known for their innovative storytelling and visually groundbreaking films."
    }
  },
  {
    "Title": "Fight Club",
    "Description": "An office worker forms an underground fight club as a way to escape his ordinary life.",
    "Genre": {
      "Name": "Drama",
      "Description": "A genre focusing on character development and an exploration of emotional themes."
    },
    "Director": {
      "Name": "David Fincher",
      "Bio": "American director noted for his dark, stylish thrillers often exploring human psychology."
    }
  }
]

const userData = {
  name: "Kody",
}
export const MainView = () => {
  const [user, setUser] = useState(userData)
  const [movies,setMovies] = useState(moviesFromApi)
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    //TODO: set the selectedMovie back to null somehow... (hint line 150...)
    return <MovieView {...selectedMovie} />;
  }
  return (
      <div className="my-flix">
        <NavBar user={user}/>
        {movies.map(movie => (
          <MovieCard {...movie} onMovieClicked={() => setSelectedMovie(movie)}/>
        ))}
        
      </div>
    );
  };