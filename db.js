const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize('BestBuyBeauty', 'postgres', 'root', {
  host: '35.156.224.161',
  dialect: 'postgres',
  dialectModule: pg,
  port: '5432',
  sslmode: 'prefer',
  connect_timeout: 10,
});
