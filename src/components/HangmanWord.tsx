type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({ wordToGuess, guessedLetters }: HangmanWordProps) => {
  
  return ( 
    <>
      <div className="hangman-letters_wrapper">
        {wordToGuess.split('').map((letter, index) => (
          <div key={index} className="hangman-letter">{guessedLetters.includes(letter) ? letter : ''}</div>
        ))}
      </div>
    </>
  );
}

export default HangmanWord;