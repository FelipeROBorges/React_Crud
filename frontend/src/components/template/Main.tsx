import React from 'react'
import './Main.css'
import Header from './Header'

const Main = (props: any) => {
  return (
    <>
        <Header {...props}/>
        <main className='content'>
            Conteúdo
        </main>
    </>
  )
}

export default Main