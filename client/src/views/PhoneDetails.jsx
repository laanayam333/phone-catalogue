import React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import './PhoneDetails.scss';

const PhoneDetails = () => {
  const phonesData = useSelector(state => state.phones);

  const { phoneId } = useParams();

  console.log(phonesData);

  const selectedPhone = phonesData.find(phone => phone._id === phoneId);

  console.log(selectedPhone);

  return (
    <div className="details">
      <img
        src={selectedPhone.imageURL}
        alt={selectedPhone.name}
        className="details__image"
      />
      <h1 className="details__name">{selectedPhone.name}</h1>
      <p className="details__description">{selectedPhone.description}</p>
    </div>
  );
};

export default PhoneDetails;
