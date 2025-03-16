/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { MyText } from "../text/MyText"
import { withMyTheme } from "../../theme/theme"
import { Theme } from "@mui/material"
import { mobileCss } from "../../util/isMobile"

interface Props {
    positionNumber: string,
    text: string,
}

const InstructionBoxStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
`)

const InstructionNumberStyle = withMyTheme((theme: Theme) => css`
    font-size: 3.5em;
    padding-bottom: 6px;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
    ${mobileCss(`
        font-size: 2.5rem; 
     `)}
`)

const InstructionTextStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.7rem;
    margin-left: 1rem;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.body1.fontFamily};
    ${mobileCss(`
       font-size: 1.2rem; 
    `)}
`)

export const Instruction = ({ positionNumber, text }: Props) => {
    return <div css={InstructionBoxStyle}>
        <MyText text={positionNumber} additionalCss={InstructionNumberStyle} />
        <MyText text={text} additionalCss={InstructionTextStyle} />
    </div>
}