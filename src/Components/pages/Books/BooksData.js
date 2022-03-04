import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const BooksData = ({book}) => {
    const{img,title,chanel,views,time,key, price}=book
    const navigate = useNavigate(); 
    const handleClickBooks = (e) => {
        const stock_uri = `/books/${key}`
        navigate(stock_uri)
    }

    
    return (
        <div>
             <Col>
               <Card className=" bg-dark bg-gradient text-white">
                   <Image width="100%" height="440px" src={img} ></Image>
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{title}</Card.Title>
                      <Card.Text>{chanel}</Card.Text>
                    </Card.Text>
                    <div className='d-inlineblock '>

                      <AiFillStar className='text-success'  />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiOutlineStar className='text-white'/>
                    </div>
                    <Card.Text>
                      Price :{price}tk
                    </Card.Text>
    
                  </Card.Body>
                  <Link to={`/books/${key}`} > <button onClick={()=>handleClickBooks(key)} className='border-0 text-bold btn btn-outline-warning'>Add To Cart</button> </Link>
                 
                </Card>
                </Col>
        </div>
    );
};

export default BooksData;