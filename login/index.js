const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Usmany:Jannah2016$@marketplace.pqmdtu3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const yourSchema = new mongoose.Schema({
  
});

const YourModel = mongoose.model('YourModel', yourSchema);