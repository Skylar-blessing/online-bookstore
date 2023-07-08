import React, { useState } from "react";
import "./Search.css";

function Search({ onSearchChange }) {
  const [formValue, setFormValue] = useState("");
  console.log(formValue)

  function handleSearchChange(e) {
    const searchValue = e.target.value;
    setFormValue(searchValue);
    onSearchChange(searchValue);
  }

  return (
    <div>
      <form
        id="search-form"
        style={{ border: "1.5px solid #ccc", padding: "4px" }}
      >
        <input
          onChange={handleSearchChange}
          type="search"
          placeholder="Search by Title"
        />
      </form>
    </div>
  );
}

export default Search;
