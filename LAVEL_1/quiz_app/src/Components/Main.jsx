import React from 'react'
import '../assect/style.css'

const Main = ({children}) => {
  return (
    <>
    <main className='main'>
{children}
    </main>
    </>
  )
}

export default Main