import React from 'react'
import BannerCard from '../home/BannerCard/BannerCard'
const Hero = () => {
    return (
        <div className='px-4 md:px-24 bg-cyan-100 flex item-center'>
            <div className='flex w-full flex-col md:flex-row justify-around items-center gap-8 pt-40 pb-20'>
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-4xl font-bold text-black'>
                        Buy and Sell Your Books <span className='text-blue-700'>at Unbeatable Prices</span>
                    </h2>
                    <p className='w-4/5'>Welcome to our online book marketplace where you can buy and sell used textbooks, novels, and more. Save money on your book purchases and earn cash by selling books you no longer need. Join our community of book lovers and discover great deals today!</p>
                </div>
                <div className='md:w-1/2 hidden md:block'>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    )
}

export default Hero