import  { useState } from 'react';
import Counter from "./Components/Counter/Counter";
import "./App.css";
import Search from "./Components/Search/Search";
import Genres from './Components/Genres/Genres';

function App() {
  let listOfGenres=['Drama','Horror','Comedy','Suspense','Action'];
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([listOfGenres[0]]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setSearchResults(query);
  };
  
  const handleGenreSelection = (genre) => {
    console.log("Genre selected:", genre);
    setSelectedGenre(genre);
  };
  
  return (
    <div className="container mx-auto p-3">
      <h1 className="font-bold text-2xl  m-2 text-center ">
        ReactJS Mentor Program
      </h1>
      
      <Counter initialValue={0} />

      <div className='m-5 text-center'>
        <Search initialSearchQuery="" onSearch={handleSearch} />
        <p className='bg-slate-400 m-4'>{searchResults}  </p>
      </div>

      <div className='m-5 text-center'>
        <Genres genres={listOfGenres} selected={selectedGenre} onSelect={handleGenreSelection}></Genres>
        <p className='bg-slate-400 m-4'>{selectedGenre}  </p>
      </div>

    </div>
  );
}

export default App;
