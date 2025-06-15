import React, { useContext, useEffect, useState } from 'react'
import WordleContext from './context/WordleContext.context'
import axios from 'axios';
import { Words } from './model/Words.model';
import WordleLine from './pages/WordleLine';

export default function WordleBoard() {

  const { getSolution, solution, MAX_GUESS_LETTERS} = useContext(WordleContext);
  const [ guesses, setGuesses ] = useState(Array(6).fill(null));
  const [ currentGuess, setCurrentGuess ] = useState("")
  const [index, setIndex ] = useState(0);
  const [ isGameOver, setIsGameOver ] = useState(false);

  useEffect(() => {
    getSolution()
  }, [])

  useEffect(() => {
    console.log(currentGuess, currentGuess.length)

    if(isGameOver){
      console.log("Game is over!!!", isGameOver);
      return;
    }

    const handleKeyDown = (event) => {
      if(event.key === "Backspace"){
        setCurrentGuess((prevState) => prevState.slice(0, prevState.length - 1))
      } else if (event.key === "Enter" && currentGuess.length === MAX_GUESS_LETTERS){
        setGuesses((prevGuesses) => {
          const newGuesses = [...prevGuesses];
          newGuesses[index] = currentGuess;
          return newGuesses;
        })

        if (index === 5){
          setIsGameOver(true);
        }

        if(currentGuess === solution){
          setIsGameOver(true);
        }

        setIndex(prevState => prevState + 1);
        setCurrentGuess("");

      } else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < MAX_GUESS_LETTERS && index < 6){
        console.log(currentGuess, currentGuess.length)
        setCurrentGuess((prevState) => prevState + event.key.toUpperCase());
      } else {
        return;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    // console.log({index, guesses})

    return () => window.removeEventListener("keydown", handleKeyDown);


  }, [currentGuess, setCurrentGuess, setGuesses, setIndex, index, guesses, solution])


  const handleClick = () => {
    setGuesses(Array(6).fill(null));
    setIndex(0);
    setIsGameOver(false);
    getSolution();
  }
  return (
    <div>
        <h1>Wordle LookAlike</h1>
        {solution}
        <div className="wordle-board">
          {
            guesses.map((guess, i) => (            
              <WordleLine guess={i === index ? {currentGuess, guessed: false} : {guess, guessed: true}} key={i}/>
            ))
          }
        </div>
        {
          guesses.map((guess, i) => (
            <p key={i}>{guess}</p>
          ))
        }
        {isGameOver && <button onClick={handleClick}>Play Again</button>}
    </div>
  )
}
