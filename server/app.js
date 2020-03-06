const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const phonesRoutes = require('./routes/phones-routes');
const HttpError = require('./models/http-error');

const app = express();

//!MIDDLEWARES
app.use(bodyParser.json());

app.use(cors());

//  ROUTES
app.use('/phones', phonesRoutes);

//!ERROR HANDLING MIDDLEWARE
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

//!DATABASE CONNECTION
mongoose
  .connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },

    () => console.log('Connected to database')
  )

  //!LISTEN TO SERVER

  .then(() => {
    app.listen(5001);
  })

  .catch(err => {
    console.log(err);
  });
