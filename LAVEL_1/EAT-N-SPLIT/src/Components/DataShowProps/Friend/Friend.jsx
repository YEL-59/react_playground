import React from "react";
import Button from "../../Shared/Button/Button";

const Friend = ({ friend,onSelection,selectedfriend }) => {
   const isSelected = selectedfriend && selectedfriend?.id === friend.id
  return (
    <>
      <li className={ isSelected ? "selected":"" }> 
        {" "}
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}€
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={()=>onSelection(friend.id)}>{isSelected ? 'Close':'Selected'}</Button>
      {/* <Button onClick={()=>onSelection(friend.id)}>{selectedfriend && selectedfriend.id === friend.id ? 'close': 'select'}</Button> */}
      </li>
    </>
  );
};

export default Friend;
