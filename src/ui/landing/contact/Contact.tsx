/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { useTranslation } from "react-i18next"
import { MyText } from "../../components/text/MyText"
import { MyInput } from "../../components/input/MyInput"
import { useState } from "react"
import { mobileCss } from "../../util/isMobile"
import { MyButton } from "../../components/button/MyButton"
import { PhoneNumber } from "../../components/phoneNumber/PhoneNumber"
import { Socials } from "./Socials"

export const CONTACT_ID = 'contact'

const ContactStyle = withMyTheme((theme) => css`
    background: ${alpha(theme.palette.primary.main, 0.05)};
    position: relative;
`)

const ContactStyleContent = withMyTheme((theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 80vw;
`)

const ContactDescriptionStyle = withMyTheme((theme) => css`
    text-align: center;
`)

const ContactInput = withMyTheme((theme) => css`
    width: 40vw;
    ${mobileCss(`
        width: 80vw;
    `)}
`)

const Spacer = withMyTheme((theme) => css`
    margin-top: 1rem;
`)

export const Contact = () => {
    const { t } = useTranslation()

    const [message, setMessage] = useState('')
    const [contact, setContact] = useState('')

    return <Fullscreen id={CONTACT_ID} additionalCss={ContactStyle}>
        <div css={ContactStyleContent}>
            <MyHeader text={t('contact.title')}/>
            <MyText text={t('contact.description')} additionalCss={ContactDescriptionStyle}/>
            <div css={Spacer}/>
            <MyInput
                value={contact}
                label={t('contact.contactLabel')}
                placeholder={t('contact.contactPlaceholder')}
                additionalCss={ContactInput}
                onChange={(value) => setContact(value)} />
            <MyInput
                value={message}
                label={t('contact.messageLabel')}
                placeholder={t('contact.messagePlaceholder')}
                multiline={true}
                onChange={(value) => setMessage(value)}
                additionalCss={ContactInput}
            />
            <MyButton text={t('contact.send')} variant={"secondary"} />
            <div css={Spacer}/>
            <div css={Spacer}/>
            <Socials />
            <div css={Spacer}/>
            <PhoneNumber phoneNumber={t('contact.phoneNumber')}/>
        </div>
    </Fullscreen>
}