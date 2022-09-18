import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideOneReview from './SlideOneReviewr';
import SlideTwoReview from './SlideTwoReview';
const CarouselReview = () => {

    
    return (
      <>
            <Carousel>
                <Carousel.Item>
                
                  <SlideOneReview></SlideOneReview>

                </Carousel.Item>
                <Carousel.Item>
                  <SlideTwoReview></SlideTwoReview>
                </Carousel.Item>
            </Carousel>
        </>


    )
}

export default CarouselReview;