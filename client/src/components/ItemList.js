// import React, { useState, useEffect } from 'react';

// function ItemList() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/books');
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//   <div>
//     {items.map((item) => (
//       <div key={item.id}>{item.cover}</div>
//     ))}
//   </div>
// );

// }

// export default ItemList;


import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Cart from "./Cart";

function ItemList() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/books');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  function handleAddToCart(itemId) {
    const itemToAdd = items.find((item) => item.id === itemId);
    setCartItems([...cartItems, itemToAdd]);
  }
  function handleItemAdded(item) {
    setItems([...items, item]);
  }
  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          cover={item.cover}
          inStock={item.available_copies}
          id={item.id}
          number={item.inStock}
          onAddToCart={handleAddToCart}
        />
      ))}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      
    </div>
  );
}
export default ItemList;