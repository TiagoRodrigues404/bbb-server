const { default: fetch } = require('node-fetch');
const ApiError = require('../error/ApiError');

class SendmailController {
  async send(req, res, next) {
    try {
      const { userName, userSurname } = req.body;
      const result = await fetch('../sendmail.php', { userName, userSurname });
      return res.json(result);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new SendmailController();
