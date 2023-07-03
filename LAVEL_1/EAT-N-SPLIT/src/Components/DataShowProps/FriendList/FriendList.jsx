import React from "react";
import { friends } from "../../DataBase/AllFriends";
import Friend from "../Friend/Friend";

const FriendList = ({friends ,onSelection,selectedfriend}) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friends.id} onSelection={onSelection}  selectedfriend={selectedfriend}></Friend>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
