import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideOneBanner from './SlideOneBanner';
import SlideTwoBanner from './SlideTwoBanner';
const CarouselBanner = () => {

    
    return (
      <>
            <Carousel>
                <Carousel.Item>
                
                  <SlideOneBanner></SlideOneBanner>

                </Carousel.Item>
                <Carousel.Item>
                  <SlideTwoBanner></SlideTwoBanner>
                </Carousel.Item>
            </Carousel>
        </>


    )
}

export default CarouselBanner;