const { PaymentDetails } = require('../models/models');
const ApiError = require('../error/ApiError');

class PaymentController {
  async create(req, res, next) {
    try {
      const { iban, recipient } = req.body;
      const payment = await PaymentDetails.create({ iban, recipient });
      return res.json(payment);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const payments = await PaymentDetails.findAll({
      order: [['id', 'ASC']],
    });
    return res.json(payments);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const delivery = await DeliveryPrice.findOne({
      where: { id },
    });
    return res.json(delivery);
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { iban, recipient } = req.body;
      const options = { where: { id: id } };
      let props = {};
      if (iban) {
        props = { ...props, iban };
      }
      if (recipient) {
        props = { ...props, recipient };
      }
      const payment = await PaymentDetails.update(props, options);
      return res.json(payment);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new PaymentController();
