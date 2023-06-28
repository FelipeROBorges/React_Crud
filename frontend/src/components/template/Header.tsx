import React from 'react'
import './Header.css'
import FaIcon from './FaIcon'

const Header = (props: any) => {
  return (
    <header className='header hidden sm:flex flex-col'>
        <h1 className='mt-3 text-3xl'>
          <FaIcon icon={props.icon} title={props.title}/>
        </h1>
        <p className='text-base leading-6 text-gray-500'>{props.subtitle}</p>
    </header>
  )
}

export default Header