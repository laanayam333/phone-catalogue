const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const phonesRoutes = require('./routes/phones-routes');
const HttpError = require('./models/http-error');

const app = express();

//! MIDDLEWARE
app.use(bodyParser.json());

//Solve CORS problems
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //controls which domains have access
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  ); //controls which headers incoming requests may have
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/phones', phonesRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//Mongoose connection
mongoose
  .connect(
    'mongodb+srv://laanayam:2hGSSikyA3I7qL0h@cluster0-jmlqf.mongodb.net/phones_db?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
