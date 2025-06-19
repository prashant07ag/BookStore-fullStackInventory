import React, { useEffect, useState } from 'react';
import BookCard from '../component/BookCard';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true); // loading state

    useEffect(() => {
        fetch('https://book-store-server-site.vercel.app/all_books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false); // stop loading
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                </div>
            ) : (
                <BookCard books={books} headline="Other Books" />
            )}
        </div>
    );
};

export default OtherBooks;
