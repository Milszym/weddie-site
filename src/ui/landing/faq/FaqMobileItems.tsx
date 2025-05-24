/** @jsxImportSource @emotion/react */
import Slider from "react-slick";
import {FaqItem} from "./FaqItems"
import {useRef, useState} from "react";
import {css, Icon, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

interface FaqMobileItemsProps {
    mobileItems: FaqItem[]
}

const FaqMobileItemsStyle = withMyTheme(() => css`
    width: 100%;
    position: relative;
`)

const FaqItemWrapperStyle = withMyTheme(() => css`
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
`)

const FaqItemStyle = withMyTheme(() => css`
    width: 65vw;
    border-radius: 32px;
    border: 2px solid #daaa98;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`)

const FaqItemTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(1rem, 6vw, 2.5rem);
    font-weight: 200;
    text-align: center;
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};
`)

const FaqItemDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1rem, 5vw, 2.5rem);
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 200;
    margin-top: .8rem;
    color: ${theme.palette.text.primary};
    text-align: center;
`)

const ArrowStyle = withMyTheme(() => css`
    position: absolute;
    padding: 3px;
    transform: scaleY(1.3);
    top: 50%;
    opacity: 0.6;
`)

const RightArrowStyle = withMyTheme(() => css`
    right: 1rem;
    text-align: center;
`)

const LeftArrowStyle = withMyTheme(() => css`
    left: 1rem;
`)

export const FaqMobileItems = ({mobileItems}: FaqMobileItemsProps) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true, // Show page indicators
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
        afterChange: (current: number) => {
            setCurrentSlide(current);
        },
    };

    const slideNext = () => {
        slideTo(currentSlide + 1)
    }

    const slidePrevious = () => {
        slideTo(currentSlide - 1)
    }

    const slideTo = (index: number) => {
        if (sliderRef.current) {
            (sliderRef.current as any).slickGoTo(index);
        }
    }

    return (
        <div css={FaqMobileItemsStyle}>
            <div>
                <>
                    {/*@ts-ignore*/}
                    <Slider {...settings} ref={sliderRef}>
                        {mobileItems.map((faqItem, index) => (
                            <div key={index} css={FaqItemWrapperStyle}>
                                <div css={FaqItemWrapperStyle}>
                                    <div css={FaqItemStyle}>
                                        <div css={FaqItemTitleStyle}>
                                            {faqItem.title}
                                        </div>
                                        <div css={FaqItemDescriptionStyle}>
                                            {faqItem.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </>
            </div>
            <ArrowBack css={[ArrowStyle, LeftArrowStyle]} onClick={slidePrevious}/>
            <ArrowForward css={[ArrowStyle, RightArrowStyle]} onClick={slideNext}/>
        </div>
    )
}
