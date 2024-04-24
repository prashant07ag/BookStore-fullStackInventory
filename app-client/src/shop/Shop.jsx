import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
const Shop = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/all_books')
     .then(res => res.json())
     .then(data => setbooks(data));
  }, []); 
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book=><Card
           className='p-4'>
            <img src={book.imageURL} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded hover:bg-black'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop