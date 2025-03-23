import { SerializedStyles } from "@emotion/react"
import { createTheme, Theme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#C45526',
            light: '#ED8153',
            dark: '#C45526',
            contrastText: '#fff',
        },
        secondary: {
            main: '#94AE98',
            light: '#BDCCBF',
            dark: '#94AE98',
            contrastText: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        }
    },
    typography: {
        fontFamily: "'Cormorant', serif",
        h1: {
            fontFamily: "'Great Vibes', serif",
        },
        body1: {
            fontFamily: "'Cormorant', serif",
        },
    }
})

export const withMyTheme = <T extends (arg: any, additionalArg?: any) => any>(
    styleCreator: (theme: Theme, additionalArg?: any) => ReturnType<T>
) => {
    return (theme: any, additionalArg?: any) => styleCreator(theme as Theme, additionalArg) as SerializedStyles;
};