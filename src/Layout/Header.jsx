import React from 'react'
import PrivateMenu from '../Components/PrivateMenu';
import PublicMenu from '../Components/PublicMenu';

const Header = () => {

  const isUserLogedIn = localStorage.getItem('isUserLogedIn');
  const headerMenu = isUserLogedIn ? <PrivateMenu /> : <PublicMenu />;

  return (
    <div className='header'>
      <h1>Header</h1>
      {headerMenu}
    </div>
  )
}

export default Header