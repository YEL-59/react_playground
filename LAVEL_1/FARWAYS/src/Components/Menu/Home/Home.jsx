import React, { useState } from "react";
import "../../../assets/css/style.css";

const Home = ({ handelonAddItems }) => {
  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(5);
  const [items, setItems] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    if (!description) {
      alert("please add item");
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    handelonAddItems(newItem);
    setQuantity(1);
    setDescription(" ");
  };
  return (
    <>
      <form className="add-form" onSubmit={handelSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."         
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Home;
