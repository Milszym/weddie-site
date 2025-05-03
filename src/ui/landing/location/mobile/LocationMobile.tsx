import { useState } from "react"
import { PeachButton } from "../../../common/PeachButton"
import { navigateToMap, navigateToZielonaBrama } from "../Location"
import { ParkingDialog } from "../ParkingDialog"
import "./locationMobile.css"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"

interface LocationMobileProps {
    description: JSX.Element
}

export const LocationMobile = ({ description }: LocationMobileProps) => {

    const { t } = useTranslation()

    const [parkingModalVisible, setParkingModalVisible] = useState(false)

    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return <section
        id="location"
        className="h-screen w-full locationMobileContent">
        <div className="locationMobileTitle">{t('location.title')}</div>
        <div className="locationMobileDescription">{description}</div>
        <div className="locationMobileMapButton">
            <PeachButton text={t('location.seeOnMap')} onClick={navigateToMap} />
        </div>
        <PeachButton className="locationMobileParkingButton" text="Parking" onClick={() => setParkingModalVisible(true)} />
        <div className="locationMobileImagesWrapper" ref={ref}>
            <img className={`locationMobileMainImage locationSlideInFromLeft${isVisible ? ` locationSlidedIn` : ''}`} src="/images/zdjecie_sali_full_alt.jpg" onClick={navigateToZielonaBrama} />
            <img className={`locationMobileSmallImage locationSlideInFromRight${isVisible ? ` locationSlidedIn` : ``}`} src="/images/zielona_brama_stajnia.jpg" onClick={navigateToZielonaBrama} />
        </div>
        <ParkingDialog setParkingModalVisible={setParkingModalVisible} parkingModalVisible={parkingModalVisible} />
    </section>
}