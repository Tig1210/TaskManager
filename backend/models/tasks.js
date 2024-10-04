const { DataTypes } = require('sequelize')
const db = require('../config/db')
const Schema = require('./schema')

const Task = db.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  createdData: { type: DataTypes.DATE },
  status: {
    type: DataTypes.STRING,
  },
  schemeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Schema,
      key: 'id',
    },
  },
})

Task.belongsTo(Schema, {
  foreignKey: 'schemeId',
})

module.exports = Task
