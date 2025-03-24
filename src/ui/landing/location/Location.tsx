/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
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

const ContentStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
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
    margin: 1rem 0;
`)

const HrefStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`)

const AddressStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.secondary.main};
    font-size: 1.1rem;
    margin: 1rem 0;
`)

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 52.2297, // Warsaw coordinates as an example
    lng: 21.0122
};

export const Location = () => {
    const { t } = useTranslation()
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) {
        console.error('Google Maps API key is not set. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file.');
        return (
            <Fullscreen>
                <div css={BoxStyle}>
                    <MyHeader text={t('location.title')} additionalCss={HeaderStyle}/>
                    <div css={ContentStyle}>
                        <div css={TextContentStyle}>
                            <h2 css={HeaderStyle}>{t('location.venueName')}</h2>
                            <div css={AddressStyle}>{t('location.address')}</div>
                            <div css={DescriptionStyle}>{t('location.description')}</div>
                            <a 
                                href={t('location.mapLink')} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                css={HrefStyle}
                            >
                                {t('location.openInMaps')}
                            </a>
                        </div>
                        <div css={MapContainerStyle}>
                            <div css={css`
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                height: 100%;
                                background: #f5f5f5;
                                color: #666;
                                text-align: center;
                                padding: 1rem;
                            `}>
                                Map is currently unavailable. Please check back later.
                            </div>
                        </div>
                    </div>
                </div>
            </Fullscreen>
        );
    }

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('location.title')} additionalCss={HeaderStyle}/>
                <div css={ContentStyle}>
                    <div css={TextContentStyle}>
                        <h2 css={HeaderStyle}>{t('location.venueName')}</h2>
                        <div css={AddressStyle}>{t('location.address')}</div>
                        <div css={DescriptionStyle}>{t('location.description')}</div>
                        <a 
                            href={t('location.mapLink')} 
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
                                center={center}
                                zoom={15}
                            >
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </Fullscreen>
    )
} 