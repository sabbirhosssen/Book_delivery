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
           <div className="d-flex justify-content-evenly   m-5">
             <div className='w-50'>
             <h2 className='text-white'>products number<span> {params.useId}</span>
            </h2>
            <Col  className='w-50 mx-auto'>
               < Card className=" bg-dark bg-gradient text-white">
                     <Image width="100%" height="420px" className='rounded'  src={booker.img} ></Image> 
                 
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{booker.title}</Card.Title>
                      <Card.Text>{booker.chanel}</Card.Text>
                    </Card.Text>
                    
                    <Card.Text>
                      Price : {booker.price}tk
                    </Card.Text>
    
                  </Card.Body>
                  </Card>
                </Col>
             </div>
             <div className='text-center'>
                   <h1 className='text-white'> Delivery Form</h1>

{/* 
                   <div className="">

            <div className="mx-auto w-50 my-5">
                <h3>Shipping Form</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="d-block gy-3 text-start my-5">
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" className="w-100" defaultValue={user?.displayName}></input>
                    <input {...register("email", { required: true, maxLength: 80 })} placeholder="Name" className="w-100" defaultValue={user?.email}></input>
                    <input type="number" {...register("Number", { required: true })} placeholder="Phone Number"
                        className="w-100 my-2" />
                    <input {...register("address")} placeholder="Address: District Name"
                        className="w-100 my-2" />

                    <textarea {...register("Address")} placeholder="Address Description " className="w-100 my-2" />

                    <input type="submit" className="d-block mx-auto bg-primary p-2  rounded border-1" />
                </form>

                <h6 className=""> Please complete Shipping Form ?</h6>
                <p>add conform the parcess ! Your All Tour </p>
                <Link as={Link} to={`/clientOrder`} className="my-5">
                    <Button>Conform on parcess </Button>
                </Link>
            </div>
        </div> */}

             </div>
             </div>
                 
                 
              
        </div>
    );
};

export default BookOrder;