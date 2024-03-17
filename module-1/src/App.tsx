import { useState } from "react";
import "./App.css";
import { Dialog } from "./Components/Dialog/Dialog";
import { Genres } from "./Components/Genres/Genres";
import { MovieForm } from "./Components/MovieForm/MovieForm";
import { MovieTile } from "./Components/MovieTile/MovieTile";
import { Search } from "./Components/Search/Search";
import { SortControl } from "./Components/SortControl/SortControl";
import { TestData } from "./TestData";

let movie: Movie;
let listOfGenres = TestData.genres;
let sortValues = TestData.SearchFields.slice(0, 5);

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

function App() {
  const [selectedGenre, setSelectedGenre] = useState(listOfGenres[0].genreName);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSearch = (query: any) => {
    console.log("Searching for:", query);
  };

  const handleGenreSelection = (genre: any) => {
    console.log("Genre selected:", genre);
    setSelectedGenre(genre);
  };

  const handleSortByChange = (value: string) => {
    console.log("SortBy selected:", value);
  };

  const handleCloseDialog = () => {
    console.log("CLOSING MODAL");
    setOpenDialog(false);
  };

  return (
    <div className="container mx-auto p-3 bg-custom_dark_gray">
      <h1 className="text-2xl  m-2 text-center text-white font-Montserrat">
        ReactJS Mentor Program
      </h1>

      <div className="banner flex flex-col justify-between m-5 text-center">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-custom_light_gray/70 rounded-lg text-custom_pink my-1 mx-1 py-1 px-1 hover:bg-custom_light_gray/90"
            onClick={() => setOpenDialog(true)}
          >
            +Add Movie
          </button>
        </div>
        <Search initialSearchQuery="initial search" onSearch={handleSearch} />
        <div className="flex justify-between items-center">
          <Genres
            genres={listOfGenres}
            selected={selectedGenre}
            onSelect={handleGenreSelection}
          ></Genres>
          <SortControl
            sortByDefaultValue="Title"
            sortByValues={sortValues}
            onChanges={handleSortByChange}
          ></SortControl>
        </div>
      </div>

      <div className="flex justify-between items-center m-5 text-center"></div>

      <div className=" mb-3">
        <MovieTile movie={movie}></MovieTile>
      </div>
      <Dialog
        openDialog={openDialog}
        dialogTitle={""}
        closeCallback={handleCloseDialog}
      >
        <MovieForm action={"ADD"} />
      </Dialog>
    </div>
  );
}

export default App;
