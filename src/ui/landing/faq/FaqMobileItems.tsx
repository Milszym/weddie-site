/** @jsxImportSource @emotion/react */
import Slider from "react-slick";
import {FaqItem} from "./FaqItems"
import {useRef, useState} from "react";
import {css, Theme} from "@mui/material"
import {withMyTheme} from "../../theme/theme"

interface FaqMobileItemsProps {
    mobileItems: FaqItem[]
}

const FaqMobileItemsStyle = withMyTheme(() => css`
    width: 100%;
`)

const FaqItemWrapperStyle = withMyTheme(() => css`
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
`)

const FaqItemStyle = withMyTheme(() => css`
    width: 80vw;
    border-radius: 32px;
    border: 2px solid #daaa98;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`)

const FaqItemTitleStyle = withMyTheme(() => css`
    font-size: clamp(1rem, 6vw, 2.5rem);
    font-weight: 200;
`)

const FaqItemDescriptionStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(1rem, 5vw, 2.5rem);
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 200;
    color: black;
`)

const ArrowStyle = withMyTheme(() => css`
    border: solid black;
    border-width: 0 3px 3px 0;
    position: absolute;
    padding: 3px;
`)

const RightArrowStyle = withMyTheme(() => css`
    transform: rotate(-45deg);
    right: 0;
    text-align: center;
    -webkit-transform: rotate(-45deg);
`)

const LeftArrowStyle = withMyTheme(() => css`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
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
            {/*@ts-ignore*/}
            <Slider {...settings} ref={sliderRef}>
                <>
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
                </>
            </Slider>
            {/* <div css={[ArrowStyle, LeftArrowStyle]} onClick={slidePrevious}></div> */}
            {/* <div css={[ArrowStyle, RightArrowStyle]} onClick={slideNext}></div> */}
        </div>
    )
}
