/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { SiteOfferImage } from "../siteOffers/SiteOfferImage"
import { Fullscreen } from "../../components/Fullscreen"
import { ImageResource } from "../../resources/ImageResource"
import { useTranslation } from "react-i18next"
import { MyHeader } from "../../components/text/MyHeader"
import { CircleImage } from "../../components/image/CircleImage"
import { RockingAuntContent } from "./RockngAuntContent"
import { MOBILE_WIDTH, mobileCss } from "../../util/isMobile"
import { PriceTag } from "../../components/price/PriceTag"

export const ROCKING_AUNT_ID = "rockingAunt"

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.primary.main, 0.05)};
    position: relative;
`)

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobileCss(`
        max-width: 90vw;
    `)} 
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

const PriceTagWrapperStyle = withMyTheme((theme: Theme) => css`
    position: absolute;
    top: 7vh;
    right: 7vh;
    ${mobileCss(`
        top: 2vh;
        right: 2vh;
    `)}
`)

export const RockingAunt = () => {
    const { t } = useTranslation()

    return <Fullscreen id={ROCKING_AUNT_ID} additionalCss={OfferStyle}>
        <div css={OfferBoxStyle}>
            <RockingAuntContent />
        </div>
        <div css={OfferImageWrapperStyle}>
            <CircleImage icon={ImageResource.rockingAunt} />
        </div>
        <div css={PriceTagWrapperStyle}>
            <PriceTag price={"depends"} currency={""}/>
        </div>
    </Fullscreen>
}