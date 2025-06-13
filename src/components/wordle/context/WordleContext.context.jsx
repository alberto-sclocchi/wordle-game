import { createContext, useState } from "react";

const WordleContext = createContext();


export const WordleProvider = ({children}) => {
    const [ words, setWords ] = useState ([]);

    const getWords =  () => {
    }
    
    
    return (
        <WordleContext.Provider value={{getWords, words}}>
            {children}
        </WordleContext.Provider>
    );
}


export default WordleContext;