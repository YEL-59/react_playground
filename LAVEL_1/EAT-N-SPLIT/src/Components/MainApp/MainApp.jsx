import React, { useState } from 'react'
import '../../assets/css/style.css'
import FriendList from '../DataShowProps/FriendList/FriendList'
import FormAddFriend from '../FormAddFriend/FormAddFriend'
import Button from '../Shared/Button/Button'
import FromSplitBill from '../FormSplitBill/FromSplitBill'
import { friends } from "../DataBase/AllFriends";

const MainApp = () => {
    const [ShowAddFriends, setShowAddFriends] = useState(true)
   const [friend, setFriend] = useState(friends)


    const handelShowAddFriends = () => {
        setShowAddFriends((s)=>!s)
    }
    const handelAddFriends = (newFriend) => {
        setFriend([...friends, newFriend])
        setShowAddFriends(false)

    }
    


  return (
   <>
   <div className='app'>
    <div className='sidebar'>
    <FriendList friends={friend}  ></FriendList>
   
    {ShowAddFriends && <FormAddFriend onAddFriend={handelAddFriends}></FormAddFriend>}
    <Button onClick={handelShowAddFriends}>{ShowAddFriends ? "Close":" Add Friend"}</Button>
    
    </div>
    <FromSplitBill></FromSplitBill>

   </div>
   </>
  )
}

export default MainApp