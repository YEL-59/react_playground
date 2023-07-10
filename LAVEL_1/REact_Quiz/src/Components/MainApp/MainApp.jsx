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
   const [selectedFriend, setSelectedFriend] = useState(null)


    const handelShowAddFriends = () => {
        setShowAddFriends((s)=>!s)
    }
    const handelAddFriends = (Friend) => {
        setFriend([...friends, Friend])
        setShowAddFriends(false)

    }
    
    const handelSelectFriend = (id) => {
        const friend = friends.find((friend) => friend.id === id)
        setSelectedFriend(friend)
      // setSelectedFriend((cur)=>cur===friend ? null:friend)
  
    }


  return (
   <>
   <div className='app'>
    <div className='sidebar'>
    <FriendList friends={friend} onSelection={handelSelectFriend} selectedfriend= {selectedFriend } ></FriendList>
   
    {ShowAddFriends && <FormAddFriend onAddFriend={handelAddFriends}></FormAddFriend>}
    <Button onClick={handelShowAddFriends}>{ShowAddFriends ? "Close":" Add Friend"}</Button>
    
    </div>
{ selectedFriend && <FromSplitBill selectedFriend={selectedFriend}></FromSplitBill>}

   </div>
   </>
  )
}

export default MainApp