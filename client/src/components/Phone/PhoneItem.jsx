import React from 'react';

import './PhoneItem.scss';

const PhoneItem = ({ name, manufacturer, imageURL }) => {
  return (
    <div className="phone">
      <div className="phone__top">
        <h1 className="phone__top__name">{name}</h1>
      </div>
      <div className="phone__image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="phone__bottom">
        <h2 className="phone__bottom__manufacturer">{manufacturer}</h2>
      </div>
    </div>
  );
};

export default PhoneItem;
