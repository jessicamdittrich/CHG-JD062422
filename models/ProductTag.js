// IMPORT PARTS OF SEQUALIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
// IMPORT DATABASE CONNECTION FROM CONFIG.JS
const sequelize = require('../config/connection');
// INITIALIZE PRODUCT MODEL TABLE BY EXTENDING OFF SEQUELIZE MODEL CLASS
class ProductTag extends Model {}

ProductTag.init(
  {
    // DEFINED FIELDS/COLUMNS ON MODEL
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// EXPORT MODULE
module.exports = ProductTag;
