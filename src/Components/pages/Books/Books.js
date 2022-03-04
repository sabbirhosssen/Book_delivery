import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BooksData from './BooksData';

const Books = () => {
   const [books,setBooks]=useState([])
   useEffect(()=>{
       fetch('/Books.json')
       .then(res=>res.json())
       .then(data=>setBooks(data))
   },[])
    return (
        <div>
               <h1 className=' ps-5 pt-5 mt-5 text-white'> All Books </h1>

<Row xs={2} md={5} className="g-4 p-5 h-100   m-0">
    {
        books?.map(book=>
            <BooksData
            key={book?.key}
            book={book}
            />)
    }
</Row>
            
        </div>
    );
};

export default Books;