import React, { useContext } from 'react'
import WordleBoard from '../WordleBoard';
import WordleContext from '../context/WordleContext.context';

export default function WordleLine({guess}) {
  const { MAX_GUESS_LETTERS } = useContext(WordleContext)
  const tiles = [];

  for (let i=0; i < MAX_GUESS_LETTERS; i++){
    let char = !!guess ? guess[i] : "";

    tiles.push(<div className='tile' key={i}>{char}</div>)
  }

  return (
    <div className='tiles'>{tiles}</div>
  )
}
