/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { getHexWithOpacity } from "../../theme/getHexWithOpacity"
import { mobileCss } from "ui/theme/isMobile"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    min-height: 100vh;
    width: 100%;
    background: ${getHexWithOpacity(theme.palette.primary.main, 0.05)};
    font-family: ${theme.typography.body1.fontFamily};
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    ${mobileCss(`
        margin-bottom: 4rem;    
    `)}
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1rem;
    box-sizing: border-box;
    ${mobileCss(`
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 0 1rem;
        margin-top: 3rem;
    `)}
    }
`)

const WitnessCardStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    max-width: 400px;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`)

const ImageStyle = withMyTheme((theme: Theme) => css`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid ${theme.palette.primary.light};
`)

const NameStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-family: ${theme.typography.h1.fontFamily};
    font-weight: 500;
`)

const PhoneStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.dark};
    font-size: 1.2rem;
    text-decoration: none;
    font-family: ${theme.typography.body1.fontFamily};
    &:hover {
        text-decoration: underline;
    }
`)

export const Witnesses = () => {
    const { t } = useTranslation()

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('witnesses.title')} additionalCss={HeaderStyle} />
                <div css={ContainerStyle}>
                    <div css={WitnessCardStyle}>
                        <img
                            src={t('witnesses.witness1.image')}
                            alt={t('witnesses.witness1.name')}
                            css={ImageStyle}
                        />
                        <div css={NameStyle}>{t('witnesses.witness1.name')}</div>
                        <a href={`tel:${t('witnesses.witness1.phone')}`} css={PhoneStyle}>
                            {t('witnesses.witness1.phone')}
                        </a>
                    </div>
                    <div css={WitnessCardStyle}>
                        <img
                            src={t('witnesses.witness2.image')}
                            alt={t('witnesses.witness2.name')}
                            css={ImageStyle}
                        />
                        <div css={NameStyle}>{t('witnesses.witness2.name')}</div>
                        <a href={`tel:${t('witnesses.witness2.phone')}`} css={PhoneStyle}>
                            {t('witnesses.witness2.phone')}
                        </a>
                    </div>
                </div>
            </div>
        </Fullscreen>
    )
} 