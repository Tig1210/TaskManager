const { DataTypes } = require('sequelize')
const db = require('../config/db')

// User Model (if needed)
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

// Schema Model
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
})
User.hasOne(Schema, {
  foreignKey: 'userId',
})

// Task Model
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

Schema.hasMany(Task, {
  foreignKey: 'schemeId',
})

module.exports = { User, Schema, Task }
