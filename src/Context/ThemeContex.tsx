import { createContext, useReducer } from "react";
import { colors, darkThemeColors, lightThemeColors } from "./colors";
import { initState, themeReducer } from "./ThemeReducer";
import { ACTION } from "./actios";


interface ThemeContextProps {
    theme: colors;
    isActive: boolean;
    setLightTheme: () => void;
    setDarkTheme: () => void;
    setActiveState : (state: boolean) => void;
    // setInactiveState : () => void;

}

export const ThemeContext = createContext({} as ThemeContextProps)


export const ThemeContextProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, initState);

    const setLightTheme = (): void => {
        dispatch({ type: ACTION.LIGHT_THEME, payload: lightThemeColors })
    }


    const setDarkTheme = (): void => {

        dispatch({ type: ACTION.DARK_THEME, payload: darkThemeColors })
    }


    const setActiveState = (state: boolean) => {
        dispatch({type : ACTION.ACTIVE_STATE, payload : state})
    }

   
 


    return (

        <ThemeContext.Provider
            value={{
                theme: theme.theme,
                isActive : theme.isActive, // the user is active
                setDarkTheme: setDarkTheme,
                setLightTheme: setLightTheme,
                setActiveState: setActiveState,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );

}