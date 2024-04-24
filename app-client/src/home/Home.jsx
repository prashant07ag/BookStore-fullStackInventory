import React from 'react'
import Hero from '../component/Hero'
import BestBooks from './BestBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
const Home = () => {
  return (
    <>
      <Hero/>
      <BestBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </>
  )
}

export default Home