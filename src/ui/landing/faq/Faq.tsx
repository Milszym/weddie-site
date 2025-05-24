/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react"
import {FaqSection, faqSections} from "./FaqItems"
import {FaqMobileItems} from "./FaqMobileItems"
import {useTranslation} from "react-i18next"
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"
import {isMobile, mobileCss} from "../../theme/isMobile"

const FaqContentStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    align-content: center;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    ${mobileCss(`
        justify-content: center;
    `)}
`)

const FaqTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(2rem, 5vw, 5rem);
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};

    ${mobileCss(`
        font-size: clamp(1rem, 10vw, 9rem);
    `)}
`)

const FaqSectionsStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
`)

const FaqSectionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: clamp(1rem, 2vw, 2.5rem);
    margin: .5em;
    font-family: ${theme.typography.h1.fontFamily};
    cursor: pointer;
    font-weight: 300;
    transition: all 0.5s ease;

    ${mobileCss(`
        font-size: clamp(1rem, 6vw, 2.5rem);
    `)}
`)

const FaqSelectedSectionStyle = withMyTheme((theme) => css`
    color: ${theme.palette.primary.main};;
    font-family: ${theme.typography.h1.fontFamily};
    font-weight: 500;
    border-bottom: solid 2px #daaa98;
`)

const FaqItemsStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-evenly;
`)

const FaqItemStyle = withMyTheme(() => css`
    width: 25vw;
    border-radius: 32px;
    border: 2px solid #daaa98;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mobileCss(`
        width: 80vw;
        margin: 16px;
    `)}
`)

const FaqItemTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(1rem, 2.5vw, 1.8rem);
    font-weight: 200;
    color: ${theme.palette.primary.main};
    text-align: center;
    font-family: ${theme.typography.h1.fontFamily};

    ${mobileCss(`
        font-size: clamp(1rem, 6vw, 2.5rem);
    `)}
`)

const FaqItemDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1rem, 1.3vw, 6rem);
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 200;
    color: ${theme.palette.text.primary};
    text-align: center;
    
    ${mobileCss(`
        font-size: clamp(1rem, 5vw, 2.5rem);
    `)}
`)

export const Faq = () => {
    const {t} = useTranslation()

    const [selectedSection, setSelectedSection] = useState<FaqSection>(faqSections[0])
    const changeSection = (newSection: FaqSection) => {
        setSelectedSection(newSection)
    }

    return (
        <section id="faq" css={FaqContentStyle}>
            <div css={FaqTitleStyle}>{t('faq.title')}</div>
            <div css={FaqSectionsStyle}>
                {faqSections.map((faqSection, index) => (
                    <div
                        key={index}
                        css={[FaqSectionStyle, selectedSection === faqSection && FaqSelectedSectionStyle]}
                        onClick={() => changeSection(faqSection)}
                    >
                        {faqSection.name}
                    </div>
                ))}
            </div>
            {isMobile() ? (
                <FaqMobileItems mobileItems={selectedSection.faqItems}/>
            ) : (
                <div css={FaqItemsStyle}>
                    {selectedSection.faqItems.map((faqItem, index) => (
                        <div key={index} css={FaqItemStyle}>
                            <div css={FaqItemTitleStyle}>
                                {faqItem.title}
                            </div>
                            <div css={FaqItemDescriptionStyle}>
                                {faqItem.description}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
