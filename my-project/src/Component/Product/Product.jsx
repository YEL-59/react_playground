import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Product = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  let total=0
  for(const product of cart){
    total=total+product.price

  }

  let shipingCost=0
  for( const product of cart){
    shipingCost=shipingCost+product.shipping
  }


  let grandTotal=total+shipingCost



  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  const handleAddtoCart = (product) => {
    //console.log('clicked')
    console.log(product);
    //cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <>
      <h1 className=" border-b w-2/4 mx-auto text-center text-slate-800 mt-5 mb-5">
        Showing Data From Api
      </h1>
      <div className="lg:flex gap-5">
        <div>
          <div className="grid lg:grid-cols-3 gap-2  w-4/4">
            {products.map((product) => (
              <Card
                key={product.id}
                handleAddtoCart={handleAddtoCart}
                product={product}
              ></Card>
            ))}
            <h1>total product is:{products.length}</h1>
          </div>
        </div>
        <div>
          {" "}
          <div className="rounded-lg shadow-lg bg-white border   w-4/4 ">
            <div className="p-6">
              <h5 className="text-[#ff9800] text-2xl truncate border-b   font-medium mb-2 ">
                cart
              </h5>

              <div className="selected_item border rounded p-1">
                <p className="text-blue-600 font-medium">Selected Item :<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">{cart.length}</span></p>
                <p className="text-blue-600 font-medium">Total Price :<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">${total}</span></p>
                <p className="text-blue-600 font-medium">Total Shipping :<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">{cart.length}</span></p>
                <p className="text-blue-600 font-medium">tax:<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">{cart.length}</span></p>
                <p className="text-blue-600 font-medium">Grand Total :<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">{grandTotal}</span></p>
                <p className="text-blue-600 font-medium">Shipping Cost :<span className=" text-[#089bab] font-bold p-1 shadow-2xl ">{shipingCost}</span></p>
              </div>

              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  class=" inline-block w-full py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  add to
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
