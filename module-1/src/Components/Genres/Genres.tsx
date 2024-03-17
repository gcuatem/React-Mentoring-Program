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

  return (
    <div className=" p-3 m-3">
      {genres.map((genre) => (
        <button
          type="button"
          key={genre.id}
          onClick={() => handleGenreSelection(genre.genreName)}
          className={`inline-block rounded-full font-NotoSansSymbol text-xs px-2  bg-${
            genre.genreName === selectedGenre ? "bg-custom_pink" : "white"
          } 
          border ${
            genre.genreName === selectedGenre
              ? "text-custom_pink"
              : "text-white"
          } 
          ${
            genre.genreName === selectedGenre
              ? "border-custom_pink"
              : "border-slate-700"
          }
            hover:bg-custom_black hover:text-white hover:border-white
                          transition duration-300 ease-in-out`}
        >
          {genre.genreName}
        </button>
      ))}
    </div>
  );
};
