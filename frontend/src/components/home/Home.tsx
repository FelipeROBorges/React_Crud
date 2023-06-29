import React from 'react'
import Main from '../template/Main'

function Home() {
  return (
    <Main icon='home' title='Início' subtitle='Segundo Projeto do capítulo de React.'>
    <div className='text-6xl'>Bem Vindo!</div>
    <hr />
    <p className='md-0'>Sistema para cadastro em react.</p>
  </Main>
  )
}

export default Home