import { useState } from "react";

interface ISearchProps {
  /**
   * This is the initial Search Query.
   */
  initialSearchQuery: string;

  /**
   * This is the callback function to be executed when search action occurs.
   */
  onSearch: (str: string) => void;
}

export const Search = ({ initialSearchQuery, onSearch }: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="  p-3 m-3">
      <h3 className="text-md  font-Montserrat text-white">FIND YOUR MOVIE</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="What do you want to watch?"
        className="py-1.5 pl-1 bg-custom_light_gray text-white text-sm w-3/4"
      />
      <button
        type="button"
        className="ml-2 bg-custom_pink hover:bg-pink-800 text-white py-1 px-2 border border-custom_pink rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
