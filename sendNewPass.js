const nodemailer = require('nodemailer');
require('dotenv').config();

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

const sendNewPass = async (to, name, newPassword) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });
    const message = {
      to,
      from: `Best Buy Beauty ${user}`,
      subject: `Solicitação de alteração de senha`,
      html: `
<div>${newPassword}</div>
        `,
    };
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
    const info = await transporter.sendMail(message);

    console.log(('Message sent', info.messageId));
  } catch (error) {
    console.log(error);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendNewPass;
