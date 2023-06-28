import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer flex items-center justify-end pr-[25px] bg-white'>
        <span> 
          Desenvolvido com <i className='fa fa-heart text-danger'></i> por
          <strong> Felipe Borges</strong>
        </span>
    </footer>
  )
}

export default Footer