import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Bannar = () => {
    return (
        <div>
             <Carousel variant="dark">
         
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/home-delivery-service-design-template-5d4f885f5f770721049bb76b50cdee46_screen.jpg?ts=1587942999"
                    alt="Second slide"
                    height="480px"
                    width="100%"   
                />
                
                <Carousel.Caption className=" text-white">
                    <h5>Delivery Packages</h5>
                    {/* <p>Find out the best deals and book yours today</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://www.designhill.com/design-blog/wp-content/uploads/2018/10/Book-Cover-Design.jpg"
                    alt="Second slide"
                    height="480px"
                    width="100%"
                />
                
                {/* <Carousel.Caption className=" text-white">
                    <h5>Vacation Packages</h5>
                    <p>Find out the best deals and book yours today</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block  "
                    src="https://www.spotneats.com/blog/wp-content/uploads/2021/02/Start-a-Wholesale-Online-Book-Delivery-Business-with-UberEats-Clone-App-in-2021.png"
                    alt="Third slide"
                 
                    height="480px"
                    width="100%"

                />
                {/* <Carousel.Caption className=" text-white">
                    <h5>Travel to the World</h5>
                    <p>Discover the hidden beauty from top to bottom</p>

                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        
            
        </div>
    );
};

export default Bannar;