import React, { useContext } from 'react'
import WordleBoard from '../WordleBoard';
import WordleContext from '../context/WordleContext.context';

export default function WordleLine({guess}) {
  const { MAX_GUESS_LETTERS, solution } = useContext(WordleContext)
  const tiles = [];


  for (let i=0; i < MAX_GUESS_LETTERS; i++){
    let char = "";

    if (guess.guessed) {
    char = guess.guess ? guess.guess[i] : "";
    } else {
    char = guess.currentGuess ? guess.currentGuess[i] : "";
    }

    let backgroundColor;

    if (guess.guessed && guess.guess){
        if(char === solution[i]){
            backgroundColor = "green";
        } else if (solution.includes(char) && char !== ""){
            backgroundColor = "yellow";
        } else if (char !== "") {
            backgroundColor = "red";
        } else {
            backgroundColor="grey"
        }
    } else {
        backgroundColor="white"
    }

    tiles.push(<div className='tile' style={{backgroundColor: backgroundColor}} key={i}>{char}</div>)
  }

  return (
    <div className='tiles'>{tiles}</div>
  )
}
