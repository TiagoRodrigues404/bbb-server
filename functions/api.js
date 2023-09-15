require('dotenv').config();
const express = require('express');
const sequelize = require('../db');
const app = express();
const models = require('../models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('../routes/index');
const errorHandler = require('../middleware/ErrorHandlingMiddleware');
const path = require('path');
const colors = require('colors');
const serverless = require('serverless-http');
const pg = require('pg');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//Last in list
app.use(errorHandler);

exports.handler = serverless(app);

const start = async () => {
  app.get('/api', (req, res) => {
    res.json({
      message: 'Hello from backend bbb-server express.js',
    });
  });
  try {
    await sequelize.authenticate();
    console.log('Connected!');
    //await sequelize.sync();
  } catch (e) {
    console.log('Didn`t connect', e);
  }
};

start();
