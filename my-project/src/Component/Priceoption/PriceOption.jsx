import React from "react";
import Fature from "../Feature/Fature";

const PriceOption = ({ opt }) => {
  const { features } = opt;
  return (
    <div>
      <div className="bg-[#089bab] m-3 p-2 rounded">
        <div>
          <h3>
            <span className="font-bold text-6xl text-white">{opt.price}</span>
            <span className="text-2xl text-gray-200">/mon</span>
          </h3>
          <p className="text-3xl text-center my-4">{opt.name}</p>
        </div>
        {features.map((fet, idx) => (
          <Fature key={idx} fet={fet}></Fature>
        ))}
        <button className="bg-green-500 w-full p-2 mt-4 rounded py-2 text-white font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
