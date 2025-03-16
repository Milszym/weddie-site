/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Theme } from "@mui/material";
import { withMyTheme } from "../../theme/theme";

const HeaderStyle = withMyTheme((theme: Theme, additionalCss?: any) => css`
    color: ${theme.palette.primary.main};
    font-size: 52px;
    fontWeight: 700;
    font-family: ${theme.typography.h1.fontFamily};
    ${additionalCss ? additionalCss(theme) : ''}
`)

interface MyButtonProps {
    text: string,
    additionalCss?: any
}

export const MyHeader = ({ text, additionalCss }: MyButtonProps) => {
    return <span css={(theme) => HeaderStyle(theme, additionalCss)}>
        {text}
    </span>
}