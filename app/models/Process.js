const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Process =sequelize.define('Process', {
    name:{
        type: STRING(255),
        allowNull: false,
    },
    process:{
        type: INTEGER(255),//Formato xxxxxxx-xx.xxxx.x.xx.xxxx
        allowNull: false,
        unique : true,
    },
    processType:{
        type: STRING(255),
        allowNull: false
    },
    estagiario:{
        type: STRING(255),
        allowNull: false
    },
    teacher:{
        type: STRING(255),
        allowNull: false
    },
    beginningDate: {
        type: STRING(11), // FORMATO 00/00/0000
        allowNull: false
    },
    tribunal: {
        type: STRING(255),
        allowNull: false
    },
    partesEvolvidas: {
        type: STRING(255),
        allowNull: false
    },
    instâncias: {
        type: STRING(225),
        allowNull: false
    },
    vara: {
        type: STRING(255),
        allowNull: false
    },
    description: {
        type: STRING(300),
        allowNull: false
    },

});

module.exports = Process;