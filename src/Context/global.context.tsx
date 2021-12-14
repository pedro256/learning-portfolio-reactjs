import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";
import useStatePersist from "../Hooks/useStatePersist";
import dark from "../Styles/theme/dark";
import light from "../Styles/theme/light";


interface IGlobalContext {
    contextTheme:DefaultTheme,
    onToggleTheme():void
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

export const GlobalContextProvider:React.FC = ({children})=>{

    const [contextTheme,setContextTheme] = useStatePersist<DefaultTheme>('theme',light)

    function onToggleTheme(){
        setContextTheme(contextTheme.title=='dark'?light:dark)
    }

    return(
        <GlobalContext.Provider value={{contextTheme,onToggleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}
