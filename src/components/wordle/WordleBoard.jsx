import React, { useContext, useEffect, useState } from 'react'
import WordleContext from './context/WordleContext.context'
import axios from 'axios';
import { Words } from './model/Words.model';
import { Alphabet } from './model/Alphabet.model'
import WordleLine from './pages/WordleLine';
import Keyboard from './Keyboard';

export default function WordleBoard() {

  const { getSolution, solution, MAX_GUESS_LETTERS, keyboard, setKeyboard} = useContext(WordleContext);
  const [ guesses, setGuesses ] = useState(Array(6).fill(null));
  const [ currentGuess, setCurrentGuess ] = useState("")
  const [index, setIndex ] = useState(0);
  const [ isGameOver, setIsGameOver ] = useState(false);
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState(false);

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
        
        const isItAWord = Words.includes(currentGuess);
        
        if(!isItAWord){
          setError(true);
          console.log("Word does not exist");

          setTimeout(() => {
            setError(false);
          }, 500);

          return;
        }
        
        setGuesses((prevGuesses) => {
          const newGuesses = [...prevGuesses];
          newGuesses[index] = currentGuess;
          return newGuesses;
        })

        if (index === 5){
          setMessage("BETTER LUCK NEXT TIME...")
          setIsGameOver(true);
        }

        if(currentGuess === solution){
          setMessage("YOU WON!!!");
          setIsGameOver(true);
        }
        
        setKeyboard((prevState) => {
          return prevState.map((letterObj) => {
            const i = currentGuess.indexOf(letterObj.letter);
            if (i === -1) return letterObj;
            if (solution[i] === letterObj.letter) return { ...letterObj, backgroundColor: "#6aa964" };
            if (solution.includes(letterObj.letter)) return { ...letterObj, backgroundColor: "#c9b458" };
            return { ...letterObj, backgroundColor: "#787c7e" };
          })
        })

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
    setKeyboard(Alphabet.map(letter => ({ letter, backgroundColor: "#d3d6da" })));
    getSolution();
  }
  
  return (
    <div>
        <h1>Wordle LookAlike</h1>
        <div className="wordle-board">
          {
            guesses.map((guess, i) => (            
              <WordleLine guess={i === index ? {currentGuess, guessed: false, error: error} : {guess, guessed: true}} key={i}/>
            ))
          }
        </div>
        <div className='keyboard'>
          {
            keyboard.map((letter, i) => <Keyboard {...letter} key={i}/>)
          }
        </div>
        { isGameOver &&
          <div className='game-over-div'>
            <p className='message'>{message}</p>
            <p>THE SOLUTION WAS {solution} :)</p>
            <button onClick={handleClick}>Play Again</button>
          </div>
        }
    </div>
  )
}
