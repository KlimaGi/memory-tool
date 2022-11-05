/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const mainRouter = require('./routes/router');

mongoose.connect(process.env.ATLAS_URI)
  .then(() => { console.log('connected ok'); })
  .catch((error) => {
    console.log('connection error', error);
  });

app.use(cors());
// express middleware, everything from req goes through express.json()
// which will convert the body to json format
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/', mainRouter);
