import React from 'react'
import './Nav.css'
import FaIcon from './FaIcon'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <aside className='menu-area bg-black'>
      <nav className='menu'>
        <Link to="/">
          <FaIcon icon='home' title='Início'/> 
        </Link>
        <Link to="/users">
          <FaIcon icon='user' title='Usuário'/> 
        </Link>
      </nav>
    </aside>
  )
}

export default Nav