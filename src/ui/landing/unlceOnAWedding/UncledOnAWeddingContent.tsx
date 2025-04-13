/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css } from "@emotion/react"
import { Theme } from "@mui/material"
import { Instruction } from "../../components/instruction/Instruction"
import { MyButton } from "../../components/button/MyButton"
import { openUrl } from "../../util/openUrl"
import { scrollToSection } from "../../util/scroll"
import { CONTACT_ID } from "../contact/Contact"
import { DOMAIN_INSTRUCTIONS_ID } from "../domainInstructions/DomainInstructions"
import { isMobile, mobileCss } from "../../util/isMobile"

const TitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
`)

const OfferTitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 3.5rem;
    color: ${theme.palette.secondary.main};
    font-weight: 500;
    text-align: center;
`)

const InstructionTitleStyle = withMyTheme((theme: Theme) => css`
    font-size: 1.5rem;
    margin-top: 2rem;
    color: ${theme.palette.primary.main};
    font-weight: 600;
    text-align: center;
    font-family: ${theme.typography.body1.fontFamily};
`)

const InstructionsBoxStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mobileCss(`
        gap: 0.5rem;
    `)}
`)

const ButtonsRow = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    gap: 1.5rem;
    justify-content: center;
    ${mobileCss(`
        gap: 2.2rem;
    `)}
`)

const ButtonStyle = withMyTheme(() => css`
`)

const SpacerStyle = withMyTheme(() => css`
    margin-top: 1.5rem;
    `)

const ButtonSpacer = withMyTheme(() => css`
    margin-top: .8rem;
`)

export const FIRST_TEMPLATE_URL = 'https://dorotaiszymon.weddie.site'
export const SECOND_TEMPLATE_URL = 'https://monikaikarol.pl'

export const UncleOnAWeddingContent = () => {
    const { t } = useTranslation()

    const onFirstTemplateClick = () => {
        openUrl(FIRST_TEMPLATE_URL)
    }

    const onSecondTemplateClick = () => {
        openUrl(SECOND_TEMPLATE_URL)
    }

    const onDomainInstructionsClick = () => {
        scrollToSection(DOMAIN_INSTRUCTIONS_ID)
    }

    const onContactClick = () => {
        scrollToSection(CONTACT_ID)
    }

    return <>
        <MyHeader text={t('uncleOnAWedding.title')} additionalCss={TitleStyle} />
        <MyHeader text={t('uncleOnAWedding.offerTitle')} additionalCss={OfferTitleStyle} />
        <MyHeader text={t('uncleOnAWedding.instructionTitle')} additionalCss={InstructionTitleStyle} />
        <div css={InstructionsBoxStyle}>
            <Instruction positionNumber={'1.'} text={t('uncleOnAWedding.instructions.step1')} />
            {isMobile() && <div css={ButtonSpacer} />}
            <div css={ButtonsRow}>
                <MyButton text={t('uncleOnAWedding.firstTemplate')} onClick={onFirstTemplateClick} />
                <MyButton text={t('uncleOnAWedding.secondTemplate')} onClick={onSecondTemplateClick} />
            </div>
            <div css={SpacerStyle} />
            <Instruction positionNumber={'2.'} text={t('uncleOnAWedding.instructions.step2')} />
            <div css={SpacerStyle} />
            <Instruction positionNumber={'3.'} text={t('uncleOnAWedding.instructions.step3')} />
            {isMobile() && <div css={ButtonSpacer} />}
            <MyButton text={t('uncleOnAWedding.domainInstructions')} onClick={onDomainInstructionsClick} additionalCss={ButtonStyle} />
            <div css={SpacerStyle} />
            <Instruction positionNumber={'4.'} text={t('uncleOnAWedding.instructions.step4')} />
            {isMobile() && <div css={ButtonSpacer} />}
            <MyButton text={t('uncleOnAWedding.contact')} onClick={onContactClick} additionalCss={ButtonStyle} />
        </div>
    </>
}