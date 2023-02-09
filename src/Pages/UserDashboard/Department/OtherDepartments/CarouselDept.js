import React from 'react'
import OtherDepartment from './OtherDepartment'
import Carousel from 'react-bootstrap/Carousel';
function CarouselDept() {
  return (
    <>
    
    <Carousel>
            
                <Carousel.Item> 
                 <OtherDepartment/>
                </Carousel.Item>

                <Carousel.Item>
                <OtherDepartment/>
                </Carousel.Item>

            </Carousel>
    </>
  )
}

export default CarouselDept