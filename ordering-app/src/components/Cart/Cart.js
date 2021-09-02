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
    const orderHandler = () => {
        setIsCheckout(true);
    }

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
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>totalAmount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}

            {!isCheckout &&
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
        </Modal>
    )
}

export default Cart;