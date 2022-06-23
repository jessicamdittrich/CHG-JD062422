// IMPORT PARTS OF SEQUALIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
// IMPORT DATABASE CONNECTION FROM CONFIG.JS
const sequelize = require('../config/connection.js');
// INITIALIZE PRODUCT MODEL TABLE BY EXTENDING OFF SEQUELIZE MODEL CLASS
class Tag extends Model {}

Tag.init(
  {
    // DEFINED FIELDS/COLUMNS ON MODEL
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// EXPORT MODULE
module.exports = Tag;
