import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Product = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <>
      <h1 className=" border-b w-2/4 mx-auto text-center text-slate-800 mt-5 mb-5">
        Showing Data From Api
      </h1>
      <div className="lg:flex gap-5">
        <div><div className="grid lg:grid-cols-3 gap-2 ">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
        <h1>total product is:{products.length}</h1>
      </div></div>
        <div> <div className="rounded-lg shadow-lg bg-white max-w-sm border ">
            
            <div className="p-6">
              <h5 className="text-[#ff9800] text-lg truncate border-b   font-medium mb-2 ">cart</h5>
              
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
             
              <div className="flex gap-3">
                <button
                  type="button"
                  class=" inline-block w-full py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                 add to cart
                </button>
                
              </div>
            </div>
          </div></div>
      </div>
    </>
  );
};

export default Product;
