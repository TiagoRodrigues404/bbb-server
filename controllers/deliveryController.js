const { DeliveryPrice } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeliveryController {
  async create(req, res) {
    const { price, type } = req.body;
    const delivery = await DeliveryPrice.create({ price, type });
    return res.json(delivery);
  }

  async getAll(req, res) {
    const deliveries = await DeliveryPrice.findAll({
      order: [['id', 'ASC']],
    });
    return res.json(deliveries);
  }
}

module.exports = new DeliveryController();
