import React, { useState } from 'react';

/**
 * Counter Component: Implements the core logic for incrementing, 
 * decrementing, and resetting a count using the useState hook.
 */
const Counter = () => {
  // 1. Implement State using useState, initialized to 0
  const [count, setCount] = useState(0);

  // Handlers for the buttons
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);
  
  // Dynamic color for the count display
  const countColor = count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-gray-700';

  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] w-full max-w-sm">
      
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Simple React Counter
      </h2>
      
      {/* 2. Display the Current Count */}
      <div className="flex justify-center items-center mb-8">
        <p className={`text-7xl font-mono ${countColor} transition-colors duration-200`}>
          {count}
        </p>
      </div>

      {/* 3. Buttons for Counter Actions */}
      <div className="space-y-4">
        {/* Increment Button */}
        <button
          onClick={increment}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 active:scale-[0.98] transform"
        >
          Increment (+1)
        </button>
        
        {/* Decrement Button */}
        <button
          onClick={decrement}
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-150 active:scale-[0.98] transform"
        >
          Decrement (-1)
        </button>
        
        {/* Reset Button */}
        <button
          onClick={reset}
          className="w-full py-3 bg-gray-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-150 active:scale-[0.98] transform mt-2"
        >
          Reset (0)
        </button>
      </div>
      
    </div>
  );
};

export default Counter;
