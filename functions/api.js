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
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use('/api', express.static(path.join(process.env.LAMBDA_TASK_ROOT, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

const setSecurityHeaders = (_, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Cross-Origin-Resource-Policy': 'same-site',
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Referrer-Policy': 'no-referrer',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Expect-CT': 'enforce, max-age=86400',
    'Content-Security-Policy': `object-src 'none'; script-src 'self'; img-src 'self'; frame-ancestors 'self'; require-trusted-types-for 'script'; block-all-mixed-content; upgrade-insecure-requests`,
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  });
  next();
};

app.disable('x-powered-by');
app.use(setSecurityHeaders);

//Last in list
app.use(errorHandler);

app.get('/api', (req, res) => {
  res.json({
    message: `Current directory: ${fs.readdirSync(__dirname)}`,
  });
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
