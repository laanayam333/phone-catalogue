const express = require('express');
const router = express.Router();

const phonesControllers = require('../controllers/phones-controllers');

//ROUTES
router.get('/', phonesControllers.getPhones);
router.get('/:phoneId', phonesControllers.getPhoneById);

module.exports = router;
