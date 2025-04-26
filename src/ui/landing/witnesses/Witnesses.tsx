/** @jsxImportSource @emotion/react */
import {useTranslation} from "react-i18next"
import {Fullscreen} from "../../components/Fullscreen"
import {MyHeader} from "../../components/text/MyHeader"
import {withMyTheme} from "../../theme/theme"
import {css, Theme} from "@mui/material"
import {getHexWithOpacity} from "../../theme/getHexWithOpacity"
import {mobileCss} from "ui/theme/isMobile"
import {tabletCss} from "ui/theme/isTablet"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${getHexWithOpacity(theme.palette.primary.main, 0.05)};
    font-family: ${theme.typography.body1.fontFamily};
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;
    ${tabletCss(`
        margin-bottom: 3rem;
    `)}
    ${mobileCss(`
        margin-bottom: 2rem;    
    `)}
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    ${tabletCss(`
        gap: 3rem;
        max-width: 90%;
    `)}
    ${mobileCss(`
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 0 1rem;
        margin-top: 1.5rem;
    `)}
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

    ${tabletCss(`
        max-width: 350px;
        padding: 1.75rem;
    `)}
    ${mobileCss(`
        max-width: 300px;
        padding: 1.5rem;
        width: 100%;
    `)}
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
    ${tabletCss(`
        width: 180px;
        height: 180px;
        margin-bottom: 1.25rem;
    `)}
    ${mobileCss(`
        width: 160px;
        height: 160px;
        margin-bottom: 1rem;
    `)}
`)

const NameStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: clamp(2rem, 2.5vw, 1.5rem);
    margin-bottom: 1rem;
    font-family: ${theme.typography.h1.fontFamily};
    font-weight: 500;
    ${tabletCss(`
        margin-bottom: 0.9rem;
    `)}
    ${mobileCss(`
        margin-bottom: 0.8rem;
    `)}
`)

const PhoneStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.dark};
    font-size: clamp(1.7rem, 2.5vw, 1rem);
    text-decoration: none;
    font-family: ${theme.typography.body1.fontFamily};

    ${tabletCss(`
        padding: 0.2rem 0;
    `)}
    ${mobileCss(`
        padding: 0.3rem 0;
    `)}
    &:hover {
        text-decoration: underline;
    }
`)

export const Witnesses = () => {
    const {t} = useTranslation()

    return (
        <Fullscreen additionalCss={BoxStyle}>
            <MyHeader text={t('witnesses.title')} additionalCss={HeaderStyle}/>
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
        </Fullscreen>
    )
} 
