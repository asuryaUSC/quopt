import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WordGrid = ({ word, onSwap, originalWord }) => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [swapping, setSwapping] = useState({});

  const handleSelect = (index) => {
    if (selectedIndices.includes(index)) return;

    if (selectedIndices.length === 0) {
      setSelectedIndices([index]);
    } else {
      const [firstIndex] = selectedIndices;
      setSelectedIndices([...selectedIndices, index]);

      setSwapping({ [firstIndex]: 'shake', [index]: 'shake' });
      setTimeout(() => {
        onSwap(firstIndex, index);
        setSwapping({});
        setSelectedIndices([]);
      }, 500);
    }
  };

  const getColorClass = (index) => {
    if (selectedIndices.includes(index)) return 'bg-blue-400';
    if (word[index] === originalWord[index]) return 'bg-green-400';
    if (Math.abs(originalWord.indexOf(word[index]) - index) === 1) return 'bg-yellow-400';
    return 'bg-gray-300';
  };

  const getGridBoxClass = (length) => {
    if (length >= 7) {
      return 'w-8 h-8 sm:w-12 sm:h-12';
    }
    return 'w-10 h-10 sm:w-16 sm:h-16';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex space-x-1 sm:space-x-2 justify-center w-full px-2 sm:px-0"
    >
      {word.map((letter, index) => (
        <div
          key={index}
          className={`grid-box ${getGridBoxClass(word.length)} border-gray-300 shadow-lg ${swapping[index] || ''} ${getColorClass(index)}`}
          onClick={() => handleSelect(index)}
          style={{ fontFamily: 'Helvetica', textTransform: 'uppercase' }}
        >
          {letter}
        </div>
      ))}
    </motion.div>
  );
};

export default WordGrid;
