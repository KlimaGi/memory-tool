/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const mainRouter = require('./routes/router');

mongoose.connect(process.env.ATLAS_URI)
  .then(() => { console.log('connected ok'); })
  .catch((error) => {
    console.log('connection error', error);
  });

app.use(
  session({
    secret: 'dsfdvaeaf',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000', credentials: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }));
// express middleware, everything from req goes through express.json()
// which will convert the body to json format
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/', mainRouter);
