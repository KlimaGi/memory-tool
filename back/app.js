const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

mongoose.connect(process.env.ATLAS_URI)
  .then(() => { console.log('connected ok') })
  .catch(e => {
    console.log('connection error')
  })

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
