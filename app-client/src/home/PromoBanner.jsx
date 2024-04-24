import React from 'react'
import awardbooks from '../assets/awardbooks.png'
import { Link } from 'react-router-dom'
const PromoBanner = () => {
    return (
        <div className='mt-16 py-8 bg-cyan-100 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-6'>
                <div className='md:w-1/2'>
                    <h2 className='text-3xl font-bold mb-6 leading-snug'>
                        2023 National Book Awards for Fiction Shortlist
                    </h2>
                    <Link to='/shop' className='mt-12 block'>
                        <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all ease-in duration-300'>Get Promo Code</button>
                    </Link>
                </div>
                <div>
                    <img src={awardbooks} alt="" className='w-[200px]' />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner