import React, { useState } from 'react'
import { createContext } from 'react'

import {PRODUCTS} from '../products'
export const ShopContext=createContext(null);
// {
//     1:2  cartId:1 cartAmount:2
//     2:0
//     3:1
//     4:5
// }
const getDefaultCart=()=>{
    let cart={};
    for (let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
        //1:0 2:0 3:0 .....
    }
    return cart;

}//inital cart status=cart id:1 cartcount:0
export const ShopContextProvider = (props) => {
    const[cartItem,setCartItem]=useState(getDefaultCart()); //cartFunction
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
                console.log("Item is"+item);
                totalAmount+=cartItem[item]*itemInfo.price;
            }
        }
        return totalAmount;
    }
    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const reduceCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateCartAmount=(newAmount,itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:newAmount}));
    }
    console.log(cartItem);
    
    // console.log(PRODUCTS);
    return (
    <ShopContext.Provider value={{cartItem,addToCart,reduceCart,updateCartAmount,getTotalCartAmount}}>{props.children}</ShopContext.Provider>
  )
}
