const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Estoque = sequelize.define('Estoque', {

     id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement:true,
         primaryKey: true},

    // numeroCaixa:{
    //     type:INTEGER(1,3), 
    //     allowNull: false,
    //     unique : true,
    //     validate: {
    //         isThreeDigits(value) {
    //             if (value.toString().length > 3) {
    //                 throw new Error('O número da caixa deve ter no máximo 3 dígitos');
    //             }
    //         }
    //     }
    // },

    // quantidade:{
    //     type:INTEGER(1,3),
    //     allowNull:false,
    //     validate: {
    //         isThreeDigits(value) {
    //             if (value.toString().length > 3) {
    //                 throw new Error('A quantidade deve ter no máximo 3 dígitos');
    //             }
    //         }
    //     }},
        
    // // dataEntrada:{
    // //     type:DataTypes.DATE,
    // //     allowNull:false,
    // //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    // //     validate: {isDate: true}},

    // // dataMovimentacao:{
    // //     type:DataTypes.DATE,
    // //     allowNull:false,
    // //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    // //     validate: {isDate: true}},
    
    // dataSaida:{
    //     type:DataTypes.DATE,
    //     allowNull:false,
    //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //     validate: {isDate: true}},
    
    // familia:{
    //     type:STRING(1,128),
    //     allowNull:false,
    //     validate: {len:[1,128]}},

    // colaborador:{
    //     type:STRING(1,128),
    //     allowNull:false,
    //     validate: {len:[1,128]}},

    },
    {hooks: {
    //     beforeCreate: (estoque, options) => {
    //         // Define a dataEntrada como a data e hora atuais no momento do CREATE
    //         estoque.dataEntrada = new Date();
    //         estoque.dataMovimentacao = new Date()
    //     },

        beforeUpdate: (estoque, options) => {
            // Define a dataMovimentacao como a data e hora atuais no momento do UPDATE
            estoque.dataSaida = new Date();
        }
        }
})



// Os comentários listados podem ser utilizados futuramente

module.exports = Estoque;