import Slider from "react-slick";
import { FaqItem } from "./FaqItems"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from "react";

interface FaqMobileItemsProps {
    mobileItems: FaqItem[]
}

export const FaqMobileItems = ({ mobileItems }: FaqMobileItemsProps) => {
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
        <div className="faqMobileItems">
            <Slider {...settings} ref={sliderRef}>
                {mobileItems.map((faqItem) => <div className="faqItemWrapper">
                    <div className="faqItemWrapper">
                        <div className="faqItem">
                            <div className="faqItemTitle">
                                {faqItem.title}
                            </div>
                            <div className="faqItemDescription">
                                {faqItem.description}
                            </div>
                        </div>
                    </div>
                </div>)}
            </Slider>
            {/* <div className="arrow left" onClick={slidePrevious}></div> */}
            {/* <div className="arrow right" onClick={slideNext}></div> */}
        </div>
    )
}