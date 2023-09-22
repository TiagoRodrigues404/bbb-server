require('dotenv').config();
const express = require('express');
const sequelize = require('../db');
const app = express();
const setSecurityHeaders = require('../headers.js');
const models = require('../models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('../routes/index');
const errorHandler = require('../middleware/ErrorHandlingMiddleware');
const path = require('path');
const colors = require('colors');
const serverless = require('serverless-http');
const pg = require('pg');
const fs = require('fs');
const cloudinary = require('cloudinary');

const corsOptions = { origin: 'https://best-buy-beauty.netlify.app' };

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', express.static(path.join(process.cwd(), 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.disable('x-powered-by');
app.use(setSecurityHeaders);

//Last in list
app.use(errorHandler);

app.get('/api', (req, res) => {
  res.json({
    message: `${process.cwd()}, ${__dirname}`,
  });
});

callback(null, {
  statusCode: 200,
  body: 'Hello world!',
  headers: {
    'ACCESS-CONTROL-ALLOW-ORIGIN': '*',
    'ACCESS-CONTROL-ALLOW-HEADERS': 'Content-Type',
    'ACCESS-CONTROL-ALLOW-METHODS': 'GET, POST, PUT, DELETE, OPTIONS',
    'ACCESS-CONTROL-ALLOW-CREDENTIALS': true,
  },
}); 

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
start();

exports.handler = serverless(app, { binary: true });
