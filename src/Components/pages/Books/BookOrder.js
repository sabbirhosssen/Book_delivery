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



      // all order client user information method

      // const { register, handleSubmit, reset ,user} = useAuth();
      // const onSubmit = data => {
      //     console.log(data);
      //     Axios.post(`https://secure-fjord-39220.herokuapp.com/allOrder `, data)
      //         .then(res => {
      //             if (res.data.insertedId) {
      //                 alert('added to successfully ')
      //                 reset();
      //             }
      //         })
      // }
     return (
        <div>
           <div className="d-flex justify-content-center  align-items-center m-5">
               <div>
               <Image width="100%" height="480px" className='rounded'  src={booker.img} ></Image> 
                 
               </div>
             <div className='w-50'>
             <h2 className='text-white'>products number<span> {params.useId}</span>
            </h2>
            <Col  className=' ps-5  ' height="420px">
               < Card className=" bg-dark bg-gradient text-white">
                  
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{booker.title}</Card.Title>
                      <Card.Text>{booker.chanel}</Card.Text>
                      <Card.Text>{booker.description}</Card.Text>
                    </Card.Text>
                    
                    <Card.Text>
                      Price : {booker.price}tk
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