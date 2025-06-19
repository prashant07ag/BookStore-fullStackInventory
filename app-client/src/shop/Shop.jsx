import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('https://book-store-server-site.vercel.app/all_books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false); // Data loaded
      });
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-700 border-solid"></div>
        </div>
      ) : (
        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {books.map((book, index) => (
            <Card key={index} className='p-4'>
              <img src={book.imageURL} alt={book.bookTitle} className="h-48 w-full object-cover mb-4" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {book.bookTitle}
              </h5>
              <button className='mt-4 bg-blue-700 font-semibold text-white py-2 px-4 rounded hover:bg-black'>
                Buy Now
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
