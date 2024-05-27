import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiInvertedDice1, GiInvertedDice2, GiInvertedDice3, GiInvertedDice4, GiInvertedDice5, GiInvertedDice6 } from 'react-icons/gi';

const diceIcons = [
  <GiInvertedDice1 key="1" className="h-5 w-5 mr-2" />,
  <GiInvertedDice2 key="2" className="h-5 w-5 mr-2" />,
  <GiInvertedDice3 key="3" className="h-5 w-5 mr-2" />,
  <GiInvertedDice4 key="4" className="h-5 w-5 mr-2" />,
  <GiInvertedDice5 key="5" className="h-5 w-5 mr-2" />,
  <GiInvertedDice6 key="6" className="h-5 w-5 mr-2" />,
];

const ShuffleButton = ({ onShuffle }) => {
  const [iconIndex, setIconIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const handleShuffleClick = () => {
    setIconIndex((prevIndex) => (prevIndex + 1) % diceIcons.length);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    onShuffle();
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleShuffleClick}
      className={`flex items-center justify-center border mt-8 border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-300 mt-4 uppercase font-bold ${isShaking ? 'shake' : ''}`}
    >
      {diceIcons[iconIndex]}
      Shuffle
    </motion.button>
  );
};

export default ShuffleButton;
