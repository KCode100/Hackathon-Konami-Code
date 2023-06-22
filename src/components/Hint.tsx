import { useKonami } from 'react-konami-code';

type HintProps = {
  wordToGuess: string
}

const Hint = ({ wordToGuess }: HintProps) => {
  
  async function easterEgg() {
    const getRhymingWord = await fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordToGuess}`)
    const res = await getRhymingWord.json()
    alert(`Here's a clue: The word rhymes with ${res[0].word}`);
  }

  useKonami(easterEgg);

  return ( 
    <div>💡 Use <a href='https://en.wikipedia.org/wiki/Konami_Code' target='_blank' rel="noreferrer">"Konami Code"</a> to reveal a clue</div>
  );
}

export default Hint;