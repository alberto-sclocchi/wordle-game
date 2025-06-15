import { createContext, useState } from "react";
import { Words } from '../model/Words.model';


const WordleContext = createContext();


export const WordleProvider = ({children}) => {
    const [ solution, setSolution ] = useState ([]);
    const MAX_GUESS_LETTERS = 5;

    const getSolution =  () => {
        setSolution(Words[Math.floor(Math.random() * Words.length)]);
    }
    
    
    return (
        <WordleContext.Provider value={{getSolution, solution, MAX_GUESS_LETTERS}}>
            {children}
        </WordleContext.Provider>
    );
}


export default WordleContext;