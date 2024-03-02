import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Search from "./Components/Search/Search";
import Genres from "./Components/Genres/Genres";

function App() {
  const initialValue = 3;
  let listOfGenres = ["Drama", "Horror", "Comedy", "Suspense", "Action"];
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(listOfGenres[0]);

  const handleSearch = (query:any) => {
    console.log("Searching for:", query);
    setSearchResults(query);
  };

  const handleGenreSelection = (genre:any) => {
    console.log("Genre selected:", genre);
    setSelectedGenre(genre);
  };

  return (
    <div className="container mx-auto p-3">
      <h1 className="font-bold text-2xl  m-2 text-center "> ReactJS Mentor Program</h1>
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
    </div>
  );
}

export default App;
