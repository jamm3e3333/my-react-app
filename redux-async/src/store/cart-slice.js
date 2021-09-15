import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        try{
            dispatch(uiActions.showNotification({
              status: 'pending',
              title: 'sending',
              message: 'sending cart data',
            }))
            const response = await fetch('https://next-js-734e8-default-rtdb.firebaseio.com/cart.json', {
              method: 'PUT',
              body: JSON.stringify(cart)
            });
            if(!response.ok) {
              throw new Error();
            }
            const data = await response.json();
            if(!Object.keys(data)) {
              throw new Error();
            }
            dispatch(uiActions.showNotification({
              status: 'success',
              title: 'Success!',
              message: 'Sent cat data successfully!',
            }));
    
          }
          catch(e) {
            dispatch(uiActions.showNotification({
              status: 'error',
              title: 'Error!',
              message: 'Data was not sent!',
            }));
          }
    }
}

export const cartActions = cartSlice.actions;

export default cartSlice;