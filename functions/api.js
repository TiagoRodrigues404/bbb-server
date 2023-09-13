require('dotenv').config();
const express = require('express');
const sequelize = require('../db');
const api = express();
const models = require('../models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('../routes/index');
const errorHandler = require('../middleware/ErrorHandlingMiddleware');
const path = require('path');
const colors = require('colors');
const serverless = require('serverless-http');
const pg = require('pg');

const PORT = process.env.PORT || 3001;

api.use(cors());
api.use(express.json());
api.use(express.static(path.resolve(__dirname, 'static')));
api.use(fileUpload({}));
api.use('/api', router);

//Last in list
api.use(errorHandler);

//const start = async () => {
exports.handler = async (event, context) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    api.listen(PORT, () => {
      console.log(`App running on port ${PORT}`.bgWhite.black);
    });
    api.get('/api', (req, res) => {
      res.json({
        message: 'Hello from backend bbb-server express.js',
      });
    });
  } catch (e) {
    console.log(e);
  }
};

//start();
