const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize('BestBuyBeauty', 'postgres', 'root', {
  dialect: 'postgres',
  host: '127.0.0.1',
  dialectModule: pg,
  port: '5432',
});
