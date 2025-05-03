import { useState } from "react";
import { PeachButton } from "../../common/PeachButton"
import "./rsvp.css"
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { showToast, ToastPosition, ToastType } from "../../common/toast/toast";
import { MainConfig } from "../../../config/MainConfig";

export const Rsvp = () => {

    const { t } = useTranslation()

    const [who, setWho] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [sendEnabled, setSendEnabled] = useState(true)

    const sendEmail = async () => {
        if (!validate()) {
            return
        }
        setSendEnabled(false)
        const serviceID = 'service_d4bc9kv';
        const templateID = 'template_ri7qxkn';
        const templateParams = {
            the_from: who,
            the_email: email,
            the_message: message,
        };

        try {
            const response = await emailjs.send(serviceID, templateID, templateParams);
            console.log('Email successfully sent', response.status, response.text);
            showToast('Pomyślnie wysłano wiadomość. Dziękujemy i do zobaczenia!', ToastType.SUCCESS);
            setEmailSent(true)
        } catch (error) {
            showToast('Niestety nie udało się wysłać wiadomości. Spróbuj później lub zadzwoń do nas osobiście :)', ToastType.ERROR);
            console.error('Could not send email', error);
        } finally {
            setSendEnabled(true)
        }
    }

    const validate = () => {
        if (who === '' || message === '' || email === '') {
            showToast(t('rsvp.formNotFilledError'), ToastType.ERROR, ToastPosition.BOTTOM_CENTER);
            return false
        }
        return true
    }

    const onWhoChanged = (newWho: string) => {
        setWho(newWho)
    }

    const onMessageChanged = (newMessage: string) => {
        setMessage(newMessage)
    }

    const onEmailChanged = (newEmail: string) => {
        setEmail(newEmail)
    }

    return <section
        id="rsvp"
        className="h-screen w-full rsvpContent">
        <div className="rsvpTitle">{t('rsvp.title')}</div><br />
        <div className="rsvpDescription">
            {t('rsvp.description1')}
            <br /><br />
            {t('rsvp.description2')}
        </div><br />
        {!emailSent ? <>
            <div className="rsvpInputs">
                <input type="text" placeholder={t('rsvp.who')} onChange={(event) => onWhoChanged(event.target.value)}
                    className="rsvpInputText input input-bordered" />
                <br />
                <textarea className="rsvpInputText textarea textarea-bordered rsvpInputMessage" placeholder={t('rsvp.message')}
                    onChange={(event) => onMessageChanged(event.target.value)} />
                <br />
                <input type="email" placeholder={t('rsvp.email')} autoComplete="email"
                    onChange={(event) => onEmailChanged(event.target.value)}
                    className="rsvpInputText input input-bordered" />
            </div>
            <div className="rsvpButton">
                <PeachButton text={t('rsvp.send')} enabled={sendEnabled} onClick={sendEmail} />
            </div>
        </> : <div className="rsvpThankYouTitle">
            {t('rsvp.thankYou')}!
        </div>}
        <br />
        <div className="rsvpOurContacts">
            <div className="rsvpOurContact">
                {t('rsvp.firstName')} <PhoneNumber phoneNumber={MainConfig.rsvp.firstPhoneNumber} />
            </div>
            <div className="rsvpOurContact">
                {t('rsvp.secondName')} <PhoneNumber phoneNumber={MainConfig.rsvp.secondPhoneNumber} />
            </div>
        </div>
    </section >
}

const PhoneNumber = (props: { phoneNumber: string }) => {
    const callNumber = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return <span className="rsvpPhone" onClick={() => callNumber(props.phoneNumber)}>
        {props.phoneNumber}
    </span>
}