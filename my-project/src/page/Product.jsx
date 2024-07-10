import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Product = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <ProductDisplay />
      <Footer/>
    </div>
  )
}

export default Product