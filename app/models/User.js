const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    matricula:{
        type:INTEGER(7), //FORMATO 123.456.789-09
        allowNull: false,
        primatyKey:true,
        unique : true,
        validate: {
            isSevenDigits(value) {
                if (value.toString().length !== 7) {
                    throw new Error('Matricula deve ter 7 dígitos');
                }
            }
        }
    },
    senha:{
        type:STRING(1,128),
        allowNull:false,
        validate: {len:[1,128]}},
        
    email:{
        type:STRING(1,128),
        allowNull:false,
        validate: {len:[1,128]}},

    nome:{
        type:STRING(1,128),
        allowNull:false,
        validate: {len:[1,128]}},

    periodo:{
        type:INTEGER(2),
        allowNull:false,
        validate: {
            istwoDigits(value) {
                if (value.toString().length > 2) {
                    throw new Error('Matricula deve ter no máximo dígitos');
                }
            }
        }},
    
    cargo:{
        type:STRING(1,128),
        allowNull:false,
        validate: {len:[1,128]}}
});


module.exports = User;