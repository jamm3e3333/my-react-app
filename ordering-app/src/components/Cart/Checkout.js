import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    })

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = e => {
        e.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value;
        const enteredCity = cityRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = !isFiveChars(enteredPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid,
        })
        const formIsValid = 
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid;

        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });
    };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!formInputValidity.name ? classes.invalid : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.street ? classes.invalid : ''}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.postal ? classes.invalid : ''}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalRef} type='text' id='postal' />
        {!formInputValidity.postal && <p>Please enter a valid postal</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.city ? classes.invalid : ''}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;