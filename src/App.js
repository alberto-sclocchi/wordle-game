import './App.css';
import { Route, Routes } from 'react-router-dom';
import WordleBoard from './components/wordle/WordleBoard';
import { WordleProvider } from './components/wordle/context/WordleContext.context';

function App() {
  return (
    <div className="App">
      <WordleProvider>
        <Routes>
          <Route path="*" element={<WordleBoard />} />
        </Routes>
      </WordleProvider>
    </div>
  );
}

export default App;
