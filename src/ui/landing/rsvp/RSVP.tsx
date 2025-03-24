/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { useState } from "react"

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
    width: 100%;
    gap: 2rem;
`)

const FormStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`)

const InputStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }
`)

const TextAreaStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    min-height: 150px;
    resize: vertical;
    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }
`)

const ButtonStyle = withMyTheme((theme: Theme) => css`
    background: ${theme.palette.primary.main};
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background: ${theme.palette.primary.dark};
    }
`)

const ContactInfoStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`)

const ContactItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`)

const ContactLabelStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.main};
    font-size: 1.1rem;
`)

const ContactValueStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`)

export const RSVP = () => {
    const { t } = useTranslation()
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
        setFormData({ name: '', message: '', contact: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Fullscreen>
            <div css={BoxStyle}>
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
                        <button type="submit" css={ButtonStyle}>
                            {t('rsvp.submitButton')}
                        </button>
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
            </div>
        </Fullscreen>
    )
} 