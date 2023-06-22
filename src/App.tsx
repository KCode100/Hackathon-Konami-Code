import './App.css';
import {FC, useState} from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import words from "./wordList.json"
import Keyboard from './components/Keyboard';
import Hint from './components/Hint';
import ConfettiExplosion from 'react-confetti-explosion';

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

const App: FC = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length > 10
  const isWinner = wordToGuess
  .split('')
  .every(letter=> guessedLetters.includes(letter))

  function addGuessedLetter(newLetter: string): void {
    setGuessedLetters(prev => [...prev, newLetter])
  }

  return (
    <>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      {isWinner && (
        <div className='confetti-explosion'>
          <ConfettiExplosion 
            force={0.8}
            duration={3000}
            particleCount={250}
            width={1600}
          />
        </div>
      )}
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser} />
      <Hint wordToGuess={wordToGuess} />
    </>
  );
}

export default App;