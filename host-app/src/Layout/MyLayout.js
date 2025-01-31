import React from 'react'
import Header from '../Comps/Header'
import { Outlet } from 'react-router-dom'

const MyLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MyLayout