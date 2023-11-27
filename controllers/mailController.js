const ApiError = require('../error/ApiError');
const sendEmail = require('../sendEmail');

class MailController {
  async send(req, res) {
    const { userEmail, userName } = req.body;
    try {
      sendEmail(userEmail, userName);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new MailController();
