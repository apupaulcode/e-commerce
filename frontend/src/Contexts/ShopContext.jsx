import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';
export const ShopContext = createContext();
const getDefaulCart=()=>{
    let cart = {};
    for(let index=0;index<all_product.length;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=({children})=>{
    const [cartItems,setCartItems]=useState(getDefaulCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmount=()=>{
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item]
            }
        }
        return totalItems;
    }
    const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalAmount,getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;