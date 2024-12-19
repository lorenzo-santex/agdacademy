'use strict';
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); 

const Ciudad = sequelize.define('Ciudad', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Provincia',
      key: 'id'
    }
  },
  code: {
    type: DataTypes.STRING(3),
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Ciudad'
});

module.exports = Ciudad;