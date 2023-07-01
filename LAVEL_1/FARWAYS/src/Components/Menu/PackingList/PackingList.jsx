import React from "react";
import { pizzaData } from "../../DataBase/AllPizza";
import Packing from "./Packing";
const PackingList = ( {items}) => {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((pizza) => {
            return <Packing key={pizza.id} pizza={pizza}></Packing>;
          })}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
