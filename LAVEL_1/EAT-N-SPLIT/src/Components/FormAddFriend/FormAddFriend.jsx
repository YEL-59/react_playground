import React, { useState } from "react";
import Button from "../Shared/Button/Button";

const FormAddFriend = ({onAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  const handelsubmit = (e) => {
    e.preventDefault();
    //console.log(name, image)
    //kind off form validation
    if (!name || !image) {
      // alert('Please fill all the fields')
      return;
    }

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `${image}?=${crypto.randomUUID()}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  };
  return (
    <>
      <form className="form-add-friend" onSubmit={handelsubmit}>
        <label>👫 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🌄 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormAddFriend;
