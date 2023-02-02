import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Price from "./Component/Priceing/Price";
import Chart from "./Component/Chart/chart";
import Product from "./Component/Product/Product";
import Phonebar from "./Component/Phonebar/Phonebar";

//import TryVideo from './Component/TryVideo';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Product></Product>
      <Price></Price>
      <Chart></Chart>
<Phonebar></Phonebar>
      {/* <TryVideo/> */}
    </>
  );
}

export default App;
