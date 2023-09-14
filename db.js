const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: '127.0.0.1',
  dialectModule: pg,
  port: process.env.DB_PORT,
});
