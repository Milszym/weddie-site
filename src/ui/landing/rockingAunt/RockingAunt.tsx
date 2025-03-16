/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { SiteOfferImage } from "../siteOffers/SiteOfferImage"
import { Fullscreen } from "../../components/Fullscreen"
import { ImageResource } from "../../resources/ImageResource"
import { useTranslation } from "react-i18next"
import { MyHeader } from "../../components/text/MyHeader"

export const ROCKING_AUNT_ID = "rockingAunt"

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.primary.main, 0.05)};
`)

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
`)

export const RockingAunt = () => {
    const { t } = useTranslation()

    return <Fullscreen id={ROCKING_AUNT_ID} additionalCss={OfferStyle}>
        <div css={OfferBoxStyle}>
            <MyHeader text={t('rockingAunt.title')} />
            <SiteOfferImage icon={ImageResource.rockingAunt} title={t('siteOffers.secondOffer')} />
        </div>
    </Fullscreen>
}