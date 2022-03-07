import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allBooks' ,data)
        .then(res =>{
            console.log(res)
        })
    }
    return (
        <div className='m-5'>
            <h3 className='text-white'>Add Delivery Book Items</h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
              <input {...register("name", { required: true, maxLength: 20 }) } placeholder="Name" className="d-block"/>
              <input {...register("writer", { required: true, maxLength: 20 }) } placeholder="Writer" className="d-block" />
              <textarea {...register("description", )} placeholder="Description" className="d-block"/>
              <input type="number" {...register("price")} placeholder="Price" className="d-block"/>
              <input  {...register("img")} placeholder="Image url" className="d-block"/>
              <input type="submit" className="d-block"/>
              </form>
            </div>
        </div>
    );
};

export default Admin;