/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

const ButtonStyle = css`
    background-color: #007bff;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    &:hover {
    background-color: #0056b3;
}
`

export const MyButton = () => {
    return (
        <Button
            variant="contained"
            css={ButtonStyle}
        >
            Styled Button
        </Button>
    );
};