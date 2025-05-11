/** @jsxImportSource @emotion/react */
import { Countdown } from "./Countdown"
import { useEffect, useState } from "react"
import { MainConfig } from "../../../config/MainConfig"
import { useTranslation } from "react-i18next"
import { css, Theme } from "@mui/material"
import { withMyTheme } from "../../theme/theme"
import { mobileCss } from "../../theme/isMobile"
import { tabletCss } from "../../theme/isTablet"
import { MyButton } from "../../components/button/MyButton"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Fullscreen } from "../../components/Fullscreen"
import {openUrl} from "../../util/openUrl";

const TitleContainerStyle = withMyTheme((theme: Theme) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-family: ${theme.typography.body1.fontFamily};
    position: relative;
    overflow: hidden;
    z-index: 1;

    ${mobileCss(`
        justify-content: center;
    `)}
`)

const BackgroundImageStyle = withMyTheme(() => css`
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 1;
`)

const OverlayStyle = withMyTheme(() => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 60%;
    background-color: #000;
    z-index: 2;
`)

const ContentWrapperStyle = withMyTheme((theme: Theme) => css`
    z-index: 3;
    color: #fff;
    font-weight: 200;
    display: flex;
    height: 100vh;
    align-content: center;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
    padding: 2rem 1rem;
    width: 90%;
    max-width: 800px;

    ${tabletCss(`
        padding: 1.75rem 1rem;
        width: 95%;
    `)}
    ${mobileCss(`
        padding: 1.5rem 0.75rem;
        width: 95%;
        align-items: center;
        justify-content: flex-start;
    `)}
`)

const TitleTextStyle = withMyTheme((theme: Theme) => css`
    font-size: 6.3vw;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
    font-weight: 500;

    ${mobileCss(`
        font-size: 3.5em;
        margin-top: 11vh;
    `)}
`)

const DateHourWrapperStyle = withMyTheme((theme) => css`
    line-height: 1.5;
    cursor: pointer;
    font-family: ${theme.typography.h1.fontFamily};
`)

const DateStyle = withMyTheme((theme) => css`
    font-size: 4.3vw;
    color: ${theme.palette.primary.contrastText};
    font-family: ${theme.typography.h1.fontFamily};
    
    ${mobileCss(`
        font-size: 2em;
        cursor: pointer;
    `)}
`)

const HourStyle = withMyTheme(() => css`
    font-size: clamp(2vw, 2vw, 20vw);
    color: #fff;
    margin-bottom: 1em;

    ${mobileCss(`
        font-size: 1.5em;
        cursor: pointer;
    `)}
`)

const CalendarButtonWrapperStyle = withMyTheme(() => css`
    margin-top: .6em;

    ${mobileCss(`
        margin-top: auto;
    `)}
`)

const CalendarButtonStyle = withMyTheme(() => css`
    font-size: .8rem;

    ${mobileCss(`
        font-size: 3vw;
    `)}
`)

const CountdownWrapperStyle = withMyTheme(() => css`
    margin-top: 2em;
    margin-bottom: 2em;
`)

export const Title = () => {
    const { t } = useTranslation()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const addEventToGoogleCalendar = () => {
        const event = {
            title: t('title.calendarEventName'),
            description: t('title.calendarEventDescription'),
            location: MainConfig.title.calendarEventLocation,
            startTime: MainConfig.title.exactStartDate,
            endTime: MainConfig.title.exactEndDate,
        };

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/-|:|\./g, '')}/${event.endTime.replace(/-|:|\./g, '')}`;

        openUrl(googleCalendarUrl, false)
    };

    const imagePath = isMobile ? '/images/zdjecie_z_wesela_cropped.jpg' : '/images/title_a_cropped.jpg'

    return (
        <Fullscreen additionalCss={TitleContainerStyle}>
            <img css={BackgroundImageStyle} src={imagePath} alt="Wedding background" />
            <div css={OverlayStyle} />
            <div css={ContentWrapperStyle}>
                <div css={TitleTextStyle}>
                    {t('title.names')}
                </div>
                <div css={DateHourWrapperStyle} onClick={addEventToGoogleCalendar}>
                    <span css={DateStyle}>
                        {t('title.date')}
                    </span>
                    <br/>
                    <span css={HourStyle}>
                        {MainConfig.title.hour}
                    </span>
                </div>
                <div css={CalendarButtonWrapperStyle}>
                    <MyButton
                        additionalCss={CalendarButtonStyle}
                        variant="outlined"
                        colorVariant="secondary"
                        startIcon={<CalendarMonthIcon />}
                        onClick={addEventToGoogleCalendar}
                        text={t('title.addEventToCalendar')}
                    />
                </div>
                <div css={CountdownWrapperStyle}>
                    <Countdown targetDate={MainConfig.marriageDate} addEventToGoogleCalendar={addEventToGoogleCalendar} />
                </div>
            </div>
        </Fullscreen>
    )
}
