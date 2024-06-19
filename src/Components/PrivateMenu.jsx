import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const PrivateMenu = () => {
    const navigate = useNavigate();
  return (
    <div className='menu-list'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink> 
        <button type="button" onClick={()=>{
            localStorage.removeItem('isUserLogedIn');
            navigate('/login');
        }}>
            Log Out
        </button>
    </div>
  )
}

export default PrivateMenu