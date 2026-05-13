import React from 'react'
import Hero from '../components/Hero'
import PopularItems from '../components/PopularItems'
import Specialist from '../components/Specialist'
import Products from '../components/Products'
import FAQ from '../components/FAQ'
import Feedback from '../components/Feedback'

const Home = ({ addToCart }) => {
  return (
    <>
    <Hero/>
    <Specialist/>
    <PopularItems/>
    <Products addToCart={addToCart} />
    <FAQ/>
    <Feedback/>
    </>
  )
}

export default Home
