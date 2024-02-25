import React, { useState } from 'react';

const Search = ({ initialSearchQuery, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className='border p-3 m-3'>
      <h3 className='text-lg m-4'>Search Component</h3>

      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter your search query..."
        className='border py-1.5 pl-1'
      />
      <button className='ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
