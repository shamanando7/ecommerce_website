import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
// import { CartProvider } from './CartContext'

const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart }) => {
    return (
        <>
            {/* <CartProvider> */}
                <Routes>
                    <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
                    <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
                    <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            {/* </CartProvider> */}
        </>
    )
}

export default Rout
