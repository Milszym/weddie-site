/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"

interface Props {
    icon: any,
}

const ImageContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: clamp(4rem, 12vw, 30rem);
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    :hover {
        transform: scale(1.1);
        z-index: 1;
    }
`)

const CircleImageStyle = withMyTheme((theme: Theme) => css`
    width: clamp(2.8rem, 8vw, 30rem);
    aspect-ratio: 1;
`)

export const CircleImage = ({ icon }: Props) => {

    return <div css={ImageContainerStyle}>
        <img src={icon} alt={''} css={CircleImageStyle} />
    </div>
}