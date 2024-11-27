const Router = require('express');
const router = new Router();
const newPassController = require('../controllers/newPassController');

router.post('/', newPassController.sendPass);

module.exports = router;
