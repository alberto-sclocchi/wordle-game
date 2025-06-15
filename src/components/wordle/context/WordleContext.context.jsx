import { createContext, useState } from "react";
import { Words } from '../model/Words.model';
import { Alphabet } from "../model/Alphabet.model";


const WordleContext = createContext();


export const WordleProvider = ({children}) => {
    const [ solution, setSolution ] = useState ([]);
    const [ keyboard, setKeyboard ] = useState (
        Alphabet.map(letter => ({ letter, backgroundColor: "#d3d6da" }))
    )

    const MAX_GUESS_LETTERS = 5;

    const getSolution =  () => {
        setSolution(Words[Math.floor(Math.random() * Words.length)]);
    }
    
    
    return (
        <WordleContext.Provider value={{getSolution, solution, MAX_GUESS_LETTERS, keyboard, setKeyboard}}>
            {children}
        </WordleContext.Provider>
    );
}


export default WordleContext;