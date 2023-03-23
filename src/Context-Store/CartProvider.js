
import React,{useReducer} from "react";
import CartContext from "./CartContext";


const defaultCartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
    if(action.type==='ADD_CART_ITEM'){
        const updatedItems=state.items.concat(action.items);
        const newTotalAmount=state.totalAmount+
                      (action.items.price)*(action.items.amount) 
        return { items:updatedItems,
        totalAmount:newTotalAmount}

    }
    return defaultCartState;
}

const CartProvider=props=>{
   const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)

        const addItemToCartHandler=(item)=>{
            dispatchCartAction({type:'ADD_CART_ITEM',items:item})

        }
        const removeItemFromCartHandler=(id)=>{
            dispatchCartAction({type:'REMOVE_CART_ITEM'})

            }
        const cartContext={
                            items:cartState.items,
                            totalAmount:cartState.totalAmount,
                            addItem:addItemToCartHandler,
                            removeItem:removeItemFromCartHandler
                        };    


             return(<CartContext.Provider value={cartContext}>
                 {props.children}
                </CartContext.Provider>);
};

export default CartProvider;

