import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CartItems.css';
import remove from '../assets/cart/removeCart.png'
import add from '../assets/cart/addCart.png'

function CartItems() {
    const { getTotalCartAmount, alldata, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Add</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {alldata.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return(
                        <div className="">
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='main-img' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <img src={add} onClick={()=>{addToCart(e.id)}} alt="" className='changevalue'/>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" className='changevalue'/>
                    
                </div>
                <hr />
            </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="subtotal">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="subtotal">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <hr />
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promo">
                <p>Have a promocode? Apply Now</p>
                <div className="promobox">
                <input type="text" placeholder='promo code' />
                <button>Apply</button>
                </div>
            </div>
            </div>
            
           
        </div>
    );
}

export default CartItems;
