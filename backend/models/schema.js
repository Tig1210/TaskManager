const { DataTypes } = require('sequelize')
const db = require('../config/db')
const User = require('./users')

const Schema = db.define('Schema', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  headers_title: DataTypes.JSON,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
})

Schema.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

module.exports = Schema
