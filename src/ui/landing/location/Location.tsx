/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { getHexWithOpacity } from "../../theme/getHexWithOpacity"

const BoxStyle = withMyTheme((theme: Theme) => css`
    background: ${getHexWithOpacity(theme.palette.primary.main, 0.05)};
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`)

const SubHeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.dark};
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: ${theme.typography.h1.fontFamily};
    font-weight: 500;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`)

const ContentStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 3rem;
    padding: 0 1rem;
    box-sizing: border-box;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 2rem;
        padding: 0 1rem;
    }
`)

const TextContentStyle = withMyTheme((theme: Theme) => css`
    flex: 1;
    text-align: left;
`)

const MapContainerStyle = withMyTheme((theme: Theme) => css`
    flex: 1;
    min-height: 400px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`)

const DescriptionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 1rem 0 1.5rem 0;
    font-family: ${theme.typography.body1.fontFamily};
`)

const HrefStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    font-weight: bold;
    font-family: ${theme.typography.body1.fontFamily};
    display: inline-block;
    &:hover {
        text-decoration: underline;
    }
`)

const AddressStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.dark};
    font-size: 1.1rem;
    margin: 0.5rem 0 1.5rem 0;
    font-family: ${theme.typography.body1.fontFamily};
`)

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 52.2297, // Warsaw coordinates as an example
    lng: 21.0122
};

const MapUnavailableStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 400px;
    background: ${theme.palette.grey[200]};
    color: ${theme.palette.text.secondary};
    text-align: center;
    padding: 1rem;
    font-family: ${theme.typography.body1.fontFamily};
    border-radius: 8px;
`)

export const Location = () => {
    const { t } = useTranslation()
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const locationDetails = {
        lat: 52.2297,
        lng: 21.0122,
        venueName: t('location.venueName'),
        address: t('location.address'),
        description: t('location.description'),
        mapLink: t('location.mapLink')
    };

    if (!googleMapsApiKey) {
        console.error('Google Maps API key is not set. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file.');
        return (
            <Fullscreen>
                <MyHeader text={t('location.title')} additionalCss={HeaderStyle} />
                <div css={ContentStyle}>
                    <div css={TextContentStyle}>
                        <h2 css={SubHeaderStyle}>{locationDetails.venueName}</h2>
                        <div css={AddressStyle}>{locationDetails.address}</div>
                        <div css={DescriptionStyle}>{locationDetails.description}</div>
                        <a
                            href={locationDetails.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            css={HrefStyle}
                        >
                            {t('location.openInMaps')}
                        </a>
                    </div>
                    <div css={MapContainerStyle}>
                        <div css={MapUnavailableStyle}>
                            {t('location.mapUnavailable', 'Map is currently unavailable. Please check back later.')}
                        </div>
                    </div>
                </div>
            </Fullscreen>
        );
    }

    return (
        <Fullscreen additionalCss={BoxStyle}>
            <MyHeader text={t('location.title')} additionalCss={HeaderStyle} />
            <div css={ContentStyle}>
                <div css={TextContentStyle}>
                    <h2 css={SubHeaderStyle}>{locationDetails.venueName}</h2>
                    <div css={AddressStyle}>{locationDetails.address}</div>
                    <div css={DescriptionStyle}>{locationDetails.description}</div>
                    <a
                        href={locationDetails.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        css={HrefStyle}
                    >
                        {t('location.openInMaps')}
                    </a>
                </div>
                <div css={MapContainerStyle}>
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={{ lat: locationDetails.lat, lng: locationDetails.lng }}
                            zoom={15}
                        >
                            <Marker position={{ lat: locationDetails.lat, lng: locationDetails.lng }} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </Fullscreen>
    )
} 