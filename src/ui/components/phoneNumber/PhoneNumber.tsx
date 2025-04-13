/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next";
import { MyText } from "../text/MyText";
import { mobileCss } from "../../util/isMobile";
import { withMyTheme } from "../../theme/theme";
import { css } from "@emotion/react";

const PhoneNumberStyle = withMyTheme((theme) => css`
    font-size: 2rem;
    color: ${theme.palette.primary.main};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    :hover {
        transform: scale(1.1);
        z-index: 1;
    }
    ${mobileCss(`
        font-size: 2.5rem;
    `)}
`)

interface Props {
    phoneNumber: string
}

export const PhoneNumber = ({ phoneNumber }: Props) => {
    const { t } = useTranslation()

    const callNumber = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return <div onClick={callNumber} css={PhoneNumberStyle}>
        <MyText text={t('contact.phoneNumber')} additionalCss={PhoneNumberStyle}/>
    </div>
}