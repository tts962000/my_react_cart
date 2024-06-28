import React, { useContext } from 'react'
import {ShopContext} from '../../context/shopContext'
export const CartItem = (props) => {
    const {id,name,productImage,price}=props.data
    const {cartItem,reduceCart,addToCart,updateCartAmount}=useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt=''/>
        <div className="description">
            <p>
                <b>{name}</b>
            </p>
            <p>
                <b>Price: ${price}</b>
            </p>
            <div className="countHandler">
                    <button onClick={()=>reduceCart(id)}>-</button>
                    <input value={cartItem[id]} onChange={(e)=>updateCartAmount(Number(e.target.value),id)} />
                    <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
