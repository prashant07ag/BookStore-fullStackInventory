import React from 'react'
import favoritebook from "../assets/favoritebook.jpg"
import FavBooks from '../home/FavBooks'
import PromoBanner from '../home/PromoBanner'
const About = () => {
  return (
    <div className='mt-28'>
      <div class="container m-auto px-6 text-gray-600 lg:px-24">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""></img>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-5xl">We are changing the <span className='text-blue-700'>way people Read</span></h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
    </div>
      <PromoBanner/>
      <FavBooks/>
    </div>
  )
}

export default About