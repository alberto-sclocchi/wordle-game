import './App.css';
import { Route, Routes } from 'react-router-dom';
import { WordleProvider } from './components/wordle/context/WordleContext.context';
import RoutesIndex from './components/core/RoutesIndex';

function App() {
  return (
    <div className="App">
      <WordleProvider>
        <Routes>
          <Route path="*" element={<RoutesIndex />} />
        </Routes>
      </WordleProvider>
    </div>
  );
}

export default App;
