import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookOrder = () => {
    const params =useParams()
    const [booker,setBooker]=useState([])
    // console.log(booker);

    useEffect(()=>{
        fetch('/Books.json')
        .then(res=>res.json())
        .then(data => 
            {
           const findData =data.find(f=>f.key===params?.useId)
           setBooker(findData)
        },)
    },[])
     return (
        <div>
            <h2 className='text-white'>products number<span> {booker.key}</span>
            </h2>
            
            

            <Col  className='w-25 mx-auto'>
               < Card className=" bg-dark bg-gradient text-white">
                     <Image width="100%" height="240px" className='rounded'  src={booker.img} ></Image> 
                 
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{booker.title}</Card.Title>
                      <Card.Text>{booker.chanel}</Card.Text>
                    </Card.Text>
                    
                    <Card.Text>
                      Price :{booker.price}tk
                    </Card.Text>
    
                  </Card.Body>
                 
                 
                </Card>
                 {/* <Link to={`/books/${key}`} > <button onClick={()=>handleClickBooks(key)} className='border-0 text-bold btn btn-outline-warning'>Add To Cart</button> </Link> */}
                </Col>
        </div>
    );
};

export default BookOrder;