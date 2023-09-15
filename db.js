const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize('BestBuyBeauty', 'postgres', 'root', {
  host: '192.168.0.1',
  dialect: 'postgres',
  dialectModule: pg,
  port: '5432',
  sslmode: 'prefer',
  connect_timeout: 10,
});
