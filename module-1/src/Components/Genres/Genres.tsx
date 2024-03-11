import { useState } from "react";

interface IGenresProps {
  /**
   * This is the entire list of Genres availables in the Component
   */
  genres: string[];

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
  return (
    <div className="border p-3 m-3">
      <h3 className="text-lg m-4 font-bold">Genres Component</h3>
      {genres.map((genre, index) => (
        <button
          key={index}
          onClick={() => handleGenreSelection(genre)}
          className={`inline-block bg-${
            genre === selectedGenre ? "green" : "white"
          } 
                          rounded-lg px-4 py-2 mr-2 mb-2 
                          border ${
                            genre === selectedGenre
                              ? "text-red-500"
                              : "text-black"
                          } 
                          ${
                            genre === selectedGenre
                              ? "border-green-600"
                              : "border-blue-400"
                          }
                          hover:bg-green-600 hover:text-white hover:border-green-600 
                          transition duration-300 ease-in-out`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
