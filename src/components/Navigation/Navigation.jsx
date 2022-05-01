import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.scss'


const Navigation = () => {
  return (
    <nav className='navHeader'>
      <Logo />
      <p style={{display: 'grid', justifyContent: 'flex-end'}} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  )
}

export default Navigation