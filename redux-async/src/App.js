import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
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
    sendCartData();
  }, [cart, dispatch]);
  
  return (
    <>
      {notification && <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
