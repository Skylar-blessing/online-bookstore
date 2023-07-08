import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Cart from "./Cart";

import "./Itemlist.css"

function ItemList({ items, setFilteredItems, handleCategory }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (itemId) => {
    const itemToAdd = items.find((item) => item.id === itemId);
    setCartItems([...cartItems, itemToAdd]);

    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          available_copies: item.available_copies - 1,
        };
      }
      return item;
    });

    setFilteredItems(updatedItems);
  };

  const handleUpdate = (itemId, updatedCopies) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          available_copies: updatedCopies,
        };
      }
      return item;
    });

    setFilteredItems(updatedItems);
  };

  return (
    <div className="item-list-container">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          cover={item.cover}
          inStock={item.available_copies}
          id={item.id}
          number={item.available_copies}
          onAddToCart={handleAddToCart}
          handleUpdate={handleUpdate}
        />
      ))}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ItemList;
