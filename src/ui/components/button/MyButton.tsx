/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Button, Theme } from "@mui/material";
import { withMyTheme } from "../../theme/theme";

const ButtonPrimaryStyle = withMyTheme((theme: Theme) => css`
    background-color: ${theme.palette.primary.light};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    &:hover {
        background-color: ${theme.palette.primary.main};
    }
`)

const ButtonSecondaryStyle = withMyTheme((theme: Theme) => css`
    background-color: ${theme.palette.secondary.light};
    color: ${theme.palette.secondary.contrastText};
    font-size: 16px;
    padding: 10px 20px;
    &:hover {
        background-color: ${theme.palette.secondary.main};
    }
`)

interface MyButtonProps {
    variant?: "primary" | "secondary";
    text: string,
}

export const MyButton = ({ text, variant }: MyButtonProps) => {
    const style = variant === 'secondary' ? ButtonSecondaryStyle : ButtonPrimaryStyle
    return <Button
        css={style}>
        {text}
    </Button>
}