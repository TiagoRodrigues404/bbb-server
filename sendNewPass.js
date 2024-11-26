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
      to: `maledi2010@i.ua`,
      from: `bestbuybeauty.pt@gmail.com`,
      subject: `Solicitação de alteração de senha`,
      html: `
<div>New pass</div>
        `,
    };

    const info = await transporter.sendMail(message);

    console.log(('Message sent', info.messageId));
  } catch (error) {
    console.log(error);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendNewPass;
