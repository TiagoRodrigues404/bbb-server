const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.google.com',
  port: 465,
  secure: true,
  auth: {
    user: 'melioraspero24@gmail.com',
    pass: 'dsocxlxfbqfzorvw',
  },
});

module.exports = { transporter };
