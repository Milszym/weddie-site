/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { SiteOfferImage } from "../siteOffers/SiteOfferImage"
import { Fullscreen } from "../../components/Fullscreen"
import { ImageResource } from "../../resources/ImageResource"
import { useTranslation } from "react-i18next"
import { MyHeader } from "../../components/text/MyHeader"

export const UNCLE_ON_A_WEDDING_ID = 'uncleOnAWedding'

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.secondary.main, 0.05)};
`)

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
`)

export const UncleOnAWedding = () => {
    const { t } = useTranslation()

    return <Fullscreen id={UNCLE_ON_A_WEDDING_ID} additionalCss={OfferStyle}>
        <div css={OfferBoxStyle}>
            <MyHeader text={t('uncleOnAWedding.title')} />
            <SiteOfferImage icon={ImageResource.uncleOnWedding} title={t('siteOffers.firstOffer')} />
        </div>
    </Fullscreen>
}