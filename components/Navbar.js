import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-center sm:mt-4 items-center">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
