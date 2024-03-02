import { useState } from "react";

interface IGenresProps{
    genres:string[],
    selected:string,
    onSelect: (val:string)=>void
}

const Genres:React.FC<IGenresProps> = ({genres,selected,onSelect}) => {
    return (
        <div className='border p-3 m-3'>
          <h3 className='text-lg m-4 font-bold'>Genres Component</h3>
          {genres.map((genre, index) => (
            <button key={index} onClick={() => onSelect(genre)} 
            className={`inline-block bg-${genre === selected ? 'green' : 'white'} 
                          rounded-lg px-4 py-2 mr-2 mb-2 
                          border ${genre === selected ? 'text-red-500' : 'text-black'} 
                          ${genre === selected ? 'border-green-600' : 'border-blue-400'}
                          hover:bg-green-600 hover:text-white hover:border-green-600 
                          transition duration-300 ease-in-out`}
            >
                {genre}
            </button>
            ))}
        </div>
      )
};

export default Genres
