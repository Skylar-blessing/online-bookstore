import React, { useEffect, useState } from "react";
import "./Category.css"

function Category({ handleCategory, handleAddToCart }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <form
        id="category-form"
        onSubmit={handleCategory}
        style={{
          border: "1.5px solid #ccc",
          padding: "5px",
          height: "100px",
        }}
      >
        <label htmlFor="category">Choose a category:</label>
        <select name="category" id="category" onChange={handleCategory}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name} onClick={() => handleAddToCart(category.id)}>
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Category;
