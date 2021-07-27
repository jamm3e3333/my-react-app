import React, { Fragment } from 'react';
import classes from './Header.module.css';
import Meals from '../../assets/meals.jpeg';

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt="table full of food" />
            </div>
        </Fragment>
    )
};

export default Header;