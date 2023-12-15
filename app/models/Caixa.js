const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');
const Familia = require('./Familia');
const Item = require('./Item');

const Caixa =sequelize.define('Caixa', {
 
    Number:{
        type: INTEGER(3),//Formato xxx
        allowNull:false,
        unique : true,
        validate:{
            isThreeDigits(value) {
                if (value.toString().length > 3) {
                    throw new Error('O número da caixa deve ter no máximo 3 dígitos');
                }
            }
        }
    },
})

Caixa.belongsTo(Familia,{
    constraints: true,
    foreignKey: 'idFamilia'
}),

Caixa.belongsTo(Item,{
    constraints: true,
    foreignKey: 'idItem'
})




module.exports = Caixa;