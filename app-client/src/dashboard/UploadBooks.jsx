import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const UploadBooks = () => {
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorTitle.value;
    const imageURL = form.imageURL.value;
    const category = form.bookCategory.value;
    const bookDescription = form.description.value; 
    const bookPDFURL = form.bookURL.value; 

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj);
    fetch('https://book-store-server-site.vercel.app/upload_book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert('Success');
      form.reset();
    })
  };
  return (
    <div className='px-4 my-8'>
      <h2 className='mb-6 text-3xl font-bold'>Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1000px] flex-col flex-wrap gap-2">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookTitle">
                Book Title
              </label>
              <input id="bookTitle" type="text" name="bookTitle" placeholder="Book Name" required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorTitle">
                Author Name
              </label>
              <input id="authorTitle" type="text" name="authorTitle" placeholder="Author Name" required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageURL">
                Image Url
              </label>
              <input id="imageURL" type="text" name="imageURL" placeholder="enter image url" required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookCategory">
                Book Category
              </label>
              <input id="bookCategory" type="text" name="bookCategory" placeholder="Book Category" required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookDescription">Book Description</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='write your book description' name="description" id="" cols="10" rows="5"></textarea>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookURL">
            Book pdf URL
          </label>
          <input id="bookURL" type="text" name="bookURL" placeholder="Book URL" required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Upload Book
          </button>
        </div>
      </form>
    </div>
  )
}

export default UploadBooks