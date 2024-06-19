import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicMenu = () => {
  return (
    <div className='menu-list'>
        <NavLink to={'/login'}>LogIn</NavLink>
        <NavLink to={'/signup'}>SignUp</NavLink>
    </div>
  )
}

export default PublicMenu