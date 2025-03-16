import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyButton } from "../../components/button/MyButton"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css } from "@emotion/react"
import { alpha } from "@mui/material"

const TitleStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.primary.main, 0.05)};
`)

export const Title = () => {
    const { t } = useTranslation()

    return <Fullscreen additionalCss={TitleStyle}>
        <MyHeader text={t('title.title')} />
        <MyButton text={t('title.button')} />
    </Fullscreen>
}