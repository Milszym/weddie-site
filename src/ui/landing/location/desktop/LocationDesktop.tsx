/** @jsxImportSource @emotion/react */
import {JSX, useState} from "react";
import {navigateToMap, navigateToZielonaBrama} from "../Location"
import {useInView} from "react-intersection-observer";
import {ParkingDialog} from "../ParkingDialog";
import {useTranslation} from "react-i18next";
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../../theme/theme"
import {MyButton} from "../../../components/button/MyButton"
import MapIcon from '@mui/icons-material/Map'
import LocalParkingIcon from '@mui/icons-material/LocalParking'

interface LocationDesktopProps {
    description: JSX.Element
}

const LocationContentStyle = withMyTheme((theme: Theme) => css`
    background-image: url('/images/peach_background_50.jpg');
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`)

const SlideInFromLeftStyle = (delay: string) => withMyTheme(() => css`
    transform: translateX(-100%);
    transition: all ${delay} ease-out;

    &.slidedIn {
        transform: translateX(-10%);
        opacity: 1;
    }
`)

const LocationImagesStyle = withMyTheme(() => css`
    flex: 1;
    position: relative;
    display: inline-block;
`)

const LocationMainImageStyle = withMyTheme(() => css`
    margin-bottom: 5em;
    height: 70vh;
    width: 70vh;
    cursor: pointer;
    max-height: 50vw;
    border: 4px solid #daaa98;
    max-width: 50vw;
    left: 0;
    border-radius: 50%;
    aspect-ratio: 1;
`)

const LocationMapImageStyle = withMyTheme(() => css`
    position: absolute;
    bottom: 2em;
    right: 5em;
    cursor: pointer;
    height: 40vh;
`)

const LocationMapButtonStyle = withMyTheme(() => css`
    position: absolute;
    bottom: 3.5em;
    left: 7vw;
`)

const LocationTextStyle = withMyTheme((theme) => css`
    flex: 1;
    padding-right: 7vw;
    display: flex;
    text-align: center;
    font-family: ${theme.typography.body1.fontFamily};
    flex-direction: column;
    justify-items: center;
    align-items: center;
`)

const LocationTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(2rem, 5vw, 5rem);
    color: ${theme.palette.primary.main};
    text-align: center;
    font-family: ${theme.typography.h1.fontFamily};
    line-height: 1.2;
`)

const LocationSubtitleStyle = withMyTheme((theme) => css`
    margin-top: -.2em;
    text-align: center;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
    font-size: clamp(1rem, 3.5vw, 4rem);
`)

const LocationDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1rem, 1.5vw, 2.5rem);
    color: black;
    margin-top: 1em;
    text-align: center;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;
`)

const ParkingButtonWrapperStyle = withMyTheme(() => css`
    margin-top: 3vh;
`)

const LocationParkingButton = withMyTheme(() => css`
    font-size: 1.4rem;
    font-weight: 600;
`)

export const LocationDesktop = ({description}: LocationDesktopProps) => {
    const {t} = useTranslation()

    const [isVisible, setIsVisible] = useState(false);
    const [parkingModalVisible, setParkingModalVisible] = useState(false);

    const {ref} = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return (
        <section id="location" css={LocationContentStyle}>
            <div css={LocationImagesStyle}>
                <img
                    ref={ref}
                    css={[LocationMainImageStyle, SlideInFromLeftStyle('0.7s')]}
                    className={isVisible ? 'slidedIn' : ''}
                    src="/images/zdjecie_sali_square.jpg"
                    onClick={navigateToZielonaBrama}
                    alt="Venue"
                />
                <img
                    css={[LocationMapImageStyle, SlideInFromLeftStyle('0.8s')]}
                    className={isVisible ? 'slidedIn' : ''}
                    src="/images/mapa.png"
                    onClick={navigateToMap}
                    alt="Map"
                />
                <div
                    css={[LocationMapButtonStyle, SlideInFromLeftStyle('1s')]}
                    className={isVisible ? 'slidedIn' : ''}
                >
                    <MyButton
                        variant="contained"
                        css={LocationParkingButton}
                        colorVariant="primary"
                        startIcon={<MapIcon/>}
                        text={t('location.seeOnMap')}
                        onClick={navigateToMap}
                    />
                </div>
            </div>
            <div css={LocationTextStyle}>
                <div css={LocationTitleStyle}>{t('location.title')}</div>
                <br/>
                <div css={LocationSubtitleStyle}>{t('location.subtitle')}</div>
                <div css={LocationDescriptionStyle}>{description}</div>
                <div css={ParkingButtonWrapperStyle}>
                    <MyButton
                        additionalCss={LocationParkingButton}
                        variant="contained"
                        colorVariant="primary"
                        startIcon={<LocalParkingIcon/>}
                        text={t('location.parkingButton')}
                        onClick={() => setParkingModalVisible(true)}
                    />
                </div>
            </div>

            <ParkingDialog setParkingModalVisible={setParkingModalVisible} parkingModalVisible={parkingModalVisible}/>
        </section>
    )
}
