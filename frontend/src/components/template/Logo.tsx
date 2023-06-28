import React from 'react'
import './Logo.css' 
import logo_image from '../../assets/images/logo.png'

function logo() {
  return (
    <aside className='logo bg-black flex justify-center items-center'>
        <a href="/" className='logo bg-black flex justify-center items-center'>
          <img src={logo_image} alt="logo" className='pr-0 pl-3.9 w-5/12'/>
        </a>
    </aside>
  )
}

export default logo