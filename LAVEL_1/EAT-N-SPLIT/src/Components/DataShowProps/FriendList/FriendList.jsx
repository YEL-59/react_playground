import React from "react";
import { friends } from "../../DataBase/AllFriends";
import Friend from "../Friend/Friend";

const FriendList = ({friends}) => {
  return (
    <>
      <ul>
        {friends.map((friend,id) => (
          <Friend friend={friend} key={id} ></Friend>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
