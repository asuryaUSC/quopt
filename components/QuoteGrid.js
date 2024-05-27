import React from 'react';
import WordGrid from './WordGrid';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const QuoteGrid = ({ quote, onSwap, originalQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 w-full px-4 sm:px-8"
    >
      <Navbar />
      {quote.map((word, index) => (
        <WordGrid
          key={index}
          word={word}
          onSwap={(index1, index2) => onSwap(index, index1, index2)}
          originalWord={originalQuote[index]}
        />
      ))}
    </motion.div>
  );
};

export default QuoteGrid;
