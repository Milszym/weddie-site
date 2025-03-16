/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { alpha, css, Theme } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { useTranslation } from "react-i18next"
import { MyText } from "../../components/text/MyText"
import { MyInput } from "../../components/input/MyInput"
import { useState } from "react"
import { MyButton } from "../../components/button/MyButton"
import { PhoneNumber } from "../../components/phoneNumber/PhoneNumber"
import { ImageResource } from "../../resources/ImageResource"

export const CONTACT_ID = 'contact'

const FACEBOOK_URL = 'https://www.facebook.com/weddie.site'
const INSTAGRAM_URL = 'https://www.instagram.com/weddie.site'
const WHATS_APP_URL = 'https://wa.me/48665123549'

const SocialsStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8vw;
`)

const SocialIconStyle = withMyTheme((theme) => css`
    width: 3rem;
    aspect-ratio: 1;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    :hover {
        transform: scale(1.1);
        z-index: 1;
    }
`)

export const Socials = () => {
    return <div css={SocialsStyle}>
        <img src={ImageResource.instagramIcon} alt={''} css={SocialIconStyle} />
        <img src={ImageResource.facebookIcon} alt={''} css={SocialIconStyle} />
        <img src={ImageResource.whatsAppIcon} alt={''} css={SocialIconStyle} />
    </div>
}