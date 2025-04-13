/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css } from "@emotion/react"
import { ImageResource } from "../../resources/ImageResource"
import { Button, Typography } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"
import { mobileCss } from "../../util/isMobile"
import { UNCLE_ON_A_WEDDING_ID } from "../unlceOnAWedding/UncledOnAWedding"
import { scrollToSection } from "../../util/scroll"
import { ROCKING_AUNT_ID } from "../rockingAunt/RockingAunt"
import { CONTACT_ID } from "../contact/Contact"

const TitleContainerStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background: linear-gradient(to left, #94AE98, #FFFFFF);

    ${mobileCss(`
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(to top, #94AE98, #FFFFFF);
    `)}
`);

const buttonAnimationStyle = (theme: any) => `
    transition: all 0.3s ease;

    &:hover {
        color: ${theme.palette.primary.main};
        background: none;
        transform: translateY(-2px);
    }
    
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background-color: ${theme.palette.primary.main};
        transition: all 0.3s ease;
    }
    
    &:hover:after {
        width: 100%;
        left: 0;
    }
`

const CommonNavButtonStyle = (theme: any) => `
    font-family: 'Cormorant', serif;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    color: ${theme.palette.primary.main};
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    position: relative;
    
    ${buttonAnimationStyle(theme)}

    ${mobileCss(`
        margin: 0 0.5rem 0 0;
        margin-left: 1rem;
    `)}
`

const NavButtonStyle = withMyTheme((theme) => css`
    ${CommonNavButtonStyle(theme)}
    ${mobileCss(`
        margin-left: 1rem;
    `)}
`);

const NavSecondaryButtonStyle = withMyTheme((theme) => css`
    ${CommonNavButtonStyle(theme)}
    color: ${theme.palette.secondary.main};
`);

const ContactButtonStyle = withMyTheme((theme) => css`
    font-family: 'Cormorant', serif;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    color: #000;
    background: none;
    margin-right: 2rem;
    border: none;
    cursor: pointer;
    position: relative;
    
    ${buttonAnimationStyle(theme)}

    ${mobileCss(`
        margin-right: 1rem;
    `)}
`);

const NavContainer = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 2rem;
    left: 0;
    animation: fadeIn 0.8s ease-in-out forwards;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    ${mobileCss(`
        position: absolute;
        top: 1rem;
        margin-bottom: 2rem;
    `)}
`;

const LeftNavContainer = css`
    display: flex;
    gap: 2rem;

    ${mobileCss(`
        gap: 2vw;
    `)}
`;

const ContentStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin-right: 5vw;
    margin-left: 10vw;

    ${mobileCss(`
        width: 90%;
        margin-left: 0;
        align-items: center;
        text-align: center;
        margin-top: 5vh;
        margin-bottom: 2rem;
    `)}
`;

const LogoStyle = css`
    width: 400px;
    margin-bottom: 2.5rem;

    ${mobileCss(`
        width: 80%;
        margin-bottom: 1.5rem;
    `)}
`;

const LaptopImageWrapperStyle = css`
    width: 55%;
    min-width: 300px;
    margin-right: 15vw;
    margin-left: 5vw;
    position: relative;

    ${mobileCss(`
        width: 90%;
        margin-right: 0;
        margin-left: 0;
        margin-top: 2vh;
        margin-bottom: 2rem;
    `)}
`;

const LaptopImageStyle = css`
    width: 100%;
`;

const LaptopImageContentWrapperStyle = css`
    top: 5.4%;
    left: 10%;
    width: 80%;
    height: 73%;
    position: absolute;
    overflow: scroll;
    z-index: 2;
`

const LaptopImageContentStyle = css`
    width: 100%;
    object-fit: cover;
`;

const HeaderTextStyle = css`
    font-family: 'Great Vibes', serif;
    font-size: 2.2rem;
    color: #000;
    text-align: left;
    margin-bottom: 1.5rem;
    font-weight: 400;

    ${mobileCss(`
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 1rem;
    `)}
`;

const DescriptionStyle = withMyTheme((theme) => css`
    font-family: 'Cormorant', serif;
    font-size: 1.5rem;
    color: #000;
    text-align: left;
    max-width: 600px;
    line-height: 1.5;
    margin-bottom: 1.5rem;

    ${mobileCss(`
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 1rem;
        padding: 0 1rem;
    `)}
`);

export const Title = () => {
    const { t } = useTranslation();

    return <Fullscreen additionalCss={TitleContainerStyle}>
        <div css={NavContainer}>
            <div css={LeftNavContainer}>
                <Button css={NavSecondaryButtonStyle} onClick={() => scrollToSection(UNCLE_ON_A_WEDDING_ID)}>
                    {t('title.button1')}
                </Button>
                <Button css={NavButtonStyle} onClick={() => scrollToSection(ROCKING_AUNT_ID)}>
                    {t('title.button2')}
                </Button>
            </div>
            <Button css={ContactButtonStyle} onClick={() => scrollToSection(CONTACT_ID)}>
                {t('title.contact')}
            </Button>
        </div>

        <div css={ContentStyle}>
            <img src={ImageResource.logo} alt="Weddie Site Logo" css={LogoStyle} />
            <Typography css={HeaderTextStyle}>{t('title.headerText')}</Typography>
            <Typography css={DescriptionStyle}>{t('title.descriptionLine1')}</Typography>
            <Typography css={DescriptionStyle}>
                {t('title.descriptionLine2')}
            </Typography>
        </div>

        <div css={LaptopImageWrapperStyle}>
            <div css={LaptopImageContentWrapperStyle}>
                <img src={ImageResource.laptopContent} css={LaptopImageContentStyle} alt="Laptop Content" />
            </div>
            <img src={ImageResource.laptop} alt="Laptop with Map" css={LaptopImageStyle} />
        </div>
    </Fullscreen>
};