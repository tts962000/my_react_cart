import React, { useContext } from 'react'
import {ShopContext} from '../../context/shopContext'
import { PRODUCTS } from '../../products'
import {CartItem} from './cartItem'
import { useNavigate } from 'react-router-dom'
import './cart.css'
export const Cart = () => {
  const {cartItem,getTotalCartAmount}=useContext(ShopContext)
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div className="cart-items">
          {PRODUCTS.map((product)=>{
            if(cartItem[product.id]!==0){
              return <CartItem data={product}/>
            }
          })}
      </div>
      {totalAmount>0?
     (<div className="checkout">
      <p>SubTotal: {totalAmount}Kyats</p>
      <button onClick={()=>navigate("/")}>Continue Shopping</button>
      <button>Check Out</button>
    </div>) :(
      <h1>Your Cart is Empty!</h1>
    )}
    </div>
    
  )
}
