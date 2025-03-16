/** @jsxImportSource @emotion/react */
import { MyText } from "../../components/text/MyText"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"

interface Props {
    icon: any,
    title: string,
}

const OfferImageContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: clamp(20rem, 25vw, 30rem);
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

const OfferImageStyle = withMyTheme((theme: Theme) => css`
    width: clamp(10rem, 12vw, 30rem);
    aspect-ratio: 1;
`)

const OfferImageTitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.8em;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.h1.fontFamily};
`)

export const SiteOfferImage = ({ icon, title }: Props) => {

    return <div css={OfferImageContainerStyle}>
        <img src={icon} alt={title} css={OfferImageStyle} />
        <MyText text={title} additionalCss={OfferImageTitleStyle} />
    </div>
}