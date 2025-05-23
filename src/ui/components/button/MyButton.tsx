/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Button, Theme } from "@mui/material";
import { withMyTheme } from "../../theme/theme";
import { mobileCss } from "../../util/isMobile";

const ButtonPrimaryStyle = withMyTheme((theme: Theme, additionalCss?: any) => css`
    background-color: ${theme.palette.primary.light};
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    ${mobileCss(`
        font-size: 1.7rem;
    `)}
    &:hover {
        background-color: ${theme.palette.primary.main};
    }
    ${additionalCss ? additionalCss(theme) : ''}
`)

const ButtonSecondaryStyle = withMyTheme((theme: Theme, additionalCss?: any) => css`
    background-color: ${theme.palette.secondary.light};
    color: ${theme.palette.secondary.contrastText};
    font-size: 1rem;
    padding: 10px 20px;
    ${mobileCss(`
        font-size: 1.7rem;
    `)}
    &:hover {
        background-color: ${theme.palette.secondary.main};
    },
    ${additionalCss ? additionalCss(theme) : ''}
`)

interface MyButtonProps {
    variant?: "primary" | "secondary";
    text: string,
    onClick?: () => void,
    additionalCss?: any,
}

export const MyButton = ({ text, variant, onClick, additionalCss }: MyButtonProps) => {
    const style = variant === 'secondary' ? ButtonSecondaryStyle : ButtonPrimaryStyle
    return <Button css={(theme) => style(theme, additionalCss)} onClick={onClick}>
        {text}
    </Button>
}