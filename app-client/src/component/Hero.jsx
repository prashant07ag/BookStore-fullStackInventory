import React from 'react'
import BannerCard from '../home/BannerCard/BannerCard'
const Hero = () => {
    return (
        <div className='px-4 md:px-24 bg-cyan-100 flex item-center'>
            <div className='flex w-full flex-col md:flex-row justify-around items-center gap-8 py-40'>
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-4xl font-bold text-black'>
                        Buy and Sell Your Books <span className='text-blue-700'>for the best Prices</span>
                    </h2>
                    <p className='w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus in ratione assumenda fuga minus quos facere ipsam repudiandae quod laborum, officiis neque! Consectetur laudantium aliquid neque ipsam saepe temporibus.</p>
                    <div>
                        <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-sm outlined-none mt-2' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300'>
                            Search
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    )
}

export default Hero