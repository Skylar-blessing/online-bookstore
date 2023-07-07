import React, { useState, useEffect } from "react";
// import "./ItemCard.css";

function ItemCard({ id, title, description, cover, price, inStock, onAddToCart }) {
  const [number, setNumber] = useState(inStock);
  const [updatedItem, setUpdatedItem] = useState(null);
  const [deleted, setDeleted] = useState(false);
  
  function handleUpdate() {
    if (number > 0) {
      fetch(`http://localhost:5000/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inStock: number - 1,
        }),
      })
        .then((res) => res.json())
        .then((item) => {
          setUpdatedItem(item);
          setNumber((number) => number - 1);
        })
        .catch((error) => console.error("Error updating item", error));
    }
  }
  function handleAddToCart() {
    if (number > 0) {
      setNumber((number) => number);
      onAddToCart(id);
    }
    handleUpdate();
  }
  useEffect(() => {
    if (updatedItem) {
      setNumber(updatedItem.inStock);
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
      <img className="imageitem" src={cover} alt={title} />
      <h3 id="nameitem">{title}</h3>
      <p id="dp">{description}</p>
      <p>price:{price}</p>
      <p>Items available: {number}</p>
      <button className="buttonItem" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
export default ItemCard;