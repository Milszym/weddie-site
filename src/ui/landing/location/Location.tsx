/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api'
import { getHexWithOpacity } from "../../theme/getHexWithOpacity"
import { useEffect, useState } from "react"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    min-height: 100%;
    width: 100%;
    background: ${getHexWithOpacity(theme.palette.primary.main, 0.05)};
    font-family: ${theme.typography.body1.fontFamily};
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

// The libraries we need to load
const libraries = ['marker'];

export const Location = () => {
    const { t } = useTranslation()
    const [map, setMap] = useState(null);
    // Access environment variable
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey,
        // Specify marker library to access AdvancedMarkerElement
        libraries: libraries as any
    });

    useEffect(() => {
        // Debug: Log API key info and loading status
        if (!googleMapsApiKey) {
            console.error('Google Maps API key is not set. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file.');
        } else {
            console.log('Google Maps API key is configured with length:', googleMapsApiKey.length);
            console.log('First few characters:', googleMapsApiKey.substring(0, 3) + '...');
        }

        if (loadError) {
            console.error('Google Maps loading error:', loadError);
        }

        // Debug Google Maps API loading status
        console.log('Google Maps API loading status:', { 
            isLoaded,
            hasLoadError: !!loadError,
            hasWindow: typeof window !== 'undefined',
            hasGoogleObject: typeof window !== 'undefined' && !!window.google,
            hasGoogleMaps: typeof window !== 'undefined' && !!window.google?.maps,
            hasMarkerLibrary: typeof window !== 'undefined' && !!window.google?.maps?.marker
        });
    }, [googleMapsApiKey, loadError, isLoaded]);

    // Function to add an AdvancedMarker once the map is loaded
    const onMapLoad = (map: any) => {
        setMap(map);

        if (window.google && window.google.maps && window.google.maps.marker) {
            // Create advanced marker
            const { AdvancedMarkerElement } = window.google.maps.marker;
            
            // Create the marker position
            const position = { 
                lat: locationDetails.lat, 
                lng: locationDetails.lng 
            };
            
            // Create a new advanced marker
            new AdvancedMarkerElement({
                map,
                position,
                title: locationDetails.venueName,
            });
        }
    };

    const locationDetails = {
        lat: 52.2297,
        lng: 21.0122,
        venueName: t('location.venueName'),
        address: t('location.address'),
        description: t('location.description'),
        mapLink: t('location.mapLink')
    };

    // Determine if we can show the map
    const showMap = isLoaded && !loadError;

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
                    {showMap ? (
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={{ lat: locationDetails.lat, lng: locationDetails.lng }}
                            zoom={15}
                            onLoad={onMapLoad}
                            options={{
                                disableDefaultUI: false,
                                zoomControl: true,
                                fullscreenControl: true,
                                streetViewControl: true,
                            }}
                        />
                    ) : (
                        <div css={MapUnavailableStyle}>
                            {loadError 
                                ? `Error loading Google Maps: ${loadError.message}` 
                                : t('location.mapUnavailable', 'Map is currently unavailable. Please check back later.')}
                        </div>
                    )}
                </div>
            </div>
        </Fullscreen>
    )
} 