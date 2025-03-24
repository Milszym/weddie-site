/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { useEffect, useState } from "react"
import { MyButton } from "../../components/button/MyButton"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const TitleContainerStyle = withMyTheme((theme: Theme) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${theme.typography.body1.fontFamily};
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`)

const DateStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.secondary};
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

const CountdownItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 70px;
    transition: transform 0.3s ease-in-out;
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
        </Fullscreen>
    )
}