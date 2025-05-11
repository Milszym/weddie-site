/** @jsxImportSource @emotion/react */
import {JSX, useState} from "react"
import {navigateToMap, navigateToZielonaBrama} from "../Location"
import {ParkingDialog} from "../ParkingDialog"
import {useInView} from "react-intersection-observer"
import {useTranslation} from "react-i18next"
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../../theme/theme"
import {MyButton} from "../../../components/button/MyButton"
import MapIcon from '@mui/icons-material/Map'
import LocalParkingIcon from '@mui/icons-material/LocalParking'

interface LocationMobileProps {
    description: JSX.Element
}

const LocationMobileContentStyle = withMyTheme((theme: Theme) => css`
    background-color: ${theme.palette.secondary.light};
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`)

const LocationMobileTitleStyle = withMyTheme((theme) => css`
    font-size: 9vw;
    text-align: center;
    font-weight: 500;
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};
`)

const LocationMobileSubtitleStyle = withMyTheme((theme) => css`
    font-size: 7.5vw;
    font-weight: 500;
    text-align: center;
    margin-top: 1vh;
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};
`)

const LocationMobileDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1.3rem, 3vw, 2.2rem);
    color: black;
    text-align: center;
    margin: 2vh 8vw;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;
`)

const LocationMobileMapButtonStyle = withMyTheme(() => css`
    margin-top: .5vh;
    font-size: 2.5vw;
`)

const LocationMobileParkingButtonStyle = withMyTheme(() => css`
    margin-top: 2vh;
    margin-bottom: 2vh;
`)

const LocationMobileImagesWrapperStyle = withMyTheme(() => css`
    position: relative;
`)

const SlideInFromLeftStyle = withMyTheme(() => css`
    transform: translateX(-100%);
    transition: all 0.5s ease-out;

    &.slidedIn {
        transform: translateX(0);
        opacity: 1;
    }
`)

const SlideInFromRightStyle = withMyTheme(() => css`
    transform: translateX(100%);
    transition: all 0.5s ease-out;

    &.slidedIn {
        transform: translateX(0);
        opacity: 1;
    }
`)

const LocationMobileMainImageStyle = withMyTheme(() => css`
    aspect-ratio: 1;
    width: 85vw;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
    max-height: 40vh;
    max-width: 40vh;
    border: 2px solid #daaa98;
`)

const LocationMobileSmallImageStyle = withMyTheme(() => css`
    aspect-ratio: 1;
    width: 30vw;
    object-fit: cover;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    max-height: 30vw;
    max-width: 30vw;
    border-radius: 50%;
    border: 2px solid #daaa98;
`)

export const LocationMobile = ({ description }: LocationMobileProps) => {
    const { t } = useTranslation()

    const [parkingModalVisible, setParkingModalVisible] = useState(false)

    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return (
        <section id="location" css={LocationMobileContentStyle}>
            <div css={LocationMobileTitleStyle}>{t('location.title')}</div>
            <div css={LocationMobileSubtitleStyle}>{t('location.subtitle')}</div>
            <div css={LocationMobileDescriptionStyle}>{description}</div>
            <div css={LocationMobileMapButtonStyle}>
                <MyButton 
                    variant="contained"
                    colorVariant="primary"
                    startIcon={<MapIcon />}
                    text={t('location.seeOnMap')}
                    onClick={navigateToMap}
                />
            </div>
            <div css={LocationMobileParkingButtonStyle}>
                <MyButton 
                    variant="contained"
                    colorVariant="primary"
                    startIcon={<LocalParkingIcon />}
                    text={t('location.parkingButton')}
                    onClick={() => setParkingModalVisible(true)}
                />
            </div>
            <div css={LocationMobileImagesWrapperStyle} ref={ref}>
                <img 
                    css={[LocationMobileMainImageStyle, SlideInFromLeftStyle]}
                    className={isVisible ? 'slidedIn' : ''}
                    src="/images/zdjecie_sali_full_alt.jpg" 
                    onClick={navigateToZielonaBrama}
                    alt="Venue" 
                />
                <img 
                    css={[LocationMobileSmallImageStyle, SlideInFromRightStyle]}
                    className={isVisible ? 'slidedIn' : ''}
                    src="/images/zielona_brama_stajnia.jpg" 
                    onClick={navigateToZielonaBrama}
                    alt="Venue detail" 
                />
            </div>
            <ParkingDialog setParkingModalVisible={setParkingModalVisible} parkingModalVisible={parkingModalVisible} />
        </section>
    )
}
