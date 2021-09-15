import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        try{
            const response = await fetch('https://next-js-734e8-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok) {
                throw new Error();
            }
            const data = await response.json();
            dispatch(cartActions.replaceCart(data));
        }
        catch(e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
                }));
        }
    }
}

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