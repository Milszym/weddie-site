/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { useEffect, useState } from "react"
import { MyButton } from "../../components/button/MyButton"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { getHexWithOpacity } from "../../theme/getHexWithOpacity"

const TitleContainerStyle = withMyTheme((theme: Theme) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align content to the bottom */
    align-items: center;
    font-family: ${theme.typography.body1.fontFamily};
    position: relative;
    overflow: hidden; /* To ensure the background stays within the container */
    z-index: 1; /* Establish a stacking context */
    padding-bottom: 2rem; /* Add bottom margin as requested */
    
    /* Add a pseudo-element for the background with fading effect */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/images/title_bg.png');
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        opacity: 0.6; /* Make the entire image slightly transparent */
        /* Overlay the image with a gradient of secondary.main color that fades out */
        mask-image: linear-gradient(
            to bottom,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.9)} 0%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.5)} 50%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.2)} 65%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.1)} 75%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0)} 100%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.9)} 0%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.5)} 50%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.2)} 65%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.1)} 75%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0)} 100%
        );
        z-index: -1;
    }
    
    /* Add a second pseudo-element for the secondary accent color overlay */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.15)} 0%,
            ${getHexWithOpacity(theme.palette.secondary.main, 0.05)} 70%,
            transparent 100%
        );
        z-index: -1;
    }
`)

// Update content wrapper to remove background and position at bottom
const ContentWrapperStyle = withMyTheme((theme: Theme) => css`
    padding: 2rem 1rem;
    width: 90%;
    max-width: 800px;
    z-index: 2;
    /* Add a subtle text shadow for better readability against the background */
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`)

const DateStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.dark};
    font-size: 1.8rem;
    margin-bottom: 3rem;
    font-weight: 300;
    font-family: ${theme.typography.body1.fontFamily};
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`)

const CountdownContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 4rem;
    color: ${theme.palette.text.secondary};
    font-size: 1.2rem;
    font-family: ${theme.typography.body1.fontFamily};
    @media (max-width: 768px) {
        gap: 1.5rem;
        font-size: 1rem;
        flex-wrap: wrap;
    }
`)

// Add a subtle background to countdown items for better readability
const CountdownItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 70px;
    transition: transform 0.3s ease-in-out;
    background-color: ${getHexWithOpacity('#FFFFFF', 0.6)};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    &:hover {
        transform: translateY(-3px);
    }
`)

const CountdownNumberStyle = withMyTheme((theme: Theme) => css`
    font-size: 3.5rem;
    font-weight: 500;
    color: ${theme.palette.secondary.main};
    line-height: 1.1;
    margin-bottom: 0.3rem;
    font-family: ${theme.typography.body1.fontFamily};
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`)

const CountdownLabelStyle = withMyTheme((theme: Theme) => css`
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${theme.palette.text.disabled};
    font-family: ${theme.typography.body1.fontFamily};
`)

export const Title = () => {
    const { t } = useTranslation()
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const weddingDateTime = '20250705T160000'
    const weddingEndDateTime = '20250705T230000'

    const googleCalendarStart = weddingDateTime.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/, '$1$2$3T$4$5$6')
    const googleCalendarEnd = weddingEndDateTime.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/, '$1$2$3T$4$5$6')

    const eventTitle = t('calendar.title', 'Our Wedding!')
    const eventDescription = t('calendar.description', 'Join us to celebrate our wedding!')
    const eventLocation = t('calendar.location', 'Venue Name, Address')

    useEffect(() => {
        const weddingDateForCountdown = new Date(weddingDateTime.substring(0, 4) + '-' + weddingDateTime.substring(4, 6) + '-' + weddingDateTime.substring(6, 8) + 'T' + weddingDateTime.substring(9, 11) + ':' + weddingDateTime.substring(11, 13) + ':' + weddingDateTime.substring(13, 15))

        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = weddingDateForCountdown.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [weddingDateTime])

    const formatNumber = (num: number) => num.toString().padStart(2, '0')

    const handleAddToCalendar = () => {
        const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
        googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
        googleCalendarUrl.searchParams.append('text', eventTitle);
        googleCalendarUrl.searchParams.append('dates', `${googleCalendarStart}/${googleCalendarEnd}`);
        googleCalendarUrl.searchParams.append('details', eventDescription);
        googleCalendarUrl.searchParams.append('location', eventLocation);
        googleCalendarUrl.searchParams.append('sf', 'true');
        googleCalendarUrl.searchParams.append('output', 'xml');

        window.open(googleCalendarUrl.toString(), '_blank');
    }

    return (
        <Fullscreen additionalCss={TitleContainerStyle}>
            <div css={ContentWrapperStyle}>
                <MyHeader text={t('title.title')} additionalCss={HeaderStyle}/>
                <div css={DateStyle}>{t('title.date')}</div>

                <div css={CountdownContainerStyle}>
                    <div css={CountdownItemStyle}>
                        <span css={CountdownNumberStyle}>{timeLeft.days}</span>
                        <span css={CountdownLabelStyle}>{t('title.days')}</span>
                    </div>
                    <div css={CountdownItemStyle}>
                        <span css={CountdownNumberStyle}>{formatNumber(timeLeft.hours)}</span>
                        <span css={CountdownLabelStyle}>{t('title.hours')}</span>
                    </div>
                    <div css={CountdownItemStyle}>
                        <span css={CountdownNumberStyle}>{formatNumber(timeLeft.minutes)}</span>
                        <span css={CountdownLabelStyle}>{t('title.minutes')}</span>
                    </div>
                    <div css={CountdownItemStyle}>
                        <span css={CountdownNumberStyle}>{formatNumber(timeLeft.seconds)}</span>
                        <span css={CountdownLabelStyle}>{t('title.seconds')}</span>
                    </div>
                </div>

                <MyButton
                    variant="outlined"
                    colorVariant="primary"
                    startIcon={<CalendarMonthIcon />}
                    onClick={handleAddToCalendar}
                    text={t('title.addToCalendar')}
                />
            </div>
        </Fullscreen>
    )
}