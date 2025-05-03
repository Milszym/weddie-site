import { useTranslation } from "react-i18next"
import { openUrl } from "../../../App"
import { PeachButton } from "../../common/PeachButton"
import "./memories.css"

const GALLERY_URL = 'https://drive.google.com/drive/folders/1-nlWIF4GRFl7ZAxh2sfVhma0JME5PKqM?usp=sharing'

export const Memories = () => {

    const { t } = useTranslation()

    const navigateToGallery = () => {
        openUrl(GALLERY_URL, false)
    }

    return <section
        id="memories"
        className="memoriesContent">
        <div className="memoriesContent">
            <div className="memoriesText">
                <div className="memoriesTitle">{t('memories.title')}</div><br />
                <div className="memoriesDescription">{t('memories.description')}</div><br />
                <PeachButton text={t('memories.gallery')} onClick={navigateToGallery} />
            </div>
            <div className="memoriesImageContainer">
                <img className="memoriesImage" src="/images/memories_photo.jpeg" />
            </div>
        </div>
    </section>
}