const ApiError = require('../error/ApiError');

class SendmailController {
  async send(req, res, next) {
    try {
      const result = req.body;
      return res.json(result);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new SendmailController();
