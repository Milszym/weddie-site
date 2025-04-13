/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { MyButton } from "ui/components/button/MyButton"
import { mobileCss } from "ui/theme/isMobile"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    min-height: 100%;
    width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
    font-family: ${theme.typography.body1.fontFamily};
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
    margin-top: 3rem;
    gap: 2rem;
    ${mobileCss(`
        max-width: 90%;
    `)}
`)

const DescriptionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-family: ${theme.typography.body1.fontFamily};
`)

const PreviewImageStyle = withMyTheme((theme: Theme) => css`
    width: 100%;
    max-width: 600px;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ${mobileCss(`
        max-width: 85%;
    `)}
`)

export const Gallery = () => {
    const { t } = useTranslation()

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('gallery.title')} additionalCss={HeaderStyle} />
                <div css={ContainerStyle}>
                    <div css={DescriptionStyle}>
                        {t('gallery.description')}
                    </div>
                    <img
                        src={t('gallery.previewImage')}
                        alt={t('gallery.title')}
                        css={PreviewImageStyle}
                    />
                    <MyButton
                        text={t('gallery.buttonText')}
                        type="submit"
                        onClick={() => window.open(t('gallery.link'), '_blank')}
                        colorVariant="primary"
                        variant="outlined" />
                </div>
            </div>
        </Fullscreen>
    )
} 