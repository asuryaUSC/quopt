import { useState, useEffect } from 'react';
import QuoteGrid from '../components/QuoteGrid';
import EndGamePopup from '../components/EndGamePopup';
import ShuffleButton from '../components/ShuffleButton';

const Home = () => {
  const [quote, setQuote] = useState([]);
  const [originalQuote, setOriginalQuote] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [optimalMoves, setOptimalMoves] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const res = await fetch('/quotes.json');
    const quotes = await res.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const words = randomQuote.quote.split(' ').map(word => word.replace(/[^\w\s]|_/g, ""));
    const scrambledWords = words.map(word => word.split('').sort(() => Math.random() - 0.5));
    setOriginalQuote(words.map(word => word.split('')));
    setQuote(scrambledWords);
    setCurrentQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setOptimalMoves(words.reduce((sum, word) => sum + calculateOptimalSwaps(word.split(''), scrambledWords[words.indexOf(word)].join('')), 0));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const calculateOptimalSwaps = (original, scrambled) => {
    let swaps = 0;
    const visited = Array(original.length).fill(false);

    for (let i = 0; i < original.length; i++) {
      if (visited[i] || original[i] === scrambled[i]) continue;

      let cycleSize = 0;
      let x = i;
      while (!visited[x]) {
        visited[x] = true;
        x = original.indexOf(scrambled[x]);
        cycleSize++;
      }

      if (cycleSize > 0) {
        swaps += cycleSize - 1;
      }
    }
    return swaps;
  };

  const handleSwap = (wordIndex, letterIndex1, letterIndex2) => {
    const newQuote = [...quote];
    const word = newQuote[wordIndex];
    [word[letterIndex1], word[letterIndex2]] = [word[letterIndex2], word[letterIndex1]];
    setQuote(newQuote);
    setMoves(moves + 1);

    // Check if the quote is solved
    if (newQuote.every((word, index) => word.join('') === originalQuote[index].join(''))) {
      setIsSolved(true);
    }
  };

  const handleShuffle = () => {
    setMoves(0);
    setIsSolved(false);
    fetchQuote();
  };

  const handleClosePopup = () => {
    setIsSolved(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-0 lg:pt-10">
        <QuoteGrid quote={quote} onSwap={handleSwap} originalQuote={originalQuote} />
        <ShuffleButton onShuffle={handleShuffle} />
      </div>
      <EndGamePopup
        isOpen={isSolved}
        onClose={handleClosePopup}
        optimalMoves={optimalMoves}
        userMoves={moves}
        quote={currentQuote}
        author={author}
      />
    </div>
  );
};

export default Home;
