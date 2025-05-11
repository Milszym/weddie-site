/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react";
import {css, Theme} from "@mui/material";
import {withMyTheme} from "../../theme/theme";
import {mobileCss} from "../../theme/isMobile";
import {tabletCss} from "../../theme/isTablet";
import {useTranslation} from "react-i18next";

interface CountdownProps {
    targetDate: Date,
    addEventToGoogleCalendar: () => void
}

const CountdownContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: .5rem;
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.text.secondary};
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-family: ${theme.typography.body1.fontFamily};
    ${tabletCss(`
        gap: 1.5rem;
        margin-bottom: 1rem;
    `)}
    ${mobileCss(`
        gap: 5vw;
        flex-wrap: wrap;
        margin-bottom: 3vh;
  `)}
`)

const CountdownItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    ${tabletCss(`
    padding: 0.4rem 0.9rem;
  `)}
    ${mobileCss(`
    padding: 0.3rem 0.8rem;
  `)}
    &:hover {
        transform: translateY(-3px);
    }
`)

const CountdownNumberStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 500;
    color: ${theme.palette.primary.contrastText};
    line-height: 1.1;
    margin-bottom: 0.3rem;
    font-family: ${theme.typography.h1.fontFamily};
`)

const CountdownLabelStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${theme.palette.primary.contrastText};
    font-family: ${theme.typography.body1.fontFamily};
`)

const ThankYouMessageStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.5rem;
    text-align: center;
    color: ${theme.palette.primary.contrastText};
    padding: 2rem;
    font-family: ${theme.typography.h1.fontFamily};
`)

export const Countdown = (props: CountdownProps) => {
    const {t} = useTranslation();

    const calculateTimeLeft = () => {
        const difference = props.targetDate.getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return null; // Time has expired
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clean up timer on component unmount
    }, [props.targetDate]);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    if (!timeLeft) {
        return <div
            css={ThankYouMessageStyle}>{t('title.thankYouMessage', 'Dziękujemy za spędzenie z nami tego wyjątkowego dnia!')}</div>;
    }

    return (
        <div css={CountdownContainerStyle} onClick={props.addEventToGoogleCalendar}>
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
    );
}
