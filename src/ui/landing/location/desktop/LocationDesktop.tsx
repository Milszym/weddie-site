import { useState } from "react";
import { PeachButton } from "../../../common/PeachButton"
import { navigateToMap, navigateToZielonaBrama } from "../Location"
import "./locationDesktop.css"
import { useInView } from "react-intersection-observer";
import { ParkingDialog } from "../ParkingDialog";
import { useTranslation } from "react-i18next";

interface LocationDesktopProps {
    description: JSX.Element
}

export const LocationDesktop = ({ description }: LocationDesktopProps) => {

    const { t } = useTranslation()

    const [isVisible, setIsVisible] = useState(false);
    const [parkingModalVisible, setParkingModalVisible] = useState(false);

    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return <section
        id="location"
        className="h-screen w-full flex flex-col items-center justify-center locationContent">
        <div className="locationImages">
            <img ref={ref}
                className={`locationMainImage slideIn1 ${isVisible ? ' slidedIn' : ''}`} src="/images/zdjecie_sali_square.jpg" onClick={navigateToZielonaBrama} />
            <img className={`locationMapImage slideIn2 ${isVisible ? ' slidedIn' : ''}`} src="/images/mapa.png" onClick={navigateToMap} />
            <div className={`locationMapButton slideIn3 ${isVisible ? ' slidedIn' : ''}`}>
                <PeachButton text={t('location.seeOnMap')} onClick={navigateToMap} />
            </div>
        </div>
        <div className="locationText">
            <div className="locationTitle">{t('location.title')}</div><br />
            <div className="locationSubtitle">{t('location.subtitle')}</div>
            <div className="locationDescription">{description}</div>
            <PeachButton className="locationParkingButton" text={t('location.parking')} onClick={() => setParkingModalVisible(true)} />
        </div>

        <ParkingDialog setParkingModalVisible={setParkingModalVisible} parkingModalVisible={parkingModalVisible} />
    </section>
}