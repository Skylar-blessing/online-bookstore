import "./App.css";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
// import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Routes>
        <Route path="/home" element={<ItemList />} />
        <Route path="/category" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
      <Nav /> 
      <Search />
      <ItemList />
      <Cart />
    </div>
  );
}
export default App