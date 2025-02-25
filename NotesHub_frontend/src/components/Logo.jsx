import React from 'react';

const Logo = () => {
  
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
      {/* Add onClick to make the text clickable */}
      <span 
        className="text-xl font-bold text-gray-100 cursor-pointer">
        NotesHub
      </span>
    </div>
  );
};

export default Logo;
