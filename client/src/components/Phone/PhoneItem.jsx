import React from 'react';

import './PhoneItem.scss';

const PhoneItem = ({ name, manufacturer, imageURL }) => {
  return (
    <div className="phone">
      <div className="phone__name">
        <h1 className="phone__name__text">{name}</h1>
      </div>
      <div className="phone__image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="phone__manufacturer">
        <h2 className="phone__manufacturer__text">{manufacturer}</h2>
      </div>
    </div>
  );
};

export default PhoneItem;
