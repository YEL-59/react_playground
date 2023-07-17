import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";


import {  useSelector } from "react-redux";



function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  console.log(fullName)
  return (
    <div>
   
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            {" "}
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
    
    </div>
  );
}
//kjkj
export default App;
