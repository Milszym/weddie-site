/** @jsxImportSource @emotion/react */
import { css, TextField, Theme } from "@mui/material"
import { withMyTheme } from "../../theme/theme"

const InputStyle = withMyTheme((theme: Theme, additionalCss: any) => css`
    & .MuiInputLabel-root {
        font-family: ${theme.typography.body1.fontFamily};
        color: ${theme.palette.text.primary};
        font-size: 1.5rem;
        ${additionalCss ? additionalCss(theme) : ''};
    }
    & .MuiOutlinedInput-root {
        ${additionalCss ? additionalCss(theme) : ''};
    }
    & .MuiFilledInput-root {
        ${additionalCss ? additionalCss(theme) : ''};
    }
    ${additionalCss ? additionalCss(theme) : ''};
`)

interface Props {
    value: string
    label?: string
    variant?: "outlined" | "standard" | "filled"
    placeholder?: string
    onChange: (value: string) => void
    multiline?: boolean
    rows?: number
    additionalCss?: any
    autoComplete?: string
    type?: string
}

export const MyInput = ({ value, rows, variant, type, autoComplete, label, onChange, multiline, placeholder, additionalCss }: Props) => {
    return <TextField
        value={value}
        variant={variant || "outlined"}
        rows={rows}
        label={label}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        multiline={multiline} 
        onChange={event => onChange(event.target.value)}
        css={(theme) => InputStyle(theme, additionalCss)}
    />
}