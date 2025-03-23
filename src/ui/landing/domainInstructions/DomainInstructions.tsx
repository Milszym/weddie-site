/** @jsxImportSource @emotion/react */
import { withMyTheme } from "../../theme/theme"
import { css, Theme, Box } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { MyText } from "../../components/text/MyText"
import { useTranslation } from "react-i18next"
import DomainIcon from '@mui/icons-material/Domain'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { isMobile, MOBILE_WIDTH } from "../../util/isMobile"

export const DOMAIN_INSTRUCTIONS_ID = 'domainInstructions'

const OffersContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
`)

const OffersStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vw;
`)

const OfferBoxStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 5vh;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-basis: 100%;
    }
`)

const OfferBoxDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.5em;
    text-align: center;
`)

const IconContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: clamp(12rem, 15vw, 18rem);
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`)

const PrimaryIconStyle = withMyTheme((theme: Theme) => css`
    font-size: 6em;
    color: ${theme.palette.primary.main};
`)

const SecondaryIconStyle = withMyTheme((theme: Theme) => css`
    font-size: 6em;
    color: ${theme.palette.secondary.main};
`)

const PrimaryTitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 2.5em;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
    text-align: center;
`)

const SecondaryTitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 2.5em;
    color: ${theme.palette.secondary.main};
    font-family: ${theme.typography.h1.fontFamily};
    text-align: center;
`)

export const DomainInstructions = () => {
    const { t } = useTranslation()

    return <Fullscreen>
        <div css={OffersContainerStyle}>
            <MyHeader text={t('domainInstructions.title')} />
            <div css={OffersStyle}>
                <div css={OfferBoxStyle}>
                    <div css={IconContainerStyle}>
                        <DomainIcon css={PrimaryIconStyle} />
                    </div>
                    <MyText text={t('domainInstructions.customDomain.title')} additionalCss={PrimaryTitleStyle} />
                    {!isMobile() && <MyText text={t('domainInstructions.customDomain.description')} additionalCss={OfferBoxDescriptionStyle} />}
                </div>
                <div css={OfferBoxStyle}>
                    <div css={IconContainerStyle}>
                        <SubdirectoryArrowRightIcon css={SecondaryIconStyle} />
                    </div>
                    <MyText text={t('domainInstructions.subdomain.title')} additionalCss={SecondaryTitleStyle} />
                    {!isMobile() && <MyText text={t('domainInstructions.subdomain.description')} additionalCss={OfferBoxDescriptionStyle} />}
                </div>
            </div>
        </div>
    </Fullscreen>
}