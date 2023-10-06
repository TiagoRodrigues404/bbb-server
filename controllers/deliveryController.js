const { DeliveryPrice } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeliveryController {
  async create(req, res) {
    const { price, type } = req.body;
    const deliveryPrice = await DeliveryPrice.create({ price, type });
    return res.json(deliveryPrice);
  }

  async getAll(req, res) {
    const deliveryPrices = await DeliveryPrice.findAll({
      order: [['id', 'ASC']],
    });
    return res.json(deliveryPrices);
  }
}

module.exports = new DeliveryController();
