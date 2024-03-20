import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const {getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Totel</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />

                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>${getTotalAmount()}</p>
                </div>
            </div>
            <button>PRECEED TO CHECK</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have  promocode, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Promocode" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
