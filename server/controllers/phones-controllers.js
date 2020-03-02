const HttpError = require('../models/http-error');
const Phone = require('../models/phone');

getPhones = async (req, res, next) => {
  const phones = await Phone.find().exec(); //turns it into a promise
  res.json(phones);
};

getPhoneById = async (req, res, next) => {
  const phoneId = req.params.phoneId;

  let phone;

  try {
    phone = await Phone.findById(phoneId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a phone.',
      500
    );
    return next(error);
  }

  if (!phone) {
    const error = new HttpError(
      'Could not find a phone for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ phone: phone.toObject({ getters: true }) }); // turns to true js object. that getter returns id to a string
};

exports.getPhoneById = getPhoneById;
exports.getPhones = getPhones;
