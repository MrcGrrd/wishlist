// A simple Button component using JSX
import React from 'react';

const Button = (props) => {
  return (
    <button 
      onClick={props.handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {props.label}
    </button>
  );
};

// Usage of Button component
const App = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <Button label="Click Me" handleClick={handleClick} />
      <Button label="Click Me" handleClick={handleClick} />
    </div>
  );
};

export default App;
