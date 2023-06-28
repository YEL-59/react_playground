import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Components/Countries/Countries'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Pizzas from './Components/Menu/PiZZAS/Pizzas'

function App() {
 

  return (
    <div>
      
      <Header></Header>
     
<Pizzas></Pizzas>
     
     <Footer></Footer>
            {/* <Countries></Countries> */}
    </div>
  )
}

export default App
