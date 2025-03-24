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
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    text-align: center;
    gap: 2rem;
`)

const DescriptionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
`)

const ButtonStyle = withMyTheme((theme: Theme) => css`
    background: ${theme.palette.primary.main};
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    &:hover {
        background: ${theme.palette.primary.dark};
    }
`)

const PreviewImageStyle = withMyTheme((theme: Theme) => css`
    width: 100%;
    max-width: 600px;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`)

export const Gallery = () => {
    const { t } = useTranslation()

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('gallery.title')} additionalCss={HeaderStyle}/>
                <div css={ContainerStyle}>
                    <div css={DescriptionStyle}>
                        {t('gallery.description')}
                    </div>
                    <img 
                        src={t('gallery.previewImage')} 
                        alt={t('gallery.title')}
                        css={PreviewImageStyle}
                    />
                    <a 
                        href={t('gallery.link')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        css={ButtonStyle}
                    >
                        {t('gallery.buttonText')}
                    </a>
                </div>
            </div>
        </Fullscreen>
    )
} 