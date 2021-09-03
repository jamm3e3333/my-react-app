import React, { useContext } from 'react';

import Checkout from './Checkout';
import { useState } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData) => {
        try {
            setIsSubmitting(true);
            setIsError(false);

            const response = await fetch('https://next-js-734e8-default-rtdb.firebaseio.com/meals_users.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items
                })
            })
            if(!response.ok) {
                throw new Error();
            }
            
            const data = await response.json();
            if(!data) {
                throw new Error();
            }
            setIsSubmitting(false);
            setDidSubmit(true);
            cartCtx.clearCart();
        }
        catch(e) {
            setIsError(true);
        }
    };

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }
    const cartItems = (
                    <ul className={classes['cart-items']}>
                        {cartCtx.items.map((item) => (
                                    <CartItem 
                                        key={item.id}
                                        name={item.name}
                                        amount={item.amount}
                                        price={item.price}
                                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                        onAdd={cartItemAddHandler.bind(null, item)}
                                    />
                                ))}     
                    </ul>);

    const cartModalContent = (
        <>
            {cartItems}
            <div className={classes.total}>
                <span>totalAmount</span>
                <span>{totalAmount}</span>
            </div>
            {(isCheckout && !isError)&& <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}

            {(!isCheckout && !isError) &&
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>
                    Close
                </button>
                {cartCtx.items.length > 0 && 
                    <button onClick={orderHandler} className={classes.button}>
                        Order
                    </button>
                }
            </div>}
        </>
    )

    const isSubmittingContent =  <p>Sending order data...</p>
    const didSubmitContent = (
        <>
            <p>Succesfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    ) 
    return (
        <Modal onClose={props.onClose}>
            {(!isSubmitting && !didSubmit && !isError) && cartModalContent}
            {(isSubmitting && !didSubmit && !isError) && isSubmittingContent}
            {(didSubmit && !isSubmitting && !isError) && didSubmitContent}
            {isError && <p className={classes['cart__error']}>Error while ordering the food!</p>}
        </Modal>
    )
}

export default Cart;