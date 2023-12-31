const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  guessedLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled: boolean
}

const Keyboard = ({ guessedLetters, addGuessedLetter, disabled }: KeyboardProps) => {
  return ( 
    <div className="keyboard-wrapper">
      {KEYS.map(key => (
        <button
          key={key}
          className="keyboard_key"
          disabled={disabled || guessedLetters.includes(key)}
          onClick={() => addGuessedLetter(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;