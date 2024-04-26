import React, { useEffect, useState } from 'react'
import BookCard from '../component/BookCard';
const BestBooks = () => {
    const [books, setbooks] = useState([]);
    useEffect(() =>{
        fetch('https://book-store-server-site.vercel.app/all_books')
       .then(res => res.json())
       .then(data => setbooks(data.slice(4, 10)))
    },[]);
    
    return (
        <div>
            <BookCard books={books} headline ="Best Seller Books"/>
        </div>
    )
}

export default BestBooks