import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './PhoneDetails.scss';

const PhoneDetails = () => {
  const phonesData = useSelector(state => state.phones);

  const { phoneId } = useParams();

  console.log(`phones data ${phonesData}`);

  const selectedPhone = phonesData.find(phone => phone._id === phoneId);

  console.log(`the selected phone is ${selectedPhone.manufacturer}`);

  return (
    <div className="details">
      <img
        src={selectedPhone.imageURL}
        alt={selectedPhone.name}
        className="details__image"
      />
      <h1 className="details__name">
        {selectedPhone.manufacturer}'s {selectedPhone.name}
      </h1>
      <p className="details__description">{selectedPhone.description}</p>
      <h2 className="details__specs">Phone Specs</h2>

      <h3 className="details__specs__heading">Color</h3>
      <p className="details__description">{selectedPhone.color}</p>

      <h3 className="details__specs__heading">Price</h3>
      <p className="details__description">{selectedPhone.price}</p>

      <h3 className="details__specs__heading">Screen</h3>
      <p className="details__description">{selectedPhone.screen}</p>

      <h3 className="details__specs__heading">Processor</h3>
      <p className="details__description">{selectedPhone.processor}</p>

      <h3 className="details__specs__heading">Ram</h3>
      <p className="details__description">{selectedPhone.ram}</p>
    </div>
  );
};

export default PhoneDetails;
