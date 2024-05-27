import React from 'react';

const Logo = () => {
  const letters = ['Q', 'U', 'O', 'P', 'T'];
  const colors = ['#e7e9ec', '#75d481', '#e7e9ec', '#f7e135', '#e7e9ec'];

  return (
    <div className="flex justify-center mb-8">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="logo-box w-12 h-12 sm:w-16 sm:h-16 mx-1"
          style={{ backgroundColor: colors[index], fontFamily: 'Helvetica', textTransform: 'uppercase' }}
        >
          <span className="text-black text-lg sm:text-2xl">{letter}</span>
        </div>
      ))}
    </div>
  );
};

export default Logo;
