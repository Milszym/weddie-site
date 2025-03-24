/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
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
`)

const PhoneStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.main};
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`)

export const Witnesses = () => {
    const { t } = useTranslation()

    return (
        <Fullscreen>
            <div css={BoxStyle}>
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
            </div>
        </Fullscreen>
    )
} 