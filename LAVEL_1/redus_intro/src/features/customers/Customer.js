import { useSelector } from "react-redux";

function Customer() { 
  //use useselector hook read the state from the store 
 const customer = useSelector((store) => store.customer.fullName);
//console.log(customer)

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
