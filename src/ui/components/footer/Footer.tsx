/** @jsxImportSource @emotion/react */
import { useTranslation, Trans } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"

const FooterStyle = withMyTheme((theme: Theme) => css`
    background: rgba(196, 85, 38, 0.05);
    color: ${theme.palette.text.primary};
    padding: 2rem;
    text-align: center;
    font-family: ${theme.typography.body1.fontFamily};
    position: relative;
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`)

const CreditsStyle = withMyTheme((theme: Theme) => css`
    font-size: 0.9rem;
    opacity: 0.8;
    font-family: ${theme.typography.body1.fontFamily};
    text-align: center;
`)

const LinkStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    text-decoration: underline;
    font-weight: bold;
    &:hover {
        color: ${theme.palette.primary.dark};
    }
`)

const SubtleLinkStyle = withMyTheme((theme: Theme) => css`
    color: inherit;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`)

const FreepikCreditsStyle = withMyTheme((theme: Theme) => css`
    position: absolute;
    bottom: 1rem;
    font-size: 0.8rem;
    right: 1rem;
    opacity: 0.7;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.body1.fontFamily};
`)

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer css={FooterStyle}>
            <div css={ContainerStyle}>
                <div css={CreditsStyle}>
                    <Trans i18nKey="footer.credits">
                        © 2025 Wedding Website
                        <a href="https://weddie.site" target="_blank" rel="noopener noreferrer" css={LinkStyle}>
                            Weddie.Site
                        </a>
                        . All rights reserved.
                    </Trans>
                </div>
            </div>
            <div css={FreepikCreditsStyle}>
                <Trans i18nKey="footer.freepikCredits">
                    Icons and illustrations designed by
                    <a href="https://freepik.com" target="_blank" rel="noopener noreferrer" css={SubtleLinkStyle}>
                        Freepik.com
                    </a>
                </Trans>
            </div>
        </footer>
    )
} 