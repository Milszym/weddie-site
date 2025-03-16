/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { useTranslation } from "react-i18next"

export const CONTACT_ID = 'contact'

const OfferStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.secondary.main, 0.05)};
    position: relative;
`)

export const Contact = () => {
    const { t } = useTranslation()

    return <Fullscreen id={CONTACT_ID} additionalCss={OfferStyle}>
        <MyHeader text={t('contact.title')} />
    </Fullscreen>
}