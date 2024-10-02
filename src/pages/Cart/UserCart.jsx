import "./Cart.css";
import React from "react";
import { useSelector } from "react-redux";
import { ImCancelCircle } from "react-icons/im";

const UserCart = () => {
  let subTotal = 0;
  let shipping = 0;
  let discount = 0;
  let tax = 0;

  const cartProducts = useSelector((state) => state?.cartItems);
  console.log(cartProducts);

  return (
    <>
      <div className="cart-container">
        <div className="cart-nain">
          <h3>Shopping Cart</h3>
          <div className="table-wrapper">
            <table border="1" className="table-container">
              <thead>
                <tr>
                  <th className="table-heading">
                    <p>Action</p>
                  </th>
                  <th className="table-heading">
                    <p>Products</p>
                  </th>
                  <th className="table-heading">
                    <p>Price</p>
                  </th>
                  <th className="table-heading">
                    <p>Quantity</p>
                  </th>
                  <th className="table-heading">
                    <p>Sub-Total</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts?.length > 0 ? (
                  cartProducts?.map((products, ind) => {
                    const price = Number(products?.price) || 0;
                    const discountPercentage =
                      Number(products?.discountPercentage) || 0;
                    const qty = Number(products?.qty) || 0;
                    const discountedPrice =
                      price - price * (discountPercentage / 100);
                    const productSubtotal = discountedPrice * qty;
                    subTotal += productSubtotal;
                    discount +=
                      discountPercentage > 0
                        ? price * (discountPercentage / 100) * qty
                        : 0;

                    tax = subTotal * 0.1;

                    return (
                      <tr className="table-rows" key={ind}>
                        <td className="table-body">
                          <span>
                            <ImCancelCircle />
                          </span>
                        </td>
                        <td className="table-body">
                          <div className="cell-one">
                            <img src={products?.thumbnail} alt="product" />
                            <p>{products?.title}</p>
                          </div>
                        </td>
                        <td className="table-body">${price?.toFixed(2)}</td>
                        <td className="table-body">{qty}</td>
                        <td className="table-body">
                          ${productSubtotal?.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="table-body"
                      style={{ textAlign: "center" }}
                    >
                      No Product in Your Cart
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="cart-buttons">
            <button className="return-to-shop">Return To Shop</button>
            <button className="update-cart">Update Cart</button>
          </div>
        </div>
        <div className="cart-payment">
          <h3>Cart Total</h3>
          <div className="payment-card">
            <div className="payment-price">
              <p>
                Sub-total
                <span>${subTotal?.toFixed(2)}</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Shipping
                <span>${(shipping = 0.25 * subTotal)?.toFixed(2)}</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Discount
                <span>${discount?.toFixed(2)}</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Tax
                <span>${tax?.toFixed(2)}</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Total
                <span>
                  ${(subTotal + shipping - discount + tax)?.toFixed(2)}
                </span>
              </p>
              <button className="payout-btn">
                {" "}
                <a href="./checkout">Proceed to Checkout</a>
              </button>
            </div>
          </div>
          <div className="coupon-card">
            <h3>Coupon Code</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Coupon"
              required
            />
            <button>Apply Coupon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
