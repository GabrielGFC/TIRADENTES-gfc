const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('familia', {
    nome: {
        type: STRING(11),
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    descricao: {
        type: STRING(11),
        allowNull: false,
        primaryKey: true,
        unique: true,
    }
});

module.exports = User;
