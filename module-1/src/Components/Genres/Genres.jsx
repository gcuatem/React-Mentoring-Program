import React from 'react'

function Genres({genres,selected,onSelect}) {

  return (
    <div className='border p-3 m-3'>
      <h3 className='text-lg m-4'>Genres Component</h3>
      {genres.map((genre, index) => (
        // <button 
        //   key={index}
        //   onClick={() => onSelect(genre)}
        //   style={{
        //     marginRight: '10px',
        //     marginBottom: '10px',
        //     backgroundColor: genre === selected ? '#4CAF50' : '#ffffff',
        //     color: genre === selected ? '#ffffff' : '#000000',
        //     border: '1px solid #cccccc',
        //     borderRadius: '5px',
        //     padding: '5px 10px',
        //     cursor: 'pointer',
        //   }}
        // >
        //   {genre}
        // </button>

        <button key={index} onClick={() => onSelect(genre)} 
        className={`inline-block bg-${genre === selected ? 'green' : 'white'} 
                      rounded-lg px-4 py-2 mr-2 mb-2 
                      border ${genre === selected ? 'text-red-500' : 'text-black'} 
                      ${genre === selected ? 'border-green-600' : 'border-gray-400'}
                      hover:bg-green-600 hover:text-white hover:border-green-600 
                      transition duration-300 ease-in-out`}
        >
            {genre}
        </button>

        ))}
    </div>
  )
}

export default Genres
