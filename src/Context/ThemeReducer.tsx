import { ACTION } from "./actios";
import { colors } from "./colors";




interface ThemeState {
    isActive: boolean;
    theme: colors;
}


type ThemeAction =
    | { type: ACTION.LIGHT_THEME, payload: colors }
    | { type: ACTION.DARK_THEME, payload: colors }
    | { type: ACTION.ACTIVE_STATE, payload: boolean }



export const initState: ThemeState = {
    isActive : false,
    theme: {
        background: '#fff',
        border: '#2CDA51',
        primary: '#D1D7DC',
        btnBackground: '#33A3FF',
        text: '#000',
        lightDark: '#D1D7DC',
        iosDrawerBG: 'rgba(255, 255, 255, 0.7)'
    }
}

export const themeReducer = (state: ThemeState = initState, action: ThemeAction) => {

    switch (action.type) {
        case ACTION.LIGHT_THEME:

            return {
                ...state,
                theme: action.payload,
            }

        case ACTION.DARK_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        case ACTION.ACTIVE_STATE:
            return {
                ...state,
                isActive : action.payload
            }
        
        default:
            return state
    }

}