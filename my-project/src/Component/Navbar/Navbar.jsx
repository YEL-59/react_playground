import React from 'react'
import Link from '../Link/Link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'


import { useState } from 'react'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const routes =[
    {id:1,name:'Home',path:'/home'},
    {id:2,name:'Products',path:'/products'},
    {id:3,name:'orders',path:'/orders'},
    {id:4,name:'Contacts',path:'/contacts'},
    {id:5,name:'About',path:'/about'},
  ]
  return (
    <div>
      <nav className='bg-purple-200 w-full'>
        <div onClick={()=>setOpen(!open)} className='h-6 w-6 md:hidden'>
          {

            open?<XMarkIcon/>:<Bars3Icon/>

          }
        </div>
        {/* {
          open ?<XMarkIcon onClick={()=>setOpen(!open)} className='h-6 w-6 text-blue-500'/> : <Bars3Icon onClick={()=>setOpen(!open)} className='h-6 w-6 text-blue-500'/>
        } */}
        
        {/* <span>{open?'open':'close'}</span> */}
        <ul className={` bg-purple-200 w-full md:flex justify-center gap-5  absolute md:static duration-500 ease-in ${open ? 'top-4':'top-[-120px]'}`}>
          {
            routes.map(route=><Link key={route.id} route={route}></Link>)
          }

        </ul>
      </nav>
    </div>
  )
}

export default Navbar