import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularItems from '../components/PopularItems'
import Specialist from '../components/Specialist'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Specialist/>
    <PopularItems/>
    <Products/>
    </>
  )
}

export default Home
