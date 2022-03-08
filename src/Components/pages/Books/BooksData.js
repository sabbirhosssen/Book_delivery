import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import './Books.css';
const BooksData = ({book}) => {
    const{img,name,writer,_id, price}=book
    const navigate = useNavigate(); 
    const handleClickBooks = (_id) => {
      
        const stock_uri = `/books/${_id}`
        navigate(stock_uri)
    }

    
    return (
        <div>
             <Col>
               <Card className=" bg-dark bg-gradient text-white " style={{height:"660px"}}>
                   <Image width="100%" height="390px" src={img} ></Image>
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{name}</Card.Title>
                      <Card.Text>{writer}</Card.Text>
                    </Card.Text>
                    <div className='d-inlineblock '>
                      <AiFillStar className='text-success'  />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiOutlineStar className='text-white'/>
                    </div>
                    <Card.Text>
                      Delivery Price :{price}tk
                    </Card.Text>
    
                  </Card.Body>
                  <Link to={`/books/${_id}`} > <button onClick={()=>handleClickBooks(_id)} className='border-0 text-white btn btn-outline-warning bg_card mb-1 '>Add To Cart</button> </Link>
                 
                </Card>
                </Col>
        </div>
    );
};

export default BooksData;