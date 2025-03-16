import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyButton } from "../../components/button/MyButton"
import { MyHeader } from "../../components/text/MyHeader"

export const Title = () => {
    const { t } = useTranslation()

    return <Fullscreen>
        <MyHeader text={t('title.title')} />
        <MyButton text={t('title.button')} />
    </Fullscreen>
}