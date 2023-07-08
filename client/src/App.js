import React, {useEffect, useState} from 'react';
// import "./App.css";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import Category from './components/Category';
// import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Search from "./components/Search";
function App() {
  const [filteredItems, setFilteredItems] = useState([]);


  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  function handleSearchChange(query) {
    setSearchQuery(query);
  }
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((response) => response.json())
      .then((data) => setFilteredItems(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCategory = (e) => {
    e.preventDefault();
    const selectedCategory = e.target.value;
    const filtered = filteredItems.filter(
      (item) => item.category === selectedCategory
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/books?description_like=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  }, [searchQuery]);



  return (
    <div className="App">
      {/* <Nav />
      <Routes>
        <Route path="/home" element={<ItemList />} />
        <Route path="/category" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
      <Nav /> 
      <Search onSearchChange={handleSearchChange} />
      <Category filter={handleCategory} />
      <ItemList result={searchResults}category={setFilteredItems}/>
      <Cart />
      
    </div>
  );
}
export default App