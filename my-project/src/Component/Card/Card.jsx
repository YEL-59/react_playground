import React from "react";

const Card = (props) => {
  // console.log(props.product)
  const { name, img, price, star, seller, wholePrice, stock,  } = props.product;
 
  return (
    <>
      <div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border">
            <a href="#!">
              <img className="rounded-t-lg mx-auto" src={img}></img>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-sm truncate    font-medium mb-2">{name}</h5>
              <h5>ratting: {star}</h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
              <button
                  type="button"
                  class=" inline-block px-6 mb-2 w-full py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {price}
                </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  class=" inline-block w-48 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {seller}
                </button>
                <button
                  type="button"
                  class=" inline-block px-9 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {wholePrice}
                </button>
                <button
                  type="button"
                  class=" inline-block px-9 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {stock}
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
