/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyButton } from "../../components/button/MyButton"
import { MyHeader } from "../../components/text/MyHeader"
import { Box, css, Theme } from "@mui/material"
import { SiteOffer } from "./SiteOffer"
import { ImageResource } from "../../resources/ImageResource"
import { UNCLE_ON_A_WEDDING_ID } from "../unlceOnAWedding/UncledOnAWedding"
import { ROCKING_AUNT_ID } from "../rockingAunt/RockingAunt"
import { scrollToSection } from "../../util/scroll"

const OffersContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
`)

const OffersStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vw;
`)

export const SiteOffers = () => {
    const { t } = useTranslation()

    const navigateToFirstOffer = () => {
        scrollToSection(UNCLE_ON_A_WEDDING_ID)
    }

    const navigateToSecondOffer = () => {
        scrollToSection(ROCKING_AUNT_ID)
    }

    return <Fullscreen>
        <div css={OffersContainerStyle}>
            <MyHeader text={t('siteOffers.title')} />
            <div css={OffersStyle}>
                <SiteOffer
                    icon={ImageResource.uncleOnWedding}
                    title={t('siteOffers.firstOffer')}
                    description={t('siteOffers.firstOfferDescription')}
                    onClick={navigateToFirstOffer} />
                <SiteOffer
                    icon={ImageResource.rockingAunt}
                    title={t('siteOffers.secondOffer')}
                    description={t('siteOffers.secondOfferDescription')}
                    onClick={navigateToSecondOffer} />
            </div>
        </div>
    </Fullscreen>
}