import { useTranslation } from "react-i18next"
import { openUrl } from "../../../App"
import { isMobile } from "../../../util/isMobile"
import { LocationDesktop } from "./desktop/LocationDesktop"
import { LocationMobile } from "./mobile/LocationMobile"
import { MainConfig } from "../../../config/MainConfig"

export const Location = () => {

    const { t } = useTranslation()
    const description = <>
        {t('location.description1')} <br /><br /> {t('location.description2')}
    </>

    return isMobile() ? <LocationMobile description={description} /> : <LocationDesktop description={description} />
}

export const navigateToMap = () => {
    openUrl(MainConfig.location.mapUrl)
}

export const navigateToZielonaBrama = () => {
    openUrl(MainConfig.location.url)
}