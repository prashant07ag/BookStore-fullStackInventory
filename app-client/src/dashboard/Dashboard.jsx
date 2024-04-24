import React, { useEffect, useState } from 'react';
import favoritebook from "../assets/favoritebook.jpg"
const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all_books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // Calculate total authors and categories
  const totalAuthors = [...new Set(books.map(book => book.authorName))].length;
  const totalCategories = [...new Set(books.map(book => book.category))].length;

  return (
    <div className="md:w-full">
      <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Bookstore Inventory Admin Dashboard</h1>
        </header>
        <main className="flex-grow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white flex flex-col justify-around rounded-lg shadow-md p-4">
            <div>
            <h2 className="text-xl font-bold mb-2">Total Books</h2>
            <p className="text-gray-600 text-4xl">{books.length}</p>
            </div>
            <img src={favoritebook} className='w-56' alt="" />
          </div>
          <div className="bg-white flex flex-col justify-around rounded-lg shadow-md p-4">
            <div>
            <h2 className="text-xl font-bold mb-2">Total Authors</h2>
            <p className="text-gray-600 text-4xl">{totalAuthors}</p>
            </div>
            <img src={favoritebook} className='w-56' alt="" />
          </div>
          <div className="bg-white flex flex-col justify-around rounded-lg shadow-md p-4">
            <div>
            <h2 className="text-xl font-bold mb-2">Total Categories</h2>
            <p className="text-gray-600 text-4xl">{totalCategories}</p>
            </div>
            <img src={favoritebook} className='w-56' alt="" />
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-4 px-6 text-center">
          © 2024 Bookstore Inc.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
