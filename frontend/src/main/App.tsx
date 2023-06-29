import React from 'react'
import './App.css'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
        <div className='app'>
          <Logo/>
          <Nav/>
          <Home/>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App