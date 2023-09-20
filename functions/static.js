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
app.use('/static', express.static(path.join(process.cwd(), 'static')));
app.use(fileUpload({}));

app.use(errorHandler);

exports.handler = serverless(app, { binary: true });
