import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Menu/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PackingList from "./Components/Menu/PackingList/PackingList";

function App() {
  const [items, setItems]=useState([])
  function handelonAddItems(item){
    setItems((items)=>[...items,item])
  }
  return (
    <div>
      <Header></Header>
      
      <Home handelonAddItems={handelonAddItems}></Home>
      <PackingList items={items}></PackingList>
      <Footer></Footer>
    </div>
  );
}

export default App;
