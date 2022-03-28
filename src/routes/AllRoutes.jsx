import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'


function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/register' element={<Register/>}> </Route>
      <Route path='/products' element={<Products/>}> </Route>
      <Route path='*' element={<div>Route Not Found</div>}/>
    </Routes>
  )
}

export default AllRoutes