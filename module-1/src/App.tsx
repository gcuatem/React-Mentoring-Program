import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter/Counter";
import { Genres } from "./Components/Genres/Genres";
import { MovieTile } from "./Components/MovieTile/MovieTile";

import { MovieDetails } from "./Components/MovieDetails/MovieDetails";
import { Search } from "./Components/Search/Search";
import { SortControl } from "./Components/SortControl/SortControl";

function App() {
  const initialValue = 3;
  let listOfGenres = ["Drama", "Horror", "Comedy", "Suspense", "Action"];
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(listOfGenres[0]);
  const [selectedSort, setSelectedSort] = useState("Title");
  let movie: Movie;
  movie = {
    id: 101,
    movieName: "Title",
    releaseDate: "2004-03-12",
    imageUrl:
      "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    genres: [
      { id: 28, genreName: "Action" },
      { id: 12, genreName: "Adventure" },
      { id: 16, genreName: "Animation" },
    ],
    rating: 7.3,
    duration: "1h 34min",
    description:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
  };

  let sortValues = ["ReleaseDate", "Title"];

  const handleSearch = (query: any) => {
    console.log("Searching for:", query);
    setSearchResults(query);
  };

  const handleGenreSelection = (genre: any) => {
    console.log("Genre selected:", genre);
    setSelectedGenre(genre);
  };

  const handleSortByChange = (value: string) => {
    console.log("SortBy selected:", value);
    setSelectedSort(value);
  };

  return (
    <div className="container mx-auto p-3">
      <h1 className="font-bold text-2xl  m-2 text-center ">
        {" "}
        ReactJS Mentor Program
      </h1>
      <div className="m-5 text-center">
        <Counter initialValue={initialValue}></Counter>
      </div>

      <div className="m-5 text-center">
        <Search initialSearchQuery="initial search" onSearch={handleSearch} />
        <p className="bg-slate-400 m-4">{searchResults} </p>
      </div>

      <div className="m-5 text-center">
        <Genres
          genres={listOfGenres}
          selected={selectedGenre}
          onSelect={handleGenreSelection}
        ></Genres>
        <p className="bg-slate-400 m-4">{selectedGenre} </p>
      </div>

      <div className=" mb-3">
        <MovieTile movie={movie}></MovieTile>
      </div>

      <div>
        <MovieDetails movie={movie}></MovieDetails>
      </div>

      <div className="bg-slate-800 mt-4">
        <SortControl
          sortByDefaultValue="Title"
          sortByValues={sortValues}
          onChanges={handleSortByChange}
        ></SortControl>
        <p className="bg-slate-400 m-4">{selectedSort} </p>
      </div>
    </div>
  );
}

export default App;
