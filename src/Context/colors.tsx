export type colors = {
    primary: string,
    background: string,
    btnBackground: string,
    text: string,
    border: string,
    lightDark: string,
    iosDrawerBG: string // ios drawer only
}
// default
export const lightThemeColors: colors = {
    background: '#fff',
    border: '#2CDA51',
    primary: '#D1D7DC',
    btnBackground: '#33A3FF',
    text: '#000',
    lightDark: '#D1D7DC',
    iosDrawerBG: 'rgba(255, 255, 255, 0.7)'
}

export const darkThemeColors: colors = {
    background: '#292929',
    border: '#2CDA51',
    primary: '#33A3FF',
    btnBackground: '#D1D7DC',
    text: '#fff',
    lightDark: '#363636',
    iosDrawerBG: 'rgba(0, 0, 0, 0.4)'

}