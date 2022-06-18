import React from 'react'
import Adds from '../comps/Adds'
import Categories from '../comps/Categories'
import Footer from '../comps/Footer'
import HomeSlide from '../comps/HomeSlide'
import Navbar from '../comps/Navbar'
import Newsletter from '../comps/Newsletter'
import Products from '../comps/Products'

const HomePage = () => {
  return (
    <div>
        <Adds/>
        <Navbar/>
        <HomeSlide/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default HomePage
