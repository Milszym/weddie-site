/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Button, Theme } from "@mui/material";
import { withMyTheme } from "../../theme/theme";

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 32px;
    &:hover {
        background-color: ${theme.palette.primary.main};
    }
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