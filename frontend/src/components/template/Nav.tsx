import React from 'react'
import './Nav.css'
import FaIcon from './FaIcon'

const Nav = () => {
  return (
    <aside className='menu-area bg-black'>
      <nav className='menu'>
        <a href="#/">
          <FaIcon icon='home' title='Início'/> 
        </a>
        <a href="#/users">
          <FaIcon icon='user' title='Usuário'/> 
        </a>
      </nav>
    </aside>
  )
}

export default Nav