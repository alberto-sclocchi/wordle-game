import './App.css';
import { Route, Routes } from 'react-router-dom';
import WordleBoard from './components/wordle/WordleBoard';
import { WordleProvider } from './components/wordle/context/WordleContext.context';
import WordleStartScreen from './components/wordle/WordleStartScreen';

function App() {
  return (
    <div className="App">
      <WordleProvider>
        <Routes>
          <Route path="/" element={<WordleStartScreen />} />
          <Route path="/board" element={<WordleBoard />} />
        </Routes>
      </WordleProvider>
    </div>
  );
}

export default App;
