/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"

const FooterStyle = withMyTheme((theme: Theme) => css`
    background: ${theme.palette.text.primary};
    color: ${theme.palette.text.secondary};
    padding: 2rem;
    text-align: center;
    width: 100%;
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`)

const CreditsStyle = withMyTheme((theme: Theme) => css`
    font-size: 0.9rem;
    opacity: 0.8;
`)

const ContactInfoStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`)

const ContactItemStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`)

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer css={FooterStyle}>
            <div css={ContainerStyle}>
                <div css={ContactInfoStyle}>
                    <div css={ContactItemStyle}>
                        <span>{t('footer.email')}:</span>
                        <a href={`mailto:${t('footer.emailAddress')}`} css={css`
                            color: inherit;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        `}>
                            {t('footer.emailAddress')}
                        </a>
                    </div>
                    <div css={ContactItemStyle}>
                        <span>{t('footer.phone')}:</span>
                        <a href={`tel:${t('footer.phoneNumber')}`} css={css`
                            color: inherit;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        `}>
                            {t('footer.phoneNumber')}
                        </a>
                    </div>
                </div>
                <div css={CreditsStyle}>
                    {t('footer.credits')}
                </div>
            </div>
        </footer>
    )
} 