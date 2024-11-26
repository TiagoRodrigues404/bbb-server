const ApiError = require('../error/ApiError');
const sendNewPass = require('../sendNewPass');

class NewPassController {
  async send(req, res, next) {
    const {
      userEmail,
      userName,
      userNewPass,
    } = req.body;
    try {
      sendNewPass(
        userEmail,
        userName,
        userNewPass,
      );
      return res.json(req.body);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}
module.exports = new NewPassController();
