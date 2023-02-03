import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Price from "./Component/Priceing/Price";
import Chart from "./Component/Chart/chart";
import Product from "./Component/Product/Product";
import Phonebar from "./Component/Phonebar/Phonebar";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
//import TryVideo from './Component/TryVideo';
function App() {
  const router= createBrowserRouter([
    {
      path:'/',element:<div>
        this is ok page
      </div>
    },
    {
      path: '/home' ,element:<div>Home PAge</div>
    },
    {
      path: 'about' ,element:<div>Home2 PAge</div>
    }
    
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
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
