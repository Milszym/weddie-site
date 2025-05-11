/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { LocationDesktop } from "./desktop/LocationDesktop"
import { LocationMobile } from "./mobile/LocationMobile"
import { MainConfig } from "../../../config/MainConfig"
import { useEffect, useState } from "react"
import { openUrl } from "../../util/openUrl"

export const Location = () => {
    const { t } = useTranslation()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const description = <>
        {t('location.description1')} <br /><br /> {t('location.description2')}
    </>

    return isMobile ? <LocationMobile description={description} /> : <LocationDesktop description={description} />
}

export const navigateToMap = () => {
    openUrl(MainConfig.location.mapUrl)
}

export const navigateToZielonaBrama = () => {
    openUrl(MainConfig.location.url)
}
