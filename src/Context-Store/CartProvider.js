
import React,{useReducer} from "react";
import CartContext from "./CartContext";


const defaultCartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
    if(action.type==='ADD_CART_ITEM'){
        
        const newTotalAmount=state.totalAmount+
                      (action.items.price)*(action.items.amount) ;
     const existingCartItemIndex=state.items.findIndex((item)=>
          item.id===action.items.id);
        const existingCartItem=state.items[existingCartItemIndex];
        
        let updatedItems;
        if(existingCartItem){
            const updatedItem={...existingCartItem,
                               amount:existingCartItem.amount+action.items.amount
                             };
            updatedItems=[...state.items]                   
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
             updatedItems=state.items.concat(action.items);
        }

        return { items:updatedItems,
        totalAmount:newTotalAmount}
    }
    if(action.type==='REMOVE_CART_ITEM'){
        const newTotalAmount=state.totalAmount+
        (action.items.price)*(action.items.amount) ;

        const existingCartItemIndex=state.items.findIndex((item)=>
          item.id===action.items.id);

        const existingCartItem=state.items[existingCartItemIndex];

        const upddatedTotalMount=state.totalAmount-existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount===1){
            updatedItems=state.items.filter(item=> item.id===action.id);
        }
        else{
            const updatedItem={...existingCartItem,
                                amount:existingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
            return{
                items:updatedItems,
                totalAmount:upddatedTotalMount
            }
        }

    }
    return defaultCartState;
}

const CartProvider=props=>{
   const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)

        const addItemToCartHandler=(item)=>{
            dispatchCartAction({type:'ADD_CART_ITEM',items:item})

        }
        const removeItemFromCartHandler=(id)=>{
            dispatchCartAction({type:'REMOVE_CART_ITEM',id:id})

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

