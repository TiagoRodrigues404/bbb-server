const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');
const { upload } = require('../cloudinary');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const { img } = req.files;
    const cloudFile = await upload(img.tempFilePath);
    const fileName = cloudFile.secure_url.split('/').pop();
    const brand = await Brand.create({ name, img: fileName });
    return res.json(brand);
  }

  async destroy(req, res) {
    const { id } = req.query;
    const brand = await Brand.destroy({
      where: { id },
    });
    return res.json(brand);
  }

  async update(req, res) {
    const brandId = req.params.id;
    let { name } = req.body;
    const { img } = req.files;

    const cloudFile = await upload(img.tempFilePath);
    const fileName = cloudFile.secure_url.split('/').pop();
    const options = { where: { id: brandId } };
    const brand = await Brand.update({ name, img: fileName }, options);
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll({
      order: [['id', 'ASC']],
    });
    return res.json(brands);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const brand = await Brand.findOne({
      where: { id },
    });
    return res.json(brand);
  }
}

module.exports = new BrandController();
