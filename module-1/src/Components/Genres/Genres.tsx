import { useState } from "react";

interface IGenresProps {
  /**
   * This is the entire list of Genres availables in the Component
   */
  genres: Genre[];

  /**
   * This is the single Genre that will be selected by Default when the component renders. Is Required.
   */
  selected: string;

  /**
   * This is the callback function that will be executed when a Genre is selected. Is Required.
   */
  onSelect: (val: string) => void;
}

export const Genres = ({ genres, selected, onSelect }: IGenresProps) => {
  const [selectedGenre, setSelectedGenre] = useState(selected);
  const handleGenreSelection = (genre: string) => {
    setSelectedGenre(genre);
    onSelect(genre);
  };

  console.log(Genres);
  return (
    <div className="border p-3 m-3">
      <h3 className="text-lg m-4 font-bold">Genres Component</h3>
      {genres.map((genre) => (
        <button
          type="button"
          key={genre.id}
          onClick={() => handleGenreSelection(genre.genreName)}
          className={`inline-block bg-${
            genre.genreName === selectedGenre ? "green" : "white"
          } 
                          rounded-lg px-4 py-2 mr-2 mb-2 
                          border ${
                            genre.genreName === selectedGenre
                              ? "text-red-500"
                              : "text-black"
                          } 
                          ${
                            genre.genreName === selectedGenre
                              ? "border-green-600"
                              : "border-blue-400"
                          }
                          hover:bg-green-600 hover:text-white hover:border-green-600 
                          transition duration-300 ease-in-out`}
        >
          {genre.genreName}
        </button>
      ))}
    </div>
  );
};
