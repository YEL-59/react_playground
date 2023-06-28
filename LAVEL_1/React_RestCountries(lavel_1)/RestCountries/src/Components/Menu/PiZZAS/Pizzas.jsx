import React from "react";
import { pizzaData } from "../../DataBase/AllPizza";
import Pizza from "../PIZZA/Pizza";

const Pizzas = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {pizzaData.map((p_data, i) => (
          <Pizza key={i}  p_data={p_data}></Pizza>
        ))}
      </div>
    </>
  );
};

export default Pizzas;
