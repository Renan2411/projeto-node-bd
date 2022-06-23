const DB_CONFIG = require('../database/configuration')
const Sequelize = require('sequelize');
const { DB } = require('../database/configuration');

const sequelize = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: DB_CONFIG.dialect,
    pool:{
        max: DB_CONFIG.pool.max,
        min: DB_CONFIG.pool.min,
        acquire: DB_CONFIG.pool.acquire,
        idle: DB_CONFIG.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modelos de tabela
db.userModel = require('./UserModel')(sequelize, Sequelize)

module.exports = db;