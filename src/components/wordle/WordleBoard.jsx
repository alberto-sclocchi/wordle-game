import React, { useContext, useEffect, useState } from 'react'
import WordleContext from './context/WordleContext.context'
import axios from 'axios';
import { Words } from './model/Words.model';

export default function WordleBoard() {

  const { getWords, words } = useContext(WordleContext);
  const [ guesses, setGuesses ] = useState([]);

  useEffect(() => {
    console.log(Words)
  }, [])

  return (
    <div>
        <h1>Wordle Board</h1>
        {
            Words.map((word, i) => (
                <p key={i}>{word}</p>
            ))
        }
    </div>
  )
}
