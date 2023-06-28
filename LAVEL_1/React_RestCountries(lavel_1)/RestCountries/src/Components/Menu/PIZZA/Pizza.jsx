import React from "react";

const Pizza = ({ p_data }) => {
   const{photoName, name, price, soldOut,ingredients}=p_data
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 rounded p-2 m-2">
        <img src={photoName}  className="w-1/2 h-1/2" />
       
        <p className="text-sm">{ingredients}</p>
        <p className="text-xl">${price}</p>
        <p className="text-sm">{soldOut ? "Sold Out" : "Available"}</p>
        <button className="bg-green-500 text-white p-1 rounded">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Pizza;
