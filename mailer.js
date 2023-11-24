const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'melioraspero24@gmail.com',
    pass: 'dsocxlxfbqfzorvw',
  },
});

const mailOptions = {
  from: 'melioraspero24@gmail.com',
  to: 'olena.liekan@gmail.com',
  subject: 'Best Buy Beauty',
  text: 'Success!',
};

transporter.sendMail(mailOptions);
