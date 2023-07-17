import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating message={["Terrible", "Ok", "Good", "Very Good", "Excellent"]}
     
    />
    {/* <StarRating size={24} color="red" className="test" defaultRating={2} /> */}
    {/* <StarRating maxRating={10} size={24} /> */}


    
   
  </React.StrictMode>
);
