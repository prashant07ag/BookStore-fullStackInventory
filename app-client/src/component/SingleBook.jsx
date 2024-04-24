import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const { _id, bookTitle, imageURL, authorName, bookDescription, bookPDFURL } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col md:flex-row justify-between gap-6'>
      <div className='md:w-2/5 flex flex-col justify-center items-center'>
        <img src={imageURL} alt="" className='h-96' />
        <h1 className='text-2xl font-bold text-center mt-5 md:m-5'>Price: $10.00</h1>
      </div>
      <div className='md:w-3/5 py-2'>
        <div className='px-6'>
          <h1 className='text-3xl font-bold '>{bookTitle}</h1>
          <h3 className='italic'>{authorName}</h3>
        </div>
        <p className='px-6 font-medium font-mono'>{bookDescription}</p>
        <a className='text-2xl px-6 font-bold' href={bookPDFURL}>
          <button className='bg-blue-700 text-white hover:bg-black mt-5 px-6 py-4 rounded-lg'> 
            Read PDF
          </button>
        </a>
        
      </div>
    </div>
  )
}

export default SingleBook