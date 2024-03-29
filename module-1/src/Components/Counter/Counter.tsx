import { useState } from "react";

interface ICounterProps {
  /**
   * This is the initial value of the Counter
   */
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: ICounterProps) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="border p-3 m-3">
      <h3 data-testid="Cy-Counter-Title" className="text-lg m-4 font-bold">
        Counter Component
      </h3>
      <p data-testid="Cy-Counter-Text" className="text-3xl m-2">
        Counter: {count}
      </p>
      <button
        type="button"
        data-testid="Cy-Counter-Increment"
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        data-testid="Cy-Counter-Decrement"
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};
