import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <NavLink
          className="navwords"
          to="/home"
          exact
          activeStyle={{
            background: "Black",
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="navwords"
          to="/books"
          exact
          activeStyle={{
            background: "Black",
          }}
        >
          Books
        </NavLink>
        <NavLink
          className="navwords"
          to="/cart"
          exact
          activeStyle={{
            background: "Black",
            marginRight: "800px",
          }}
        >
          Cart
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
