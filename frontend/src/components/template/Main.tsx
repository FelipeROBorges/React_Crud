import React from 'react'
import './Main.css'
import Header from './Header'

const Main = (props: any) => {
  return (
    <>
        <Header {...props}/>
        <main className='content container mx-auto'>
            <div className='p-3 mt-3'>
              {props.children}
            </div>
        </main>
    </>
  )
}

export default Main