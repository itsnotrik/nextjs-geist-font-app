import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">MyApp</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
          <li><a href="/register" className="hover:underline">Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
