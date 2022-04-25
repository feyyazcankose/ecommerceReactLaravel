import React from 'react'
import CartItem from './CartItem'
import Coupon from './Coupon'
import Total from './Total'

const Cart = () => {
  return (
          <div class="shopping-cart section">
            <div class="container">
              <div class="cart-list-head">
                <div class="cart-list-title">
                  <div class="row">
                    <div class="col-lg-1 col-md-1 col-12">

                    </div>
                    <div class="col-lg-4 col-md-3 col-12">
                      <p>Product Name</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12">
                      <p>Quantity</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12">
                      <p>Subtotal</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12">
                      <p>Discount</p>
                    </div>
                    <div class="col-lg-1 col-md-2 col-12">
                      <p>Remove</p>
                    </div>
                  </div>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
              </div>


              <div class="row">
                <div class="col-12">
                  <div class="total-amount">
                    <div class="row">
                      <div class="col-lg-8 col-md-6 col-12">
                        <Coupon/>
                      </div>

                      <div class="col-lg-4 col-md-6 col-12">
                        <Total/>
                      </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        )
}

        export default Cart