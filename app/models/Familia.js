const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Familia = sequelize.define('Familia', {
    nome: {
        type: STRING(1,128),
        allowNull: true,
        primaryKey: true,
        unique: true,
    },
    descricao: {
        type: STRING(1,128),
        allowNull: true,
    }
})


module.exports = Familia;
