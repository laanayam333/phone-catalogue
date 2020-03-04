const HttpError = require('../models/http-error');
const Phone = require('../models/phone');

getPhones = async (req, res, next) => {
  try {
    const phones = await Phone.find(); // const phones = await Phone.find().exec(); // will execute returning a promise
    res.json(phones);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong could not load phone list.',
      500
    );
    return next(error);
  }
};

getPhoneById = async (req, res, next) => {
  const phoneId = req.params.phoneId;

  let phone;

  try {
    phone = await Phone.findById(phoneId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong. Could not find a phone for the provided id.',
      404
    );
    return next(error);
  }
  res.json(phone); //  res.json({ phone: phone.toObject({ getters: true }) }); // turns to true js object. that getter returns id to a string
};

exports.getPhones = getPhones;
exports.getPhoneById = getPhoneById;
