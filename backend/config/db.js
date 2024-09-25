const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('TaskManager','postgres','admin', {
    host: 'localhost',
    dialect:'postgres'
})



module.exports = sequelize