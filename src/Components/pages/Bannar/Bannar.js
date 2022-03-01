import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Bannar = () => {
    return (
        <div>
             <Carousel variant="dark">
         
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://blog-cdn.reedsy.com/uploads/2017/10/CBG-Red.jpg"
                    alt="Second slide"
                    height="280px"
                    width="100%"
                />
                
                <Carousel.Caption className=" text-white">
                    <h5>Vacation Packages</h5>
                    <p>Find out the best deals and book yours today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://www.designhill.com/design-blog/wp-content/uploads/2018/10/Book-Cover-Design.jpg"
                    alt="Second slide"
                    height="280px"
                    width="100%"
                />
                
                <Carousel.Caption className=" text-white">
                    <h5>Vacation Packages</h5>
                    <p>Find out the best deals and book yours today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block  "
                    src="https://www.nessgraphica.com/wp-content/uploads/2020/11/top-book-cover-designers-6-800x533.jpg"
                    alt="Third slide"
                 
                    height="280px"
                    width="100%"

                />
                <Carousel.Caption className=" text-white">
                    <h5>Travel to the World</h5>
                    <p>Discover the hidden beauty from top to bottom</p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
            
        </div>
    );
};

export default Bannar;