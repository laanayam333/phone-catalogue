import React from 'react';

import { useSelector } from 'react-redux';

import { useParams, Link } from 'react-router-dom';

import Spinner from '../components/shared/UIElements/Spinner';

import './PhoneDetails.scss';

const PhoneDetails = () => {
  const { phoneId } = useParams();

  const phonesData = useSelector(state => state.phoneReducer.phones);

  const phone = phonesData.find(phone => phoneId === phone._id.toString());

  const loading = useSelector(state => state.phoneReducer.loading);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="details">
        <div className="details__image">
          <img src={phone.imageURL} alt={phone.name} />
        </div>

        <div className="details__main">
          <h1 className="details__main__name">{phone.name}</h1>
          <h2 className="details__main__manufacturer"> {phone.manufacturer}</h2>
          <p className="details__main__description">{phone.description}</p>
        </div>

        <div className="details__specs">
          <h2 className="details__specs__title">Specs</h2>

          <h3 className="details__specs__subtitle">Color</h3>
          <p className="details__specs__description">{phone.color}</p>

          <h3 className="details__specs__subtitle">Price</h3>
          <p className="details__specs__description">{phone.price}</p>

          <h3 className="details__specs__subtitle">Screen</h3>
          <p className="details__specs__description">{phone.screen}</p>

          <h3 className="details__specs__subtitle">Processor</h3>
          <p className="details__specs__description">{phone.processor}</p>

          <h3 className="details__specs__subtitle">Ram</h3>
          <p className="details__specs__description">{phone.ram}</p>
        </div>
      </div>
      <Link className="back__btn" to="/" data-cy="return-home-button">
        <div className="back">
          <i className="las la-arrow-circle-left back__icon"></i>
          Back to all phones
        </div>
      </Link>
    </>
  );
};

export default PhoneDetails;
