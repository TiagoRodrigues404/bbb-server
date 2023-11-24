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

await transporter.sendMail({
  from: 'melioraspero24@gmail.com',
  to: 'olena.liekan@gmail.com',
  subject: 'hello world',
  html: '<h1>hello world</h1>',
});
