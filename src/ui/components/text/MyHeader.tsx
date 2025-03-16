/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Theme } from "@mui/material";
import { withMyTheme } from "../../theme/theme";

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 32px;
    fontWeight: 700;
    font-family: ${theme.typography.h1.fontFamily}
`)

interface MyButtonProps {
    text: string,
}

export const MyHeader = ({ text }: MyButtonProps) => {
    return <span
        css={HeaderStyle}>
        {text}
    </span>
}