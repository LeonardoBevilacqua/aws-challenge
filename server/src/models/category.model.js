import Sequelize from 'sequelize';
import database from './db.js';

const Category = database.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
});

export default Category;
