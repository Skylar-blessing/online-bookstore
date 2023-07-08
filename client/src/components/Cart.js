import React from "react";
import "./Cart.css";
function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  function handleRemoveFromCart(itemId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  }

  function handleSubmitCheckout() {
    setCartItems([]);
  }

  return (
    <div id="cartdiv">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Cost: Ksh.{item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <p>Total Price: Ksh.{totalPrice}</p>
      <button onClick={handleSubmitCheckout}>Checkout</button>
    </div>
  );
}

Cart.defaultProps = {
  cartItems: [],
};

export default Cart;
