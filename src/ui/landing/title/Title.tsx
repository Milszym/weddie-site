/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { useEffect, useState } from "react"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 4rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`)

const DateStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.main};
    font-size: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`)

const CountdownStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`)

const CountdownItemStyle = withMyTheme((theme: Theme) => css`
    display: inline-block;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    background: ${theme.palette.primary.light};
    color: white;
    border-radius: 8px;
    min-width: 80px;
`)

export const Title = () => {
    const { t } = useTranslation()
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const weddingDate = new Date('2025-07-05T00:00:00')
        
        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = weddingDate.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('title.title')} additionalCss={HeaderStyle}/>
                <div css={DateStyle}>{t('title.date')}</div>
                <div css={CountdownStyle}>
                    <div css={CountdownItemStyle}>{timeLeft.days} {t('title.days')}</div>
                    <div css={CountdownItemStyle}>{timeLeft.hours} {t('title.hours')}</div>
                    <div css={CountdownItemStyle}>{timeLeft.minutes} {t('title.minutes')}</div>
                    <div css={CountdownItemStyle}>{timeLeft.seconds} {t('title.seconds')}</div>
                </div>
            </div>
        </Fullscreen>
    )
}