// CollapsibleMenu.tsx
import React, { useState } from 'react';

const CollapsibleMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
      >
        Toggle Menu
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Item 1
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Item 2
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Item 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollapsibleMenu;
