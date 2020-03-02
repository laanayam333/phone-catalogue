import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhones } from '../../redux';
import { Link } from 'react-router-dom';

import PhoneItem from './PhoneItem';

import './PhoneList.scss';

const PhoneList = () => {
  const phonesData = useSelector(state => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, []);

  return phonesData.loading ? (
    <h2>Loading...</h2>
  ) : phonesData.error ? (
    <h2>{phonesData.error}</h2>
  ) : (
    <div className="phones">
      <div className="phones__list">
        {phonesData.map(phone => (
          <div className="phones__list__item">
            <Link to={`/phones/${phone._id}`} key={phone._id}>
              <PhoneItem
                key={phone._id}
                name={phone.name}
                imageURL={phone.imageURL}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneList;
