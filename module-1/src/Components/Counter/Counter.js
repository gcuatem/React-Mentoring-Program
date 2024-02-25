import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const buttonStyle = {
    padding: '5px 5px',
    margin: '0 10px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const counterStyle = {
    textAlign: 'center',
    fontSize: '24px',
    margin: '15px',

  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const titleStyle ={
    textAlign: 'center',
    fontSize: '20px',
    margin: '20px',
  }

  return React.createElement(
    'div',
    { style: counterStyle },
    React.createElement('h3', {style:titleStyle}, `Counter Component`),
    React.createElement('h2', null, `Counter: ${count}`),
    React.createElement('button', { style: buttonStyle,onClick: increment }, 'Increment'),
    React.createElement('button', { onClick: decrement,style: buttonStyle }, 'Decrement')
  );
};

export default Counter;