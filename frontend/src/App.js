import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Stripe from './components/stripe'
import { useSelector } from "react-redux"
import {user} from "./redux/userRedux"
import {useEffect, useState} from "react"

 
const App = () => {

  const isUser = useSelector(user)
  const [userPresent, setUserPresent] = useState("")

  useEffect(() => {
    if(isUser){
      setUserPresent(true)
    }else{
      setUserPresent(false)
      console.log("ajajaj")
    }
  },[])

  return (
    <BrowserRouter>
    {
      isUser ?
      (
        <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/products/:category' element={<ProductList/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        
        </>
      ) : (
        <Routes>
           <Route path="/" element = {<Login/>}></Route>
        </Routes>
      )
    } 
    <Routes>
      
      {/* <Route path='/success' element={<Success/>}></Route>
      <Route path='/login'> element={user ? <Redirect to="/"/> : <Login/>}</Route>
      <Route path="/register" element = {user ? <Redirect to="/"/> : <Register/>}></Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App