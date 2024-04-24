import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all_books')
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => alert("Book is deleted!"));
  }

  return (
    <div className='px-4 my-8'>
      <h2 className='mb-6 text-3xl font-bold'>Manage Your Books</h2>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='px-4 py-2'>No</th>
              <th className='px-4 py-2'>Book Name</th>
              <th className='px-4 py-2'>Author Name</th>
              <th className='px-4 py-2'>Category</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Edit/Manage</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className='border px-4 py-2'>{index + 1}</td>
                <td className='border px-4 py-2'>{book.bookTitle}</td>
                <td className='border px-4 py-2'>{book.authorName}</td>
                <td className='border px-4 py-2'>{book.category}</td>
                <td className='border px-4 py-2'>$10</td>
                <td className='border px-4 py-2'>
                  <Link to={`/admin/dashboard/edit-book/${book._id}`} className='text-blue-500 hover:underline mr-2'>Edit</Link>
                  <button onClick={() => handleDelete(book._id)} className='text-red-500 hover:underline'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBooks;
