/** @jsxImportSource @emotion/react */
import {navigateToMap} from "./Location"
import {css, Dialog, DialogContent, DialogTitle, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"
import {mobileCss} from "../../theme/isMobile"
import {MyButton} from "../../components/button/MyButton"
import {useTranslation} from "react-i18next"

interface ParkingDialogProps {
    parkingModalVisible: boolean
    setParkingModalVisible: (visible: boolean) => void
}

const ParkingContentStyle = withMyTheme((theme) => css`
    width: 100%;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
`)

const ParkingDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.5rem;
    color: black;
    text-align: center;
    margin-top: 1em;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;

    ${mobileCss(`
        font-size: 5vw;
    `)}
`)

const ParkingSubdescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: 1em;
    color: black;
    margin-top: 1em;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;

    ${mobileCss(`
        font-size: 3vw;
    `)}
`)

const ParkingImageStyle = withMyTheme(() => css`
    object-fit: cover;
    border-radius: 8px;
    margin-top: 3vh;
    cursor: pointer;
    max-width: 80%;
`)

const ButtonWrapperStyle = withMyTheme(() => css`
    margin-top: 3vh;
`)

export const ParkingDialog = ({parkingModalVisible, setParkingModalVisible}: ParkingDialogProps) => {
    const {t} = useTranslation();

    return (
        <Dialog onClose={() => setParkingModalVisible(false)} open={parkingModalVisible}>
            <DialogTitle>
                <div css={ParkingDescriptionStyle}>
                    {t('location.parking.description')} <span style={{fontWeight: 700}}>{t('location.parking.free')}</span> {t('location.parking.descriptionContinued')}
                </div>
            </DialogTitle>
            <DialogContent>
                <div css={ParkingContentStyle}>
                    <div css={ParkingSubdescriptionStyle}>
                        {t('location.parking.clickToOpenMap')}
                    </div>
                    <img css={ParkingImageStyle} onClick={navigateToMap} src="/images/marked_parking.png"
                         alt={t('location.parking.mapAlt')}/>
                    <div css={ButtonWrapperStyle}>
                        <MyButton
                            variant="contained"
                            colorVariant="primary"
                            text={t('location.close')}
                            onClick={() => setParkingModalVisible(false)}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
