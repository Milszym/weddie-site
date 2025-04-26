/** @jsxImportSource @emotion/react */
import {useTranslation} from "react-i18next"
import {Fullscreen} from "../../components/Fullscreen"
import {MyHeader} from "../../components/text/MyHeader"
import {withMyTheme} from "../../theme/theme"
import {css, Theme} from "@mui/material"
import {useState} from "react"
import {MyButton} from "../../components/button/MyButton"
import {getHexWithOpacity} from "../../theme/getHexWithOpacity"
import {mobileCss} from "../../theme/isMobile";
import {tabletCss} from "../../theme/isTablet";

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
    margin-bottom: 2rem;
    text-align: center;
    ${tabletCss(`
        margin-bottom: 1.75rem;
    `)}
    ${mobileCss(`
        max-width: 90%;
        margin-bottom: 1.5rem;
    `)}
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    gap: 2rem;
    min-width: 40%;
    ${tabletCss(`
        gap: 1.75rem;
    `)}
    ${mobileCss(`
        width: 75%;
        gap: 1.5rem;
    `)}
`)

const FormStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 90vw;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`)

const InputStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-size: 1.5rem;
    font-family: ${theme.typography.body1.fontFamily};

    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }

    ${mobileCss(`
        font-size: 1.2rem;
    `)}
`)

const TextAreaStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-size: 1.5rem;
    font-family: ${theme.typography.body1.fontFamily};
    min-height: 150px;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }

    ${mobileCss(`
        font-size: 1.2rem;
    `)}
`)

const ContactInfoStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2rem;
    ${tabletCss(`
        gap: 1.5rem;
        margin-top: 1.75rem;
        justify-content: center;
    `)}
    ${mobileCss(`
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;
    `)}
`)

const ContactItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    ${tabletCss(`
        min-width: 150px;
    `)}
`)

const ContactLabelStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.main};
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-family: ${theme.typography.body1.fontFamily};
    ${tabletCss(`
        text-align: center;
    `)}
`)

const ContactValueStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    text-decoration: none;
    font-family: ${theme.typography.body1.fontFamily};

    ${tabletCss(`
        text-align: center;
    `)}
    &:hover {
        text-decoration: underline;
    }
`)

export const RSVP = () => {
    const {t} = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        contact: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({name: '', message: '', contact: ''})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    return (
        <Fullscreen additionalCss={BoxStyle}>
            <MyHeader text={t('rsvp.title')} additionalCss={HeaderStyle}/>
            <div css={ContainerStyle}>
                <form css={FormStyle} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('rsvp.namePlaceholder')}
                        value={formData.name}
                        onChange={handleChange}
                        css={InputStyle}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t('rsvp.messagePlaceholder')}
                        value={formData.message}
                        onChange={handleChange}
                        css={TextAreaStyle}
                        required
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder={t('rsvp.contactPlaceholder')}
                        value={formData.contact}
                        onChange={handleChange}
                        css={InputStyle}
                        required
                    />
                    <MyButton
                        text={t('rsvp.submitButton')}
                        type="submit"
                        colorVariant="primary"
                        variant="outlined"
                    />
                </form>

                <div css={ContactInfoStyle}>
                    <div css={ContactItemStyle}>
                        <div css={ContactLabelStyle}>{t('rsvp.bride')}</div>
                        <a href={`tel:${t('rsvp.bridePhone')}`} css={ContactValueStyle}>
                            {t('rsvp.bridePhone')}
                        </a>
                    </div>
                    <div css={ContactItemStyle}>
                        <div css={ContactLabelStyle}>{t('rsvp.groom')}</div>
                        <a href={`tel:${t('rsvp.groomPhone')}`} css={ContactValueStyle}>
                            {t('rsvp.groomPhone')}
                        </a>
                    </div>
                </div>
            </div>
        </Fullscreen>
    )
} 
