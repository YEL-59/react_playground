import React from "react";
import Button from "../Shared/Button/Button";

const FromSplitBill = ({selectedFriend}) => {

  return (
    <>
      <form className="form-split-bill">
     


        <h2 >Split a bill with <span>  {selectedFriend.name}</span>  </h2>

        <label>💰 Bill value</label>
        <input type="text" />

        <label>🧍‍♀️ Your expense</label>
        <input type="text" />

        <label>👫{selectedFriend.name} 's expense</label>
        <input type="text" disabled   />

        <label>🤑 Who is paying the bill</label>
        <select >
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </>
  );
};

export default FromSplitBill;
