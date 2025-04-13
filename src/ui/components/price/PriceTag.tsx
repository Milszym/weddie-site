/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { withMyTheme } from "../../theme/theme";
import { Theme } from "@mui/material";
import { mobileCss } from "../../util/isMobile";
import { useTranslation } from "react-i18next";

const PriceContainerStyle = withMyTheme((theme: Theme) => css`
    background-color: white;
    border-radius: 16px;
    padding: 1rem 2rem;
    margin: 0;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;

    ${mobileCss(`
        padding: 1rem 2rem;
        min-width: 150px;
    `)}
`);

const PriceTextStyle = withMyTheme((theme: Theme) => css`
    font-family: ${theme.typography.body1.fontFamily};
    font-size: 1.8rem;
    font-weight: 400;
    color: black;
    text-align: center;
    
    ${mobileCss(`
        font-size: 1.8rem;
    `)}
`);

interface PriceTagProps {
    price: string;
    currency?: string;
}

export const PriceTag = ({ price, currency = "PLN" }: PriceTagProps) => {
    const { t } = useTranslation();
    
    return (
        <div css={PriceContainerStyle}>
            <div css={PriceTextStyle}>
                {t('common.price')}: {price} {currency}
            </div>
        </div>
    );
}; 