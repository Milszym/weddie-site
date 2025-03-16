/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { ImageResource } from "../../resources/ImageResource"
import { CircleImage } from "../../components/image/CircleImage"
import { UncleOnAWeddingContent } from "./UncledOnAWeddingContent"
import { MOBILE_WIDTH, mobileCss } from "../../util/isMobile"

export const UNCLE_ON_A_WEDDING_ID = 'uncleOnAWedding'

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.secondary.main, 0.05)};
    position: relative;
`)

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: ${MOBILE_WIDTH}px) {
        max-width: 90vw;
    }
`)

const OfferImageWrapperStyle = withMyTheme((theme: Theme) => css`
    position: absolute;
    top: 7vh;
    left: 7vh;
    ${mobileCss(`
        top: 2vh;
        left: 2vh;
    `)}
`)

export const UncleOnAWedding = () => {
    return <Fullscreen id={UNCLE_ON_A_WEDDING_ID} additionalCss={OfferStyle}>
        <div css={OfferBoxStyle}>
            <UncleOnAWeddingContent />
        </div>
        <div css={OfferImageWrapperStyle}>
            <CircleImage icon={ImageResource.uncleOnWedding} />
        </div>
    </Fullscreen>
}