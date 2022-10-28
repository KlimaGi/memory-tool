const dotenv = require("dotenv");
const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

dotenv.config();
mongoose.connect(process.env.ATLAS_URI)
  .then(() => { console.log('connected ok') })
  .catch(error => {
    console.log('connection error', error)
  })

app.use(cors());

app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
