const nodemailer = require('nodemailer');

const sendEmail = async (to, userName) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.google.com',
      port: 465,
      secure: true,
      auth: {
        user: 'melioraspero24@gmail.com',
        pass: 'dsocxlxfbqfzorvw',
      },
    });
    const message = {
      to,
      subject: 'New message from Nodemailer APP',
      html: `<h3>Hi, ${userName}! You have received a new message from Best Buy Beauty website!</h3>`,
    };
    const info = await transporter.sendMail(message);
    console.log(('Message sent', info.messageId));
  } catch (error) {
    console.log(error);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendEmail;
