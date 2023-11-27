const ApiError = require('../error/ApiError');
const sendEmail = require('../sendEmail');

class MailController {
  async send(req, res) {
    const { email, nome } = req.body;
    try {
      sendEmail(email, nome);
      res.render('email-form', {
        status: 'success',
        message: 'Email sent successfully',
      });
    } catch (error) {
      console.log(error);
      res.render('email-form', {
        status: 'error',
        message: 'Error sending email',
      });
    }
  }
}
module.exports = new MailController();
