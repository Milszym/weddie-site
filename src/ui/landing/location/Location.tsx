/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
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
    height: 400px;
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

// Default center coordinates for the map
const DEFAULT_CENTER = {
  lat: 52.2297,
  lng: 21.0122
};

export const Location = () => {
    const { t } = useTranslation()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    
    // Access environment variables (they should already exist in your .env file)
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''
    const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID || ''
    
    // Libraries array defined simply to avoid type errors
    const libraries: any[] = ['places']
    
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        mapIds: [mapId],
        libraries
    })
    
    useEffect(() => {
        // Debug logging
        console.log('Google Maps Environment Variables:')
        console.log('- API Key exists:', !!apiKey, apiKey ? `(length: ${apiKey.length})` : '')
        console.log('- Map ID exists:', !!mapId, mapId || '(none)')
        
        if (loadError) {
            console.error('Error loading Google Maps:', loadError)
            setErrorMessage(`Failed to load Google Maps: ${loadError.message}`)
        }
    }, [apiKey, mapId, loadError])
    
    // Create location details
    const locationDetails = {
        lat: DEFAULT_CENTER.lat,
        lng: DEFAULT_CENTER.lng,
        venueName: t('location.venueName', 'Wedding Venue'),
        address: t('location.address', 'Venue Address'),
        description: t('location.description', 'This is where our wedding will take place.'),
        mapLink: t('location.mapLink', 'https://maps.google.com')
    }
    
    const onMapLoad = (map: google.maps.Map) => {
        // Create a simple marker when the map loads
        new window.google.maps.Marker({
            position: {
                lat: locationDetails.lat,
                lng: locationDetails.lng
            },
            map,
            title: locationDetails.venueName
        })
    }
    
    // Options for the map component
    const mapOptions = {
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        mapId
    }
    
    // Container style for the map
    const containerStyle = {
        width: '100%',
        height: '100%'
    }

    return (
        <Fullscreen additionalCss={BoxStyle}>
            <MyHeader text={t('location.title', 'Location')} additionalCss={HeaderStyle} />
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
                        {t('location.openInMaps', 'Open in Google Maps')}
                    </a>
                </div>
                <div css={MapContainerStyle}>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={DEFAULT_CENTER}
                            zoom={15}
                            onLoad={onMapLoad}
                            options={mapOptions}
                        >
                            {/* Map content */}
                        </GoogleMap>
                    ) : (
                        <div css={MapUnavailableStyle}>
                            {errorMessage || loadError ? 
                                `${errorMessage || (loadError ? loadError.message : '')}` : 
                                t('location.loading', 'Loading map...')}
                        </div>
                    )}
                </div>
            </div>
        </Fullscreen>
    )
} 