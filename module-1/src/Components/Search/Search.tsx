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
    <div className="border p-3 m-3">
      <h3 className="text-lg m-4 font-bold">Search Component</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter your search query..."
        className="border py-1.5 pl-1"
      />
      <button
        type="button"
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
