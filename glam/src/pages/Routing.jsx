import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { Cart } from '../features/cart/Cart'
const Routing = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>
    </>
  )
}

export default Routing