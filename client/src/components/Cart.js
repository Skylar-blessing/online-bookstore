import React from "react";
// import "./Cart.css";
function Cart({ cartItems, setCartItems }) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
 function handleRemCart(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
}
 function handleSubmitCheckOut() {
    setCartItems([]);
  }
  return (
    <div id="cartdiv">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Cost: Ksh.{item.price}</p>
          <button onClick={() => handleRemCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <p>Total Price: Ksh.{totalPrice}</p>
      <button onClick={handleSubmitCheckOut}>Checkout</button>
    </div>
  );
}

Cart.defaultProps = {
  cartItems: [], // Initialize cartItems with an empty array as default value
};

export default Cart;






