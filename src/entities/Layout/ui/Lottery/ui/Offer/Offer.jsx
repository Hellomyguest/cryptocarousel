import classNames from 'classnames';
import React from 'react';
import classes  from './Offer.module.css';



const Offer = ({children, className}) => {
  return (
    <div>
      <button className={classNames(classes.Offer, className)}>
        {children}
      </button>
    </div>
  );
}

export default Offer;

