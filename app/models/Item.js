const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {

    // id:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement:true,
    //     primaryKey: true},
        
    nome:{
        type:STRING(1,128),
        allowNull:false,
        validate: {len:[1,128]}},

    quantidade:{
        type:INTEGER(1,3),
        allowNull:false,
        validate: {
            isThreeDigits(value) {
                if (value.toString().length > 3) {
                    throw new Error('A quantidade deve ter no máximo 3 dígitos');
                }
            }
        }},

    descricao:{
        type:STRING(1,500),
        allowNull:false,
        validate: {len:[1,500]}},
});


module.exports = Item;