import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allBooks' ,data)
        .then(res =>{
            if(res.data.insertedId){
                alert("Added successfully")
                reset();
            }
            console.log(res)
        })
    }
    return (
        <div className='m-5'>
            <h3 className='text-white bg_color'>Add Delivery Book Items</h3>
            <div className='add_book mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
              <input {...register("name", { required: true, maxLength: 30 }) } placeholder="Name"/>
              <input {...register("writer", { required: true, maxLength: 30 }) } placeholder="Writer" />
              <textarea {...register("description", )} placeholder="Description" />
              <input type="number" {...register("price")} placeholder="Price" />
              <input  {...register("img")} placeholder="Image url" />
              <input type="submit"  className='submit' />
              </form>
            </div>
        </div>
    );
};

export default Admin;