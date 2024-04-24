import React from 'react'
import favoritebook from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBooks = () => {
  return (
    <div className='my-20 px-4 lg:px-24 flex flex-col md:flex-row-reverse justify-between items-center gap-4'>
        <div className='md:w-1/2'>
            <img src={favoritebook} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-3xl font bold my-5 md:w-3/4 font-bold'>Find Your Favorite <span className='text-blue-700'>Book here!</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt consectetur ducimus, a cumque sequi veniam, totam dolorum nostrum quam inventore culpa facere nesciunt repellat possimus! Aliquid expedita tenetur in.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listings</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to='/shop' className='mt-12 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all ease-in duration-300'>Explore More</button>
            </Link>
        </div>
    </div>
  )
}

export default FavBooks