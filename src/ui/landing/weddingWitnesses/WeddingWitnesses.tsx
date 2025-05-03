import { useState } from "react"
import { PeachButton } from "../../common/PeachButton"
import "./weddingWitnesses.css"
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export const WeddingWitnesses = () => {

    const {t} = useTranslation()

    const [isVisible, setIsVisible] = useState(false);

    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return <section
        id="weddingWitnesses"
        className="h-screen w-full flex flex-col items-center justify-center weddingWitnesses">
        <div className="weddingWitnessesTitle">{t('witnesses.title')}</div>
        <div className="weddingWitnessesDescription">{t('witnesses.description')}</div>
        <div className="weddingWitnessesContent">
            <div className={`firstWitness witnessSlideInFromLeft${isVisible ? ' witnessSlidedIn' : ''}`} ref={ref}>
                <img className="witnessImage" src="/images/monika.jpeg" />
                <div className="witnessText">
                {t('witnesses.firstWitness')}
                </div>
            </div>
            <div className={`secondWitness witnessSlideInFromRight${isVisible ? ' witnessSlidedIn' : ''}`} >
                <img className="witnessImage" src="/images/kuba_hq.jpg" />
                <div className="witnessText">
                    {t('witnesses.secondWitness')}
                </div>
            </div>
        </div>
    </section>
}