const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize('BestBuyBeauty', 'postgres', 'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
  dialectModule: pg,
  port: '5432',
  connect_timeout: '10',
  pool: {
    max: 2,

    min: 0,

    idle: 0,

    acquire: 3000,

    evict: CURRENT_LAMBDA_FUNCTION_TIMEOUT,
  },
});
