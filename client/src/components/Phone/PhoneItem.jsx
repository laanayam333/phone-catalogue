import React from 'react';

import './PhoneItem.scss';

const PhoneItem = ({ name, imageURL }) => {
  return (
    <div className="phone">
      <div className="phone__content">
        <h1 className="phone__content__title">{name}</h1>
      </div>
      <div className="phone__image">
        <img src={imageURL} alt={name} />
      </div>
    </div>
  );
};

export default PhoneItem;
