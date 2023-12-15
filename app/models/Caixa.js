const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');
const Familia = require('./Familia');
const Item = require('./Item');

const Caixa =sequelize.define('Caixa', {
 
    idCaixa:{
        type: INTEGER(3),//Formato xxx
        allowNull:false,
        unique : true,
        primaryKey: true,
        validate:{
            isThreeDigits(value) {
                if (value.toString().length > 3) {
                    throw new Error('O número da caixa deve ter no máximo 3 dígitos');
                }
            }
        }
    },
})

Caixa.belongsTo(Item,{
    constraints: true,
    foreignKey: 'idItem'
})

Familia.hasMany(Caixa,{
    constraints: true,
    foreignKey: 'idFamilia'
}),



module.exports = Caixa;