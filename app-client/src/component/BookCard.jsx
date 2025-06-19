import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import './styles.css';
const BookCard = ({ headline, books }) => {
    return (
        <div className='my-10 px-4 lg:px-24'>
            <h2 className='text-4xl text-center font-bold text-black my-5'>{headline}</h2>
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {
                        books.map(book => <SwiperSlide key={book._id} className='hover:bg-black hover:text-white rounded-md '>
                            <Link to={`/book/${book._id}`}>
                                <div>
                                    <img src={book.imageURL} alt="" />
                                </div>
                                <div className='text-center font-bold py-2'>
                                    <h3>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                    <div>
                                        <p>$10.00</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
        </div>
    )
}

export default BookCard