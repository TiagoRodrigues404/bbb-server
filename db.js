const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize('postgres', 'postgres', 'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
  dialectModule: pg,
  port: '5432',
  sslmode: 'prefer',
  connect_timeout: 10,
});
