/** @jsxImportSource @emotion/react */
import {useTranslation} from "react-i18next"
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"
import {mobileCss} from "../../theme/isMobile"
import {MyButton} from "../../components/button/MyButton"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import {openUrl} from "../../util/openUrl";

const GALLERY_URL = 'https://drive.google.com/drive/folders/1-nlWIF4GRFl7ZAxh2sfVhma0JME5PKqM?usp=sharing'

const MemoriesSectionStyle = withMyTheme(() => css`
    background-color: white;
    width: 100vw;
    height: 100vh;
`)

const MemoriesContentStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;

    ${mobileCss(`
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        align-content: center;
    `)}
`)

const MemoriesTextStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: column;
    justify-items: center;
    flex: 1;
    align-items: center;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};

    ${mobileCss(`
        display: flex;
        flex: 0;
        justify-content: center;
        justify-items: center;
        align-items: center;
    `)}
`)

const MemoriesTitleStyle = withMyTheme((theme) => css`
    font-size: 4vw;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
    text-align: center;

    ${mobileCss(`
        font-size: 9vw;
    `)}
`)

const MemoriesDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.7em;
    width: 70%;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 200;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.body1.fontFamily};
    text-align: center;
    margin-bottom: 1em;

    ${mobileCss(`
        width: 85%;
        font-size: 6vw;
    `)}
`)

const MemoriesButtonStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.5rem;
    ${mobileCss(`
        font-size: 5vw;
    `)}
`)

const MemoriesImageContainerStyle = withMyTheme(() => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;

    ${mobileCss(`
        display: inline-block;
        flex: 0;
        margin-top: 5vh;
    `)}
`)

const MemoriesImageStyle = withMyTheme(() => css`
    max-width: 40vw;
    max-height: 40vw;
    object-fit: cover;
    border-radius: 50%;
    border: solid 4px #daaa98;
    aspect-ratio: 1;

    ${mobileCss(`
        height: 70vw;
        max-height: 70vw;
        max-width: 70vw;
        aspect-ratio: 1;
    `)}
`)

export const Memories = () => {
    const {t} = useTranslation()

    const navigateToGallery = () => {
        openUrl(GALLERY_URL, false)
    }

    return (
        <section id="memories" css={MemoriesSectionStyle}>
            <div css={MemoriesContentStyle}>
                <div css={MemoriesTextStyle}>
                    <div css={MemoriesTitleStyle}>{t('memories.title')}</div>
                    <br/>
                    <div css={MemoriesDescriptionStyle}>{t('memories.description')}</div>
                    <br/>
                    <MyButton
                        variant="contained"
                        additionalCss={MemoriesButtonStyle}
                        colorVariant="primary"
                        startIcon={<PhotoLibraryIcon/>}
                        text={t('memories.gallery')}
                        onClick={navigateToGallery}
                    />
                </div>
                <div css={MemoriesImageContainerStyle}>
                    <img css={MemoriesImageStyle} src="/images/memories_photo.jpeg" alt="Memories"/>
                </div>
            </div>
        </section>
    )
}
