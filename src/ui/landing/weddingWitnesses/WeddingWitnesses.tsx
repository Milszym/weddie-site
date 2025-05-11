/** @jsxImportSource @emotion/react */
import {useState} from "react"
import {useInView} from "react-intersection-observer"
import {useTranslation} from "react-i18next"
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"
import {mobileCss} from "../../theme/isMobile"

const WeddingWitnessesContainerStyle = withMyTheme(() => css`
    background-image: url('/images/peach_background_50.jpg');
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mobileCss(`
        background-image: url('/images/peach_background_30.png');
        display: flex;
        justify-content: center;
        align-items: center;
    `)}
`)

const WeddingWitnessesTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(2rem, 5vw, 5rem);
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};
    text-align: center;

    ${mobileCss(`
        font-size: 10vw;
    `)}
`)

const WeddingWitnessesDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1rem, 1.5vw, 2.5rem);
    margin-bottom: 2em;
    font-family: ${theme.typography.body1.fontFamily};
    color: ${theme.palette.text.primary};
    text-align: center;

    ${mobileCss(`
        margin-top: 2vh;
        margin-left: 7vw;
        margin-right: 7vw;
        font-size: 5.5vw;
    `)}
`)

const WeddingWitnessesContentStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: space-evenly;
    width: 100vw;

    ${mobileCss(`
        flex-direction: column;
        justify-content: center;
        align-content: center;
    `)}
`)

const FirstWitnessStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
`)

const SecondWitnessStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
`)

const WitnessImageStyle = withMyTheme(() => css`
    height: 40vh;
    aspect-ratio: 1;
    border-radius: 50%;
    border: solid 4px #daaa98;
    object-fit: cover;

    ${mobileCss(`
        height: 40vw;
        aspect-ratio: 1;
        margin-top: 2em;
    `)}
`)

const WitnessTextStyle = withMyTheme((theme) => css`
    font-size: 2em;
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.text.primary};
    margin-top: 1rem;
    text-align: center;
    ${mobileCss(css`
        margin-top: 0;
    `)}
`)

const WitnessSlideInFromLeftStyle = withMyTheme(() => css`
    transform: translateX(-100%);
    transition: all 0.7s ease-out;

    &.slidedIn {
        transform: translateX(0);
        opacity: 1;
    }
`)

const WitnessSlideInFromRightStyle = withMyTheme(() => css`
    transform: translateX(100%);
    transition: all 0.7s ease-out;

    &.slidedIn {
        transform: translateX(0);
        opacity: 1;
    }
`)

export const WeddingWitnesses = () => {
    const {t} = useTranslation()
    const [isVisible, setIsVisible] = useState(false);

    const {ref} = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return (
        <section id="weddingWitnesses" css={WeddingWitnessesContainerStyle}>
            <div css={WeddingWitnessesTitleStyle}>{t('witnesses.title')}</div>
            <div css={WeddingWitnessesDescriptionStyle}>{t('witnesses.description')}</div>
            <div css={WeddingWitnessesContentStyle}>
                <div
                    css={[FirstWitnessStyle, WitnessSlideInFromLeftStyle]}
                    className={isVisible ? 'slidedIn' : ''}
                    ref={ref}
                >
                    <img css={WitnessImageStyle} src="/images/monika.jpeg" alt="First witness"/>
                    <div css={WitnessTextStyle}>
                        {t('witnesses.firstWitness')}
                    </div>
                </div>
                <div
                    css={[SecondWitnessStyle, WitnessSlideInFromRightStyle]}
                    className={isVisible ? 'slidedIn' : ''}
                >
                    <img css={WitnessImageStyle} src="/images/kuba_hq.jpg" alt="Second witness"/>
                    <div css={WitnessTextStyle}>
                        {t('witnesses.secondWitness')}
                    </div>
                </div>
            </div>
        </section>
    )
}
