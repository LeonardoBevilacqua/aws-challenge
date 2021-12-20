import Sequelize from 'sequelize';
import database from './db.js';

const Test = database.define('test', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: Sequelize.STRING,
});

export default Test;
