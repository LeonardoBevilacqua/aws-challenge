/* eslint-disable no-console */
import Sequelize from 'sequelize';
import {
  DB, HOST, PASSWORD, USER,
} from '../config/db.config.js';

// create connection
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
});

// open connection
sequelize.authenticate().then(
  () => console.log('Connection has been estabished with database'),
)
  .catch((err) => console.error('unable to connect to the database: ', err));

sequelize.sync()
  .catch((err) => console.log(err));

export default sequelize;
