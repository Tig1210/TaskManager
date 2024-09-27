const { DataTypes } = require('sequelize')
const db = require('../config/db')

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  mail: DataTypes.STRING,
  login: DataTypes.STRING,
  password: DataTypes.STRING,
})

module.exports = User
