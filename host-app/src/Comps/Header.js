import React from 'react'
import MyButton from '../Comps/MyButton'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    console.log('pathName>>',location.pathname);
    const pathName = location.pathname
    
  return (
    <div className='flex items-center gap-10 px-4 py-5 mt-1 bg-red-100'>
        <NavLink to={'/'} className={`${pathName=='/'&&'border-b-2 border-red-500'} nav_link`}>EmailApp</NavLink>
        <NavLink to={'/chat-micro-app'} className={`${pathName=='/chat-micro-app'&&'border-b-2 border-red-500'} nav_link`}>ChatApp</NavLink>
    </div>
  )
}

export default Header