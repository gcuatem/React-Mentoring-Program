import React, { useState } from 'react'

interface ICounterProps {
    initialValue?: number;
  }

const Counter:React.FC<ICounterProps> = ({initialValue=0}) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(count + 1);
      };
    
    const decrement = () => {
        setCount(count - 1);
      };
  return (
    <div className='border p-3 m-3'>
      <h3 className='text-lg m-4 font-bold'>Counter Component</h3>
       <p className='text-3xl m-2'>Counter: {count}</p>
       <button className='ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded' onClick={increment}>Increment</button>
       <button className='ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
