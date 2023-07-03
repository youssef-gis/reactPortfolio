import { useContext, createContext, useReducer, useEffect } from "react";
import themeReducer  from "./themeReducer";
export const ThemeContext = createContext();
const initialThemeState = JSON.parse( localStorage.getItem('themeColors') ) ||{primary: 'color-1', background: 'bg-1' }

export const ThemeProvider = ( {children} ) =>{
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState)

    const themeHandler = (btnClassName) => {
        dispatchTheme({type: btnClassName})
    }

    useEffect(()=>{
         localStorage.setItem('themeColors', JSON.stringify(themeState))
    }, [themeState.primary, themeState.background])

    return <ThemeContext.Provider value={{themeState, themeHandler}} >{children}</ThemeContext.Provider>
}


export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}