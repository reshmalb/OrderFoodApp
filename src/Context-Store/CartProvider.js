
import React,{useReducer} from "react";
import CartContext from "./CartContext";


const defaultCartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
  
if(action.type==='ADD_CART_ITEM'){

 console.log("in action price ",action.actionItem.price)
     const newTotalAmount=state.totalAmount+
                      (action.actionItem.price)*(action.actionItem.amount) ; 
       console.log("newAmount",newTotalAmount)
      const  existingCartItemIndex=state.items.findIndex((item)=>
                     item.id===action.actionItem.id);
console.log("exindexx",existingCartItemIndex);
       const   existingCartItem=state.items[existingCartItemIndex];
        
        console.log("existingcartItem",existingCartItem)
        let updatedItems;
        
        if(existingCartItem){
            
            const  updatedItem={...existingCartItem,
                               amount:existingCartItem.amount+action.actionItem.amount
                             };
            updatedItems=[...state.items]                   
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
             updatedItems=state.items.concat(action.actionItem);
        }

        return { items:updatedItems,
        totalAmount:newTotalAmount}
    }
    if(action.type==='REMOVE_CART_ITEM'){
       

        const existingCartItemIndex=state.items.findIndex((item)=>
          item.id===action.actionId);

        const existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalMount=state.totalAmount-existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems=state.items.filter(item=> item.id != action.actionId);
        }
        else{
            const updatedItem={...existingCartItem,
                                amount:existingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalMount
        }

    }
    return defaultCartState;
}

const CartProvider=props=>{
   const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)

        const addItemToCartHandler=(item)=>{
            console.log("addItemToCartHandler",item.price)
            dispatchCartAction({type:'ADD_CART_ITEM',actionItem:item})

        }
        const removeItemFromCartHandler=(id)=>{
            dispatchCartAction({type:'REMOVE_CART_ITEM',actionId:id})

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

