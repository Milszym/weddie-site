/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { useTranslation } from "react-i18next"

export const DOMAIN_INSTRUCTIONS_ID = 'domainInstructions'

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.secondary.main, 0.05)};
    position: relative;
`)

export const DomainInstructions = () => {
    const { t } = useTranslation()

    return <Fullscreen id={DOMAIN_INSTRUCTIONS_ID} additionalCss={OfferStyle}>
        <MyHeader text={t('domainInstructions.title')} />
    </Fullscreen>
}