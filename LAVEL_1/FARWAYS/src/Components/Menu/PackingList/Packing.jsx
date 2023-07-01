import React from "react";

const Packing = ({ pizza }) => {
  return (
    <>
    <div className="flex">
    <span style={pizza.packed ? {textDecoration:"line-through"}:{}}>
        
        {pizza.quantity} {pizza.description}
      
    </span>

    <button>X</button>
    </div>
      
    </>
  );
};

export default Packing;
