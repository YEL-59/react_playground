import React from 'react'
import '../../assets/css/style.css'
import FriendList from '../DataShowProps/FriendList/FriendList'

const MainApp = () => {
  return (
   <>
   <div className='app'>
    <div className='sidebar'>
    <FriendList></FriendList>

    </div>
   

   </div>
   </>
  )
}

export default MainApp