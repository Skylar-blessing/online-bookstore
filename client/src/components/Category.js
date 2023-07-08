import React from "react";

function Category({handleCategory}) {


  return (
    <div>
      <form
        id="category-form"
        onSubmit={handleCategory}
        style={{ border: "1.5px solid #ccc", padding: "5px", height: "100px" }}
      >
        <label htmlFor="category">Choose a category:</label>

        <select name="category" id="category" onChange={handleCategory}>
          <option value="">All</option>
          <option value="adventure">Adventure</option>
          <option value="romance">Romance</option>
          <option value="scifi">SciFi</option>
          <option value="biography">Biography</option>
        </select>
      </form>
    </div>
  );
}

export default Category;
