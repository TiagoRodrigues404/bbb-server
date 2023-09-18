const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

/*module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectModule: pg,
  port: DB_PORT,
  connect_timeout: '10',
});*/

module.exports = new Sequelize(
  'postgres://bbb_bky4_user:qy0JzJqEoH0mHWBSvsb0vhURcenslm0e@dpg-ck42gu6ru70s73du1qjg-a.oregon-postgres.render.com/bbb_bky4',
  {
    dialect: 'postgres',
    dialectModule: pg,
    connect_timeout: '10',
  }
);
