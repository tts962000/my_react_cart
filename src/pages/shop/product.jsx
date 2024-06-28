import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../../context/shopContext'
export const Product = (product) => {
    const {id,name,price,productImage}=product.data
    const {addToCart,cartItem}=useContext(ShopContext)
    const cartItemAmount=cartItem[id];
    console.log("The Amount is"+cartItemAmount);
  return (
    <div className='product'>
        <img src={productImage} alt=''/>
        <div className="description">
            <h1><b>{name}
                </b></h1>
                <h3>
                    <b>${price}</b>
                </h3>
        </div>
        <button onClick={()=>addToCart(id)} className="addToCartBttn">
            Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}
