import Sequelize from 'sequelize';
import Category from './category.model.js';
import database from './db.js';

const Device = database.define('device', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  color: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
  partNumber: {
    type: Sequelize.INTEGER,
  },
});

Device.belongsTo(Category, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

export default Device;
