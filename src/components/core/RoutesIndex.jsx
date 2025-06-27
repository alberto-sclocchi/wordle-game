import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WordleStartScreen from '../wordle/WordleStartScreen'
import WordleBoard from '../wordle/WordleBoard'

export default function RoutesIndex() {
  return (
    <Routes>
        <Route path="/" element={<WordleStartScreen />} />
        <Route path="/board" element={<WordleBoard />} />
    </Routes>
  )
}
