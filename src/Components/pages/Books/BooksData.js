import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BooksData = ({book}) => {
    const{img,title,chanel,views,time}=book
    return (
        <div>
             <Col>
               <Card className=" bg-trend">
                   <Card.Img src={img} ></Card.Img>
                   <Card.Body className='d-flex '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{title}</Card.Title>
                      <Card.Text>{chanel}</Card.Text>
                      <Card.Text>
                          {views} .{time}
                      </Card.Text>
                    </Card.Text>
    
                  </Card.Body>
                  <button className='border-0 text-bold btn btn-outline-warning'>Add To Cart</button>
                </Card>
                </Col>
        </div>
    );
};

export default BooksData;