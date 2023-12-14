const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {

    // id:{
    //     type: INTEGER(),
    //     allowNull: false,
    //     autoIncrement:true,
    //     primaryKey: true
    //     },
    
    matricula:{
        type:INTEGER(7),
        allowNull: false,
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
        type:INTEGER(1,2),
        allowNull:false,
        validate: {
            isTwoDigits(value) {
                if (value.toString().length > 2) {
                    throw new Error('Matricula deve ter no máximo dígitos');
                }
            }
        }},
    
    cargo:{
        type:STRING(1),
        allowNull:false,
        validate: {
            Validating (value) {
                if (!["1","2","3"].includes(value)) {
                    throw new Error('Cargo deve ser 1, 2 ou 3')
                }
            },len:[1]
        }}
});


module.exports = User;