import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import WordleContext from './context/WordleContext.context';

export default function WordleStartScreen() {
  const { getSolution } = useContext(WordleContext);
    
  return (
    <div>
        <h1>WordleLookAlike</h1>
        <Link to="/board" onClick={() => getSolution()}>Start</Link>
    </div>
  )
}
