import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookOrder = () => {
    const params =useParams()
    const [booker,setBooker]=useState([])
    // console.log(booker);

    useEffect(()=>{
      fetch(`http://localhost:5000/allBooks/${params.useId}`)
      .then(res=>res.json())
      .then(data=>setBooker(data))
    },[])



      
     return (
        <div>
           <div className="d-flex justify-content-center  align-items-center m-5">
               <div>
               <Image width="100%" height="480px" className='rounded'  src={booker.img} ></Image> 
                 
               </div>
             <div className='w-50'>
             <h2 className='text-white fs-5'>products number : <span> {params.useId}</span> 
            </h2>
            <Col  className=' ps-5  ' height="420px">
               < Card className=" bg-dark bg-gradient text-white">
                  
                   <Card.Body className=' '>
                    <Card.Text className=' text_card text-start'>
                         <Card.Title>Book Name : {booker.name}</Card.Title>
                      <Card.Text>Book Writer : {booker.writer }</Card.Text>
                      <Card.Text>Dexcription : {booker.description}</Card.Text>
                    </Card.Text>
                    
                    <Card.Text>
                      Delivery Price : {booker.price}tk
                    </Card.Text>
    
                  </Card.Body>
                  </Card>
                </Col>
             </div>
           
             </div>
                 
                 
              
        </div>
    );
};

export default BookOrder;