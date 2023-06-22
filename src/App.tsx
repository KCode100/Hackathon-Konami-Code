import {FC, useState} from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import './App.css';
import HangmanWord from './components/HangmanWord';
import words from "./wordList.json"
import Keyboard from './components/Keyboard';

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

const App: FC = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  function addGuessedLetter(newLetter: string): void {
    setGuessedLetters(prev => [...prev, newLetter])
  }

  return (
    <>
      <HangmanDrawing />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} addGuessedLetter={addGuessedLetter} />
    </>
  );
}

export default App;
