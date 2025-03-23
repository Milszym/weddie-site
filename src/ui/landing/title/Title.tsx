/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css } from "@emotion/react"
import { alpha } from "@mui/material"
import { MyText } from "../../components/text/MyText"

const TitleStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.primary.main, 0.05)};
`)

const TitleContentStyle = withMyTheme((theme) => css`
    max-width: 80vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`)

const TitleTextPrimaryStyle = withMyTheme((theme) => css`
    font-size: clamp(4rem, 2.5vw, 3rem);
    color: ${theme.palette.primary.main};
    `)
    
const TitleTextSecondaryStyle = withMyTheme((theme) => css`
    font-size: clamp(4rem, 2.5vw, 3rem);
    color: ${theme.palette.secondary.main};
`)

const SubtitleTextStyle = withMyTheme((theme) => css`
    font-size: 1.8rem;
    color: ${theme.palette.text.primary};
    text-align: center;
`)

const DescriptionTextStyle = withMyTheme((theme) => css`
    font-size: 1.4rem;
    color: ${theme.palette.text.primary};
    text-align: center;
`)

export const Title = () => {
    const { t } = useTranslation()

    const title = <>
        <span css={TitleTextSecondaryStyle}>{t('title.titlePart1')}</span>
        <span css={TitleTextPrimaryStyle}>{t('title.titlePart2')}</span>
        <span css={TitleTextSecondaryStyle}>{t('title.titlePart3')}</span>
    </>

    return <Fullscreen additionalCss={TitleStyle}>
        <div css={TitleContentStyle}>
            <MyHeader text={title} />
            <MyHeader text={t('title.subtitle')} additionalCss={SubtitleTextStyle} />
            <MyText text={t('title.description')} additionalCss={DescriptionTextStyle}/>
        </div>
    </Fullscreen >
}