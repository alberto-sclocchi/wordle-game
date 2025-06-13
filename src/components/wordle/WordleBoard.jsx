import React, { useContext, useEffect, useState } from 'react'
import WordleContext from './context/WordleContext.context'
import axios from 'axios';

export default function WordleBoard() {

  const { getWords, words } = useContext(WordleContext);
  const [ guesses, setGuesses ] = useState([]);

  useEffect(() => {
  }, [])

  return (
    <div>
        <h1>Wordle Board</h1>
    </div>
  )
}
