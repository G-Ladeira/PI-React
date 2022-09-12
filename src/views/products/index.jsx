import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import ProductsC from '../../components/products'


import "./style.sass"

const Products = () => {
  return (
    <div>

    <Header />

    <ProductsC />

    <div className='footerP'>
    <Footer />
    
    </div>



    </div>
  )
}

export default Products