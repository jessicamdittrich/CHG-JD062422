// IMPORT PARTS OF SEQUALIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
// IMPORT DATABASE CONNECTION FROM CONFIG.JS
const sequelize = require('../config/connection.js');
// INITIALIZE PRODUCT MODEL TABLE BY EXTENDING OFF SEQUELIZE MODEL CLASS
class Category extends Model {}

Category.init(
  {
    // DEFINED FIELDS/COLUMNS ON MODEL
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// EXPORT MODULE
module.exports = Category;
