const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const yourSchema = new mongoose.Schema({
  
});

const YourModel = mongoose.model('YourModel', yourSchema);