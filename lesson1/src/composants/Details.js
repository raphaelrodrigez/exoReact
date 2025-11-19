import React, { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Survolez-moi
      </button>

      {/* La "page A" qui apparaît ou change au survol */}
      <div
        className={`mt-8 p-6 bg-white rounded-lg shadow-xl transition-all duration-500 ease-in-out
          ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contenu de la Page A</h2>
        <p className="text-gray-600">
          Ceci est le contenu qui apparaît lorsque le bouton est survolé. Vous pouvez le styliser comme une "page" ou une section.
        </p>
      </div>
    </div>
  );
}

export default App;
