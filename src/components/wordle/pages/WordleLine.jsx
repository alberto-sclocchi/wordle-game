import React, { useContext } from 'react'
import WordleContext from '../context/WordleContext.context';

export default function WordleLine({guess}) {
  const { MAX_GUESS_LETTERS, solution} = useContext(WordleContext)
  const tiles = [];


  for (let i=0; i < MAX_GUESS_LETTERS; i++){
    let char = "";

    if (guess.guessed) {
    char = guess.guess ? guess.guess[i] : "";
    } else {
    char = guess.currentGuess ? guess.currentGuess[i] : "";
    }

    let backgroundColor;
    let color;

    if (guess.guessed && guess.guess){
        color = "white";
        if(char === solution[i]){
            backgroundColor = "#6aa964";
        } else if (solution.includes(char) && char !== ""){
            backgroundColor = "#c9b458";
        } else if (char !== "") {
            backgroundColor = "#787c7e";
        }
        
    } else {
        backgroundColor="white";
        color="black";
    }

    tiles.push(<div className="tile" style={{backgroundColor: backgroundColor, color: color}} key={i}>{char}</div>)
  }

  return (
    <div className={`tiles ${guess.error && "shake-effect"}`}>{tiles}</div>
  )
}
