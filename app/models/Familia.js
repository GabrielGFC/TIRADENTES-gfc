const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('familia', {
    nome: {
        type: STRING(1,128),
        allowNull: false,
        unique: true,
    },
    descricao: {
        type: STRING(1,128),
        allowNull: false,
    }
});

module.exports = User;
