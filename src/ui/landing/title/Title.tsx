/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css } from "@emotion/react"
import { ImageResource } from "../../resources/ImageResource"
import { Button, Typography } from "@mui/material"
import { Fullscreen } from "../../components/Fullscreen"

const TitleContainerStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background: linear-gradient(to right, #f9f9f7, #f0f1eb);
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

const NavButtonStyle = withMyTheme((theme) => css`
    font-family: 'Cormorant', serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: none;
    color: #94AE98;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 1rem 0 0;
    position: relative;
    
    ${buttonAnimationStyle(theme)}
`);

const ContactButtonStyle = withMyTheme((theme) => css`
    font-family: 'Cormorant', serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: none;
    color: #000;
    background: none;
    margin-right: 2rem;
    border: none;
    cursor: pointer;
    position: relative;
    
    ${buttonAnimationStyle(theme)}
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
`;

const LeftNavContainer = css`
    display: flex;
    gap: 2rem;
    margin-left: 2rem;
`;

const ContentStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin-left: 10vw;
`;

const LogoStyle = css`
    width: 400px;
    margin-bottom: 2.5rem;
`;

const LaptopImageWrapperStyle = css`
    width: 45%;
    max-width: 550px;
    margin-right: 15vw;
    position: relative;
`;

const LaptopImageStyle = css`
    width: 100%;
    max-width: 550px;
`;

const LaptopContentStyle = css`
    position: absolute;
    top: 5.4%;
    left: 10.1%;
    width: 79.7%;
    height: 75.5%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    overflow: hidden;
    z-index: 2;
`;

const LaptopContentItselfStyle = css`
    width: 45vw;
    height: 52vh;
    transform: scale(0.6);
    transform-origin: top left;
    border: none;
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
`;

const DescriptionStyle = withMyTheme((theme) => css`
    font-family: 'Cormorant', serif;
    font-size: 1.5rem;
    color: #000;
    text-align: left;
    max-width: 600px;
    line-height: 1.5;
    margin-bottom: 1.5rem;
`);

export const Title = () => {
    const { t } = useTranslation();

    return <Fullscreen additionalCss={TitleContainerStyle}>
        <div css={NavContainer}>
            <div css={LeftNavContainer}>
                <Button css={NavButtonStyle}>{t('title.button1')}</Button>
                <Button css={NavButtonStyle} style={{ color: '#C45526' }}>{t('title.button2')}</Button>
            </div>
            <Button css={ContactButtonStyle}>{t('title.contact')}</Button>
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
            {false && <div css={LaptopContentStyle}>
                <iframe
                    css={LaptopContentItselfStyle}
                    src="https://monikaikarol.pl/"
                    title="Laptop Screen Content"
                    frameBorder="0"
                    loading="lazy"
                />
            </div>}
            <div css={LaptopImageContentWrapperStyle}>
                <img src={ImageResource.laptopContent} css={LaptopImageContentStyle} alt="Laptop Content" />
            </div>
            <img src={ImageResource.laptop} alt="Laptop with Map" css={LaptopImageStyle} />
        </div>
    </Fullscreen>
};