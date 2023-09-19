const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const errorHandler = require('../middleware/ErrorHandlingMiddleware');
const serverless = require('serverless-http');

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

exports.handler = async (request, context, callback) => {
  const path2 = path.join(process.cwd(), 'static', 'catalog-08.jpg');
  const pngBuffer = fs.readFileSync(path2);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'image/jpg' },
    body: pngBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};
