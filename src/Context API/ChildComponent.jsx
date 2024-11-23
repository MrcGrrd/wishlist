import React, { useContext } from 'react';
import MyContext from './Context';

function ChildComponent() {
  const { theme, setTheme } = useContext(MyContext);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme} // Use the toggleTheme function here
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        Click Me!
      </button>
    </div>
  );
}

export default ChildComponent;
