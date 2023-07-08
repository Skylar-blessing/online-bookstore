import React, { useEffect, useState } from 'react';
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import Category from './components/Category';
import Cart from "./components/Cart";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = (query) => {
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "") {
      setFilteredItems(items);
    } else {
      const filteredItems = items.filter(item =>
        item.category === selectedCategory
      );
      setFilteredItems(filteredItems);
    }
  };

  return (
    <div className="App">
      <Nav />
      <Search onSearchChange={handleSearchChange} />
      
      <ItemList items={filteredItems} setFilteredItems={setFilteredItems} handleCategory={handleCategory} />

      <Cart />
    </div>
  );
}

export default App;
