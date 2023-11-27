const ApiError = require('../error/ApiError');
const sendEmail = require('../sendEmail');

class MailController {
  async send(req, res) {
    const { email, userName } = req.body;
    try {
      sendEmail(email, userName);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new MailController();
