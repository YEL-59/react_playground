import React from "react";
import { initialFriends } from "../../DataBase/AllFriends";
import Friend from "../Friend/Friend";

const FriendList = () => {
  return (
    <>
      <ul>
        {initialFriends.map((friend,id) => (
          <Friend friend={friend} key={id} ></Friend>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
