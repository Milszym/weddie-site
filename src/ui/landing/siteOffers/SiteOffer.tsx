/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { Box, css, Theme } from "@mui/material"
import { MyText } from "../../components/text/MyText"
import { SiteOfferImage } from "./SiteOfferImage"
import { isMobile, MOBILE_WIDTH } from "../../util/isMobile"

interface SiteOfferProps {
    icon: any,
    title: string,
    description: string,
    onClick: () => void,
}

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 5vh;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-basis: 100%;
    }
`)

const OfferBoxDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
`)

export const SiteOffer = ({ icon, title, description, onClick }: SiteOfferProps) => {
    return <div css={OfferBoxStyle} onClick={onClick}>
        <SiteOfferImage icon={icon} title={title} />
        {isMobile() ? null : <MyText text={description} additionalCss={OfferBoxDescriptionStyle} />}
    </div>
}