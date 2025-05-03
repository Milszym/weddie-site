import "./title.css"
import { Countdown } from "./Countdown"
import { isMobile } from "../../../util/isMobile"
import { PeachButton } from "../../common/PeachButton"
import { MainConfig } from "../../../config/MainConfig"
import { useTranslation } from "react-i18next"
import { openUrl } from "../../../App"

export const Title2 = () => {

    const { t } = useTranslation()

    const addEventToGoogleCalendar = () => {
        const event = {
            title: t('title.calendarEventName'),
            description: t('title.calendarEventDescription'),
            location: MainConfig.title.calendarEventLocation,
            startTime: MainConfig.title.exactStartDate,
            endTime: MainConfig.title.exactEndDate,
        };

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/-|:|\./g, '')}/${event.endTime.replace(/-|:|\./g, '')}`;

        openUrl(googleCalendarUrl, false)
    };

    const imagePath = isMobile() ? '/images/zdjecie_z_wesela_cropped.jpg' : '/images/title_a_cropped.jpg'

    return <section id="title" className="w-full h-screen titleSection">
        <img className="titleBg" src={imagePath} />
        <div className="titleOverlay" />
        <div className="titleContent">
            <div className="title">
                {t('title.names')}
            </div>
            <div className="titleDateHour" onClick={addEventToGoogleCalendar}>
                <span className="titleDate">
                    {t('title.date')}
                </span>
                <br/>
                <span className="titleHour">
                    {MainConfig.title.hour}
                </span>
            </div>
            <div className="titleCalendarButtonWrapper">
                <PeachButton className="titleCalendarButton"
                    outline={true}
                    text={t('title.addEventToCalendar')}
                    onClick={addEventToGoogleCalendar} />
            </div>
            <div className="titleCountdown">
                <Countdown targetDate={MainConfig.marriageDate} addEventToGoogleCalendar={addEventToGoogleCalendar} />
            </div>
        </div>
    </section>
}