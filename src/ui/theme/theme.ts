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
    }
})

export const withMyTheme = <T extends (arg: any) => any>(
    styleCreator: (theme: Theme) => ReturnType<T>
) => {
    return (theme: any) => styleCreator(theme as Theme) as SerializedStyles;
};