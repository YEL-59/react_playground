import React from "react";
import PriceOption from "../Priceoption/PriceOption";

const Price = () => {
  const pricingOption = [
    {
      id: 0,
      name: "Free",
      price: 0,
      features: [
        "Awesome Free Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use feature",
        "Hudai Feature",
        "Azaira Feature",
      ],
    },
    {
      id: 1,
      name: "Medium",
      price: 9.99,
      features: [
        "medium Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use feature",
        "Hudai Feature",
        "Azaira Feature",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: 19.99,
      features: [
        "premium Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use feature",
        "Hudai Feature",
        "Azaira Feature",
      ],
    },
  ];
  return (
    <div>
      <h2 className="p-5 bg-[#089bab] text-5xl text-white mt-2">
        Best deal in the town
      </h2>
      <div className="grid lg:grid-cols-3 gap-3 mt-4">
        {pricingOption.map((opt) => (
          <PriceOption key={opt.id} opt={opt}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Price;
