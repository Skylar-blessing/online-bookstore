import React, { useState, useEffect } from "react";
import "./Itemcard.css";

function ItemCard({
  id,
  title,
  description,
  cover,
  price,
  inStock,
  onAddToCart,
  handleUpdate,
}) {
  const [number, setNumber] = useState(inStock);
  const [updatedItem, setUpdatedItem] = useState(null);
  const [deleted, setDeleted] = useState(false);
  console.log(setUpdatedItem)

  function handleAddToCart() {
    if (number > 0) {
      setNumber((number) => number - 1);
      onAddToCart(id);
      handleUpdate(id, number - 1);
    }
  }

  useEffect(() => {
    if (updatedItem) {
      setNumber(updatedItem.available_copies);
    }
  }, [updatedItem]);

  useEffect(() => {
    setDeleted(false);
  }, [number]);

  if (deleted) {
    return null;
  }

  return (
    <div id="itemcard">
      <div className="item-image">
        <img src={cover} alt={title} />
      </div>
      <h3 id="nameitem">{title}</h3>
      <p id="dp">{description}</p>
      <p>price: {price}</p>
      <p>Items available: {number}</p>
      <button className="buttonItem" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <br />
      <br />
    </div>
  );
}

export default ItemCard;
