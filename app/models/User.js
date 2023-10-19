const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User =sequelize.define('User', {
    cpf:{
        type:DataTypes.STRING(11), //FORMATO 123.456.789-09
        allowNull: false,
        primatyKey:true,
        unique : true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports = User;
