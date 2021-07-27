import React, { Fragment } from 'react';

const MealsItem = props => {
    return (
        <Fragment className={props.className}>
            {props.children}
        </Fragment>
    )
}

export default MealsItem;