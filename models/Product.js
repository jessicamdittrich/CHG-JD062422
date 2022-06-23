// IMPORT PARTS OF SEQUALIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
// IMPORT DATABASE CONNECTION FROM CONFIG.JS
const sequelize = require('../config/connection');
// INITIALIZE PRODUCT MODEL TABLE BY EXTENDING OFF SEQUELIZE MODEL CLASS
class Product extends Model {}

Product.init(
  {
    // DEFINED FIELDS/COLUMNS ON MODEL
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// EXPORT MODULE
module.exports = Product;
