import "./Cart.css";
import React from "react";
import { ImCancelCircle } from "react-icons/im";

const UserCart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-nain">
          <h3>Shopping Cart</h3>
          <div className="table-wrapper">
            <table border="1" className="table-container">
              <thead>
                <tr>
                  <th className="table-heading">Action</th>
                  <th className="table-heading">Products</th>
                  <th className="table-heading">Price</th>
                  <th className="table-heading">Quantity</th>
                  <th className="table-heading">Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>4K UHD LED Smart TV with Chromecast Built-in</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>

                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>Title</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>

                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>Title</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>

                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>Title</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>

                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>Title</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>

                <tr className="table-rows">
                  <td className="table-body">
                    <span>
                      <ImCancelCircle />
                    </span>
                  </td>
                  <td className="table-body">
                    <div className="cell-one">
                      <img src="./watch.png" alt="product" />
                      <p>Title</p>
                    </div>
                  </td>
                  <td className="table-body">299</td>
                  <td className="table-body">88</td>
                  <td className="table-body">88</td>
                </tr>
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
                <span>$56USD</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Shipping
                <span>$56USD</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Discount
                <span>$56USD</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Tax
                <span>$56USD</span>
              </p>
            </div>
            <div className="payment-price">
              <p>
                Total
                <span>$56USD</span>
              </p>
              <button>Proceed to Checkout</button>
            </div>
          </div>
          <div className="coupon-card">
            <h3>Coupon Code</h3>
            <input
              type="emial"
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
